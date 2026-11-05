#!/usr/bin/env python3
"""Generate PROCTORED_CIRCUIT_POOL (full) and PROCTORED_CLAMP_TRACE_POOL JS."""
import json
import random

def balance_opts(opts, correct):
    opts = list(opts)
    if random.random() < 0.72:
        clen = len(opts[correct])
        tail = " (not implied by the circuit wiring described above.)"
        for j in range(4):
            if j != correct and len(opts[j]) <= clen + 6:
                opts[j] = opts[j] + tail
    return opts


def mcq(topic, module, q, opts, correct, expl, wrong=None):
    opts = balance_opts(opts, correct)
    wrong = wrong or ["", "", "", ""]
    return f"""  {{
    topic: {json.dumps(topic)},
    module: {json.dumps(module)},
    question: {json.dumps(q)},
    options: [
      {json.dumps(opts[0])},
      {json.dumps(opts[1])},
      {json.dumps(opts[2])},
      {json.dumps(opts[3])}
    ],
    correct: {correct},
    explanation: {json.dumps(expl)},
    wrongExplanations: [
      {json.dumps(wrong[0])},
      {json.dumps(wrong[1])},
      {json.dumps(wrong[2])},
      {json.dumps(wrong[3])}
    ]
  }}"""

def clamp(topic, q, svg, opts, correct, expl, wrong):
    return mcq(topic, "part1", q, opts, correct, expl, wrong).replace(
        f'    explanation: {json.dumps(expl)},',
        f'    diagram: {json.dumps(svg)},\n    explanation: {json.dumps(expl)},',
        1,
    )

CIRCUITS = [
    ("Three-neuron chain: sensory → excitatory interneuron → motor. Sensory fires; interneuron is blocked. Motor output?",
     ["Reduced or absent excitation of motor neuron", "Increased motor firing", "Only neuromodulation", "Saltatory conduction in muscle"],
     0, "Without the interneuron relay, the motor neuron receives little or no excitation."),
    ("Recurrent inhibition: motor neuron excites interneuron that inhibits the same motor neuron. Effect?",
     ["Negative feedback limiting firing duration", "Runaway excitation", "Only LTP", "Myelin formation"],
     0, "Recurrent inhibition provides negative feedback on motor neuron firing."),
    ("Feedforward inhibition: sensory input excites both relay neuron and interneuron that inhibits relay. Net effect on relay timing?",
     ["Narrower window for relay firing (sharper temporal filtering)", "Relay fires longer without limit", "Relay cannot fire at all always", "Only gap junction coupling"],
     0, "Feedforward inhibition curtails relay output to a brief window."),
    ("Disinhibition: inhibitory interneuron is silenced, releasing target neuron from inhibition. Target neuron activity?",
     ["Increases (disinhibition)", "Always decreases", "Unchanged always", "Only photoreceptor responds"],
     0, "Removing inhibition increases target excitability."),
    ("Reciprocal inhibition between two antagonist motor pools (flexor/extensor). When flexor pool is active, extensor pool?",
     ["Reciprocally inhibited (reduced firing)", "Co-activated equally", "Unrelated", "Only sensory firing"],
     0, "Reciprocal inhibition prevents co-contraction of antagonists."),
    ("Central pattern generator (CPG) for locomotion: rhythmic output persists after sensory input ends. This implies?",
     ["Recurrent excitatory/inhibitory loops can sustain rhythm intrinsically", "Sensory input required every cycle always", "Only myelin generates rhythm", "Only cortex required each step"],
     0, "CPGs use local circuit dynamics to maintain rhythmic motor patterns."),
    ("Aplysia siphon withdrawal: strong tail shock sensitizes siphon response via serotonin on sensory terminals. Mechanism?",
     ["Serotonin increases cAMP/PKA and broadens sensory terminal excitability (sensitization)", "Only postsynaptic K⁺ block always", "Only long-term depression", "Only gap junction opening"],
     0, "Serotonin modulates presynaptic release in Aplysia sensitization."),
    ("Summation: EPSP +5 mV and IPSP −3 mV arrive simultaneously at soma (linear range). Approximate net change?",
     ["+2 mV toward threshold", "+8 mV always", "−8 mV always", "0 mV always"],
     0, "Subthreshold linear summation: +5 + (−3) ≈ +2 mV."),
    ("Two EPSPs +3 mV each arrive 2 ms apart within τ_m. Compared with one EPSP, somatic depolarization?",
     ["Greater peak (temporal summation)", "Same peak always", "Zero always", "Only inhibition results"],
     0, "Temporal summation within τ increases peak depolarization."),
    ("Feedback inhibition in cortex: pyramidal cell activates interneuron that inhibits same pyramidal cell. Function?",
     ["Gain control and stabilization of firing rate", "Guaranteed runaway activity", "Only LTP induction", "Only myelin repair"],
     0, "Feedback inhibition stabilizes cortical firing."),
    ("Lateral inhibition in retina: surround inhibits center. Visual edge enhancement occurs because?",
     ["Contrast at borders increases due to differential center vs surround firing", "All pixels fire equally", "Only photoreceptors spike", "Only cochlea tuned"],
     0, "Lateral inhibition enhances contrast at edges."),
    ("Inhibitory interneuron (PV+) provides perisomatic inhibition on pyramidal cell. Effect on spike timing?",
     ["Precise control of spike timing and synchrony", "Only increases firing rate without bound", "Only blocks all input permanently", "Only affects glomeruli"],
     0, "Perisomatic inhibition strongly regulates spike timing."),
    ("Excitatory drive to motor neuron with concurrent shunting inhibition (open Cl⁻ channels). EPSP amplitude at soma?",
     ["Reduced (shunting) even if E_Cl near rest", "Always increased", "Unchanged always", "Only Na⁺ blocked"],
     0, "Increased conductance shunts EPSPs."),
    ("Divergent excitatory circuit: one sensory neuron drives many motor neurons. Effect?",
     ["Amplification/spread of signal to multiple outputs", "Only one motor neuron can ever fire", "Only inhibition spreads", "Only photoreceptor signal"],
     0, "Divergence distributes input to many targets."),
    ("Convergent excitatory circuit: many sensory neurons onto one motor neuron. Effect?",
     ["Spatial summation can reach threshold more easily", "Motor neuron cannot integrate inputs", "Only one synapse matters always", "Only gap junctions converge"],
     0, "Convergence allows spatial summation."),
    ("Renshaw cell recurrent inhibition on alpha motor neuron after firing. Purpose?",
     ["Limits firing rate and prevents over-excitation", "Increases firing without limit", "Only LTP at NMJ", "Only cerebellar learning"],
     0, "Renshaw cells provide recurrent inhibition to motor neurons."),
    ("Mutual excitation between two neurons with slow synapses. Possible circuit behavior?",
     ["Sustained co-activation or oscillations depending on kinetics", "Immediate silence always", "Only photopigment bleaching", "Only DCML loss"],
     0, "Mutual excitation can sustain activity or oscillate."),
]

SVG_IV = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 160" role="img" aria-label="I-V curve"><rect width="340" height="160" fill="#fafafa"/><text x="170" y="14" text-anchor="middle" font-size="10">I (nA)</text><text x="8" y="80" font-size="10" transform="rotate(-90 8 80)">V_m (mV)</text><line x1="40" y1="140" x2="300" y2="140" stroke="#333"/><line x1="40" y1="20" x2="40" y2="140" stroke="#333"/><polyline fill="none" stroke="#a41034" stroke-width="2" points="40,100 120,100 200,40 280,120"/></svg>'
SVG_TTX = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 160" role="img" aria-label="TTX clamp"><rect width="340" height="160" fill="#fafafa"/><text x="170" y="14" text-anchor="middle" font-size="10">I (nA) vs time</text><line x1="30" y1="130" x2="310" y2="130" stroke="#333"/><polyline fill="none" stroke="#a41034" stroke-width="2" points="30,90 100,90 100,95 250,95"/></svg>'
SVG_TEA = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 160" role="img" aria-label="TEA clamp"><rect width="340" height="160" fill="#fafafa"/><text x="170" y="14" text-anchor="middle" font-size="10">I (nA) vs time</text><polyline fill="none" stroke="#a41034" stroke-width="2" points="30,90 100,90 100,40 250,40 250,70 300,70"/></svg>'
SVG_KONLY = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 160" role="img" aria-label="K only"><rect width="340" height="160" fill="#fafafa"/><text x="170" y="14" text-anchor="middle" font-size="10">I_K (nA)</text><polyline fill="none" stroke="#a41034" stroke-width="2" points="30,100 100,100 100,120 250,120"/></svg>'
SVG_CC = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 160" role="img" aria-label="current clamp"><rect width="340" height="160" fill="#fafafa"/><text x="170" y="14" text-anchor="middle" font-size="10">V_m (mV) vs time</text><polyline fill="none" stroke="#a41034" stroke-width="2" points="30,110 100,110 100,70 220,70 220,85 300,85"/></svg>'
SVG_SUB = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 160" role="img" aria-label="subthreshold"><rect width="340" height="160" fill="#fafafa"/><text x="170" y="14" text-anchor="middle" font-size="10">V_m (mV)</text><polyline fill="none" stroke="#a41034" stroke-width="2" points="30,100 100,100 100,85 250,85"/></svg>'

CLAMPS = [
    ("The clamp trace shows a depolarizing step to 0 mV with early inward then late outward current (squid axon). Which currents dominate each phase?",
     SVG_TTX.replace("TTX", "HH step"), ["Early inward Na⁺; later outward K⁺", "Only K⁺ throughout", "Only leak current", "Ca²⁺ only inward at all times"],
     0, "Depolarizing clamp activates Na⁺ first, then delayed K⁺.", ["", "K⁺ alone cannot explain early inward current at 0 mV from rest.", "Leak alone does not reproduce Hodgkin–Huxley sequence.", "Ca²⁺ is not the primary squid axon clamp inward at this step."]),
    ("After TTX, the same voltage step shows only late outward current. This outward current is primarily:",
     SVG_TTX, ["Voltage-gated K⁺", "Na⁺ influx", "Photopigment current", "Glomerular odor current"],
     0, "TTX blocks Na⁺; remaining outward current is primarily K⁺.", ["", "Na⁺ is blocked by TTX in this condition.", "Not a photoreceptor recording.", "Not olfactory epithelium."]),
    ("After TEA, the early inward current remains but repolarizing outward current is reduced. Early inward is:",
     SVG_TEA, ["Na⁺ current (TEA blocks K⁺)", "Only Cl⁻", "Only pump current", "Only gap junction"],
     0, "TEA blocks K⁺ channels; inward Na⁺ remains on depolarizing steps.", ["", "Cl⁻ is not the early inward at 0 mV here.", "Pump current is negligible at ms scale.", "Gap junctions are not the clamp signal."]),
    ("K⁺-only condition (Na⁺ blocked): step to −40 mV produces sustained outward current. This indicates:",
     SVG_KONLY, ["K⁺ channels open at depolarized command", "Na⁺ regenerative spike", "Only photopigment", "Only muscle spindle"],
     0, "With Na⁺ blocked, outward K⁺ follows depolarizing command.", ["", "Na⁺ is pharmacologically blocked.", "Not phototransduction.", "Not spindle stretch."]),
    ("I–V plot shows inward current at depolarized potentials crossing zero near +55 mV. This reversal near +55 mV suggests:",
     SVG_IV, ["Predominantly Na⁺ current under these conditions", "Predominantly K⁺ only at all voltages", "No ionic currents", "Only Cl⁻ at all voltages"],
     0, "Na⁺ reversal near +55 mV matches inward current reversing there.", ["", "K⁺ reversal is near E_K (~−90 mV).", "Ionic currents are present.", "Cl⁻ reversal is typically negative to rest."]),
    ("Current-clamp: brief hyperpolarizing current step produces exponential return with time constant τ. τ primarily reflects:",
     SVG_CC, ["R_m × C_m membrane properties", "Axon diameter only", "Only synaptic quanta", "Only myelin thickness without R_m"],
     0, "Passive τ = R_m C_m.", ["", "Diameter affects R_a and λ, not τ alone directly.", "Synaptic quanta are not the passive τ here.", "Myelin affects λ and conduction, not this passive τ definition."]),
    ("Subthreshold current-clamp step produces graded depolarization without spikes. The trace shows:",
     SVG_SUB, ["Passive/subthreshold response without regenerative Na⁺ activation", "Full action potential train", "Only synaptic vesicle fusion", "Only cochlear tuning"],
     0, "Subthreshold steps do not trigger regenerative spikes.", ["", "No Na⁺ regenerative upstroke is shown.", "Vesicle fusion is not the plotted V_m.", "Not basilar membrane tuning."]),
]

print("const PROCTORED_CIRCUIT_POOL = [")
for i, (q, opts, c, e) in enumerate(CIRCUITS):
    w = ["", f"Incorrect: {opts[1]} does not follow from the stated circuit.", f"Incorrect: {opts[2]} is inconsistent with the wiring described.", f"Incorrect: {opts[3]} is unrelated to this circuit."]
    if c != 0:
        w[0] = f"Incorrect: {opts[0]} does not follow from the stated circuit."
    print(mcq("Neural Circuits", "part2", q, opts, c, e, w) + ("," if i < len(CIRCUITS)-1 else ""))
print("];")
print()
print("const PROCTORED_CLAMP_TRACE_POOL = [")
for i, (q, svg, opts, c, e, w) in enumerate(CLAMPS):
    print(clamp("Voltage Clamp", q, svg, opts, c, e, w) + ("," if i < len(CLAMPS)-1 else ""))
print("];")
