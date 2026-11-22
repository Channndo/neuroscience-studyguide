export function isShortenedOption(short, full) {
  const s = String(short ?? "").trim();
  const f = String(full ?? "").trim();
  if (!s || !f || s === f) return false;
  if (f.length < s.length + 2) return false;
  if (!f.startsWith(s)) return false;
  const rest = f.slice(s.length);
  return /^(\s+[\w(/]|[,;:—])/.test(rest);
}