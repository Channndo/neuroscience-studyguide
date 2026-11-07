/**
 * Objective-level performance tracking and mastery estimates.
 */
(function (root) {
  const MASTERY_MIN_ATTEMPTS = 3;
  const MASTERY_PCT = 0.75;

  function objectiveKey(q) {
    const course = q?.course || q?.module || "general";
    const obj = q?.objective || q?.topic || "general";
    return `${course}::${obj}`;
  }

  function ensureObjectiveStats(data) {
    if (!data.objectiveStats) data.objectiveStats = {};
    return data.objectiveStats;
  }

  function recordObjectiveAttempt(data, q, correct) {
    const stats = ensureObjectiveStats(data);
    const key = objectiveKey(q);
    if (!stats[key]) {
      stats[key] = {
        course: q?.course || q?.module,
        topic: q?.topic,
        objective: q?.objective,
        correct: 0,
        total: 0,
        attempts: [],
      };
    }
    const row = stats[key];
    row.total++;
    if (correct) row.correct++;
    row.attempts.unshift({ ts: Date.now(), correct: !!correct });
    if (row.attempts.length > 20) row.attempts.length = 20;
  }

  function estimateMastery(stat) {
    if (!stat || stat.total < MASTERY_MIN_ATTEMPTS) return { level: "insufficient_data", pct: null };
    const recent = stat.attempts.slice(0, MASTERY_MIN_ATTEMPTS);
    const hit = recent.filter(a => a.correct).length;
    const pct = hit / recent.length;
    if (pct >= MASTERY_PCT) return { level: "mastery", pct };
    if (pct >= 0.5) return { level: "developing", pct };
    return { level: "weak", pct };
  }

  function weakestObjectives(data, limit = 5) {
    const stats = data?.objectiveStats || {};
    return Object.entries(stats)
      .map(([key, s]) => ({ key, ...s, mastery: estimateMastery(s) })
      .filter(r => r.total >= 2 && r.mastery.level === "weak")
      .sort((a, b) => a.correct / a.total - b.correct / b.total)
      .slice(0, limit);
  }

  function remediationHints(weak) {
    return weak.map(w => ({
      label: w.objective || w.topic || w.key,
      hint: `Review ${w.topic || "this topic"} (${w.correct}/${w.total} recent). Try a focused chapter quiz or flashcards from missed items.`,
    }));
  }

  root.MCB80XLearning = {
    objectiveKey,
    recordObjectiveAttempt,
    estimateMastery,
    weakestObjectives,
    remediationHints,
    MASTERY_MIN_ATTEMPTS,
    MASTERY_PCT,
  };
})(typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : this);
