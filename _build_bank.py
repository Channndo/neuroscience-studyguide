#!/usr/bin/env python3
"""Rebuild questions-bank.js from kept good questions plus new MCB80x items."""

import json
import re
from pathlib import Path

ROOT = Path(__file__).parent
GOOD_PATH = ROOT / "_good_questions.json"
OUT_PATH = ROOT / "questions-bank.js"

TARGETS = {
    "NEW_TIER1": 55,
    "NEW_TIER2": 50,
    "NEW_TIER3": 50,
    "NEW_TIER4": 100,
}

SUPPLEMENTAL = {
    "NEW_TIER1": [
        {
            "topic": "Resting Potential",
            "question": "The primary cation with highest permeability at rest in most neurons is:",
            "options": ["K\u207a", "Na\u207a", "Ca\u00b2\u207a", "Mg\u00b2\u207a"],
            "correct": 0,
            "explanation": "Dominant K\u207a leak conductance makes resting V_m lie near E_K in typical neurons.",
        },
        {
            "topic": "Nernst Equation",
            "question": "For a positively charged ion, if extracellular concentration exceeds intracellular concentration, E_ion is:",
            "options": ["Positive (inside relative to outside)", "Negative (inside relative to outside)", "Always exactly 0 mV", "Undefined without temperature"],
            "correct": 0,
            "explanation": "A concentration gradient favoring inward flux for a cation yields a positive equilibrium potential.",
        },
        {
            "topic": "Passive Membrane Properties",
            "question": "Membrane capacitance (C_m) represents the ability of the membrane to:",
            "options": ["Store charge across the lipid bilayer", "Pump ions against gradients", "Generate action potentials without channels", "Conduct current through gap junctions only"],
            "correct": 0,
            "explanation": "The lipid bilayer acts as a capacitor; C_m determines how much charge is needed to change V_m.",
        },
        {
            "topic": "Action Potentials",
            "question": "The all-or-none property of action potentials means that:",
            "options": ["Suprathreshold stimuli produce full-amplitude spikes", "Subthreshold stimuli produce larger spikes than threshold stimuli", "Spike amplitude scales linearly with stimulus strength above threshold", "Each channel opens partially in proportion to stimulus"],
            "correct": 0,
            "explanation": "Once threshold is reached, regenerative Na\u207a current produces a stereotyped full spike.",
        },
        {
            "topic": "Action Potential Propagation",
            "question": "Action potentials propagate without decrement because:",
            "options": ["Each depolarized segment actively regenerates the spike in adjacent membrane", "Passive spread alone carries the full spike amplitude indefinitely", "Myelin eliminates the need for ion channels", "The Na\u207a/K\u207a pump propagates voltage directly"],
            "correct": 0,
            "explanation": "Active regeneration at each point along the axon maintains spike amplitude during propagation.",
        },
        {
            "topic": "Electrical Signaling",
            "question": "Hyperpolarization means the membrane potential becomes:",
            "options": ["More negative than at rest", "Less negative than at rest", "Exactly 0 mV", "Equal to E_Na"],
            "correct": 0,
            "explanation": "Hyperpolarization is a shift to a more negative V_m relative to rest.",
        },
        {
            "topic": "Chemical Synapses",
            "question": "The synaptic cleft separates:",
            "options": ["Presynaptic terminal and postsynaptic membrane", "Axon hillock and initial segment only", "Two dendrites connected by connexins", "Photoreceptor outer segment and pigment epithelium"],
            "correct": 0,
            "explanation": "Chemical synapses transmit via neurotransmitter diffusion across the cleft to postsynaptic receptors.",
        },
        {
            "topic": "Synaptic Transmission",
            "question": "A miniature EPSP (mEPSP) reflects:",
            "options": ["Postsynaptic response to spontaneous release of one vesicle", "An action potential in the postsynaptic cell", "Passive spread from a neighboring axon without receptors", "Pump activity in the presynaptic terminal"],
            "correct": 0,
            "explanation": "Spontaneous quantal release produces discrete mEPSPs corresponding to single vesicle events.",
        },
        {
            "topic": "Receptor Types",
            "question": "Metabotropic receptors are coupled to:",
            "options": ["G proteins and second-messenger cascades", "Direct ion pore opening without intermediates", "Voltage sensors in the S4 segment", "SNARE proteins for exocytosis"],
            "correct": 0,
            "explanation": "Metabotropic receptors activate G proteins that modulate channels and enzymes via second messengers.",
        },
        {
            "topic": "Synaptic Integration",
            "question": "Shunting inhibition reduces EPSP amplitude primarily by:",
            "options": ["Lowering input resistance and diverting current", "Opening Na\u207a channels at the axon hillock", "Increasing length constant indefinitely", "Blocking the Na\u207a/K\u207a pump"],
            "correct": 0,
            "explanation": "Increased conductance lowers input resistance, shunting depolarizing current and shrinking EPSPs.",
        },
        {
            "topic": "Neural Circuits",
            "question": "Lateral inhibition in sensory systems serves to:",
            "options": ["Enhance contrast between active and neighboring regions", "Eliminate all spontaneous activity", "Convert chemical to electrical synapses", "Block all feedforward input"],
            "correct": 0,
            "explanation": "Lateral inhibition sharpens stimulus representation by suppressing adjacent channels or cells.",
        },
        {
            "topic": "Neuromodulation",
            "question": "Volume transmission describes neuromodulator signaling that:",
            "options": ["Diffuses broadly rather than point-to-point across a single cleft", "Requires electrical synapses exclusively", "Occurs only at the neuromuscular junction", "Uses voltage-gated Na\u207a channels as receptors"],
            "correct": 0,
            "explanation": "Neuromodulators can act on many targets via diffuse extracellular spread.",
        },
        {
            "topic": "Visual System",
            "question": "Photoreceptor outer segments contain:",
            "options": ["Membrane disks with photopigment molecules", "Myelin wraps for saltatory conduction", "Voltage-gated Na\u207a channels for spiking", "Hair cell stereocilia and tip links"],
            "correct": 0,
            "explanation": "Rod and cone outer segments house photopigment in stacked membranous disks for light capture.",
        },
        {
            "topic": "Auditory System",
            "question": "The basilar membrane in the cochlea is tonotopically organized such that:",
            "options": ["High frequencies peak near the base and low frequencies near the apex", "All frequencies activate the same location equally", "Low frequencies peak at the base only", "Sound intensity alone determines location without frequency"],
            "correct": 0,
            "explanation": "Mechanical properties vary along the cochlea, mapping frequency to position (tonotopy).",
        },
        {
            "topic": "Somatosensation",
            "question": "Free nerve endings in skin primarily detect:",
            "options": ["Pain and temperature", "High-frequency vibration at Pacinian frequency", "Sustained pressure with Merkel-like precision", "Photons of visible light"],
            "correct": 0,
            "explanation": "Free nerve endings are nociceptors and thermoreceptors for pain and temperature.",
        },
        {
            "topic": "Olfaction",
            "question": "Each olfactory sensory neuron typically expresses:",
            "options": ["One functional odor receptor type", "All receptor genes simultaneously", "Only photopigment genes", "Nicotinic acetylcholine receptors exclusively"],
            "correct": 0,
            "explanation": "One-receptor-per-neuron rule supports combinatorial odor coding in the bulb.",
        },
        {
            "topic": "Neuroanatomy",
            "question": "White matter tracts consist primarily of:",
            "options": ["Myelinated axons", "Neuronal cell bodies and dendrites", "Synaptic cleft fluid", "Photoreceptor outer segments"],
            "correct": 0,
            "explanation": "White matter is dominated by myelinated axon bundles connecting brain regions.",
        },
        {
            "topic": "Motor Systems",
            "question": "Lower motor neurons directly innervate:",
            "options": ["Skeletal muscle fibers", "Only upper motor neurons in cortex", "Photoreceptors in the retina", "Olfactory bulb mitral cells"],
            "correct": 0,
            "explanation": "Lower motor neurons in brainstem and spinal cord synapse on skeletal muscle.",
        },
        {
            "topic": "Learning & Memory",
            "question": "Procedural memory for skills is most associated with:",
            "options": ["Basal ganglia and cerebellum", "Only hippocampal CA1 pyramidal cells", "Photoreceptor transduction cascades", "Cochlear outer hair cells exclusively"],
            "correct": 0,
            "explanation": "Motor and procedural learning engages basal ganglia and cerebellar circuits.",
        },
        {
            "topic": "Brain Function",
            "question": "The thalamus functions primarily as:",
            "options": ["A relay station for sensory information to cortex", "The sole site of phototransduction", "The origin of cerebrospinal fluid", "The only location of action potential initiation"],
            "correct": 0,
            "explanation": "Thalamic nuclei gate and relay sensory and motor signals to cerebral cortex.",
        },
        {
            "topic": "Electrical Synapses",
            "question": "Connexons in gap junctions are composed of:",
            "options": ["Connexin proteins forming intercellular pores", "SNARE complexes for vesicle fusion", "Rhodopsin molecules", "Voltage-gated Na\u207a channel alpha subunits"],
            "correct": 0,
            "explanation": "Six connexins assemble into a connexon hemichannel that aligns with a partner cell.",
        },
        {
            "topic": "Second Messengers",
            "question": "cAMP is degraded by the enzyme:",
            "options": ["Phosphodiesterase", "Adenylyl cyclase", "Protein kinase A directly without enzymes", "Voltage-gated K\u207a channels"],
            "correct": 0,
            "explanation": "Phosphodiesterase breaks down cAMP, terminating G-protein-coupled signaling.",
        },
        {
            "topic": "Resting Potential",
            "question": "Cl\u207b equilibrium potential is often near resting V_m in many neurons because:",
            "options": ["Cl\u207b channels passively set V_Cl near rest via transporter activity", "Cl\u207b is impermeant at all times", "The Na\u207a/K\u207a pump excludes all Cl\u207b from the cell", "Cl\u207b channels open only during action potentials"],
            "correct": 0,
            "explanation": "Cl\u207b transporters and leak conductance often place E_Cl close to resting potential.",
        },
        {
            "topic": "Action Potentials",
            "question": "Tetrodotoxin (TTX) blocks action potentials by binding to:",
            "options": ["Voltage-gated Na\u207a channels", "Voltage-gated K\u207a channels only", "Nicotinic receptors at the neuromuscular junction", "Gap junction connexins"],
            "correct": 0,
            "explanation": "TTX selectively blocks the pore of voltage-gated Na\u207a channels.",
        },
        {
            "topic": "Synaptic Transmission",
            "question": "Endocytosis at the presynaptic terminal recaptures:",
            "options": ["Membrane and vesicle components after exocytosis", "Only neurotransmitter without membrane", "Postsynaptic receptors into the cleft", "Myelin wraps from adjacent internodes"],
            "correct": 0,
            "explanation": "Synaptic vesicle membrane is retrieved by endocytosis to replenish the vesicle pool.",
        },
        {
            "topic": "Visual System",
            "question": "Horizontal cells in the retina contribute to:",
            "options": ["Lateral inhibition and contrast enhancement", "Saltatory conduction in optic nerve", "Mechanotransduction in the cochlea", "Olfactory combinatorial coding"],
            "correct": 0,
            "explanation": "Horizontal cells mediate lateral inhibition between photoreceptors and bipolar cells.",
        },
        {
            "topic": "Auditory System",
            "question": "Outer hair cells in the cochlea enhance sensitivity through:",
            "options": ["Electromotility that amplifies basilar membrane motion", "Releasing glutamate onto photoreceptors", "Generating action potentials with higher amplitude than inner hair cells always", "Expressing rhodopsin for dim-light hearing"],
            "correct": 0,
            "explanation": "Outer hair cell electromotility actively boosts cochlear amplification.",
        },
        {
            "topic": "Neuroanatomy",
            "question": "The blood-brain barrier restricts passage of many substances primarily at:",
            "options": ["CNS capillary endothelial tight junctions", "Nodes of Ranvier in peripheral nerve", "Synaptic clefts of all chemical synapses", "Photoreceptor outer segments"],
            "correct": 0,
            "explanation": "Tight junctions between CNS endothelial cells limit paracellular diffusion into brain tissue.",
        },
        {
            "topic": "Learning & Memory",
            "question": "Long-term potentiation (LTP) is defined as:",
            "options": ["A persistent increase in synaptic strength after high-frequency stimulation", "Permanent elimination of all inhibitory synapses", "A decrease in quantal size after one mEPSP", "Passive decay of EPSPs along dendrites only"],
            "correct": 0,
            "explanation": "LTP is use-dependent strengthening of synaptic transmission, studied prominently at hippocampal synapses.",
        },
    ],
    "NEW_TIER2": [
        {
            "topic": "Resting Potential",
            "question": "If E_K = \u221290 mV and E_Na = +60 mV, increasing P_Na/P_K at rest will shift V_m:",
            "options": ["Toward E_Na (less negative)", "Toward E_K (more negative)", "To exactly the arithmetic mean (\u221215 mV) always", "Away from both equilibrium potentials equally"],
            "correct": 0,
            "explanation": "Goldman weighting pulls V_m toward the equilibrium potential of the ion with increased relative permeability.",
        },
        {
            "topic": "Nernst Equation",
            "question": "Raising intracellular Na\u207a concentration while extracellular Na\u207a is fixed will make E_Na:",
            "options": ["Less positive (closer to 0 mV)", "More positive", "Equal to E_K", "Independent of Na\u207a gradients"],
            "correct": 0,
            "explanation": "Higher internal Na\u207a reduces the inward driving force, lowering E_Na.",
        },
        {
            "topic": "Passive Membrane Properties",
            "question": "Doubling membrane resistance R_m while keeping C_m constant will:",
            "options": ["Double the time constant \u03c4 and increase input resistance", "Halve the time constant \u03c4", "Have no effect on passive properties", "Prevent spatial summation entirely"],
            "correct": 0,
            "explanation": "\u03c4 = R_m C_m and input resistance scale with R_m.",
        },
        {
            "topic": "Action Potentials",
            "question": "Afterhyperpolarization following a spike is driven mainly by:",
            "options": ["Persistent K\u207a efflux through voltage-gated K\u207a channels", "Continued Na\u207a influx", "Opening of ligand-gated AMPA receptors", "Electrogenic pump reversal"],
            "correct": 0,
            "explanation": "Delayed K\u207a channel activity can hyperpolarize the membrane below rest after the spike.",
        },
        {
            "topic": "Action Potential Propagation",
            "question": "In saltatory conduction, the largest density of voltage-gated Na\u207a channels is at:",
            "options": ["Nodes of Ranvier", "Internodal myelin wraps", "Dendritic spines", "Photoreceptor outer segments"],
            "correct": 0,
            "explanation": "Na\u207a channels cluster at nodes where action potentials are actively regenerated.",
        },
        {
            "topic": "Electrical Signaling",
            "question": "If g_Na increases while V_m is held fixed, the Na\u207a equilibrium current (I_Na) according to I = g(V_m \u2212 E_ion) will:",
            "options": ["Increase in magnitude if V_m \u2260 E_Na", "Always become zero regardless of V_m", "Reverse sign without changing magnitude", "Depend only on the Na\u207a/K\u207a pump rate"],
            "correct": 0,
            "explanation": "Ohmic ion current scales with conductance times driving force (V_m \u2212 E_ion).",
        },
        {
            "topic": "Chemical Synapses",
            "question": "Synaptotagmin on synaptic vesicles acts as a:",
            "options": ["Ca\u00b2\u207a sensor triggering fast exocytosis", "Voltage-gated Na\u207a channel subunit", "Postsynaptic scaffold protein only", "Myelin structural protein"],
            "correct": 0,
            "explanation": "Ca\u00b2\u207a binding to synaptotagmin triggers SNARE-mediated fusion.",
        },
        {
            "topic": "Synaptic Transmission",
            "question": "If presynaptic Ca\u00b2\u207a influx is reduced, one expects:",
            "options": ["Lower probability of vesicle release", "Larger quantal size per vesicle always", "Postsynaptic receptor number to increase instantly", "Conversion of IPSPs to action potentials in the axon"],
            "correct": 0,
            "explanation": "Release probability is steeply dependent on presynaptic Ca\u00b2\u207a concentration.",
        },
        {
            "topic": "Receptor Types",
            "question": "Glycine receptors at spinal inhibitory synapses are:",
            "options": ["Ionotropic Cl\u207b channels producing fast IPSPs", "Metabotropic G-protein receptors only", "Voltage-gated Na\u207a channels", "Electrical synapses via connexins"],
            "correct": 0,
            "explanation": "Glycine receptors are ligand-gated anion channels mediating fast inhibition in spinal cord.",
        },
        {
            "topic": "Synaptic Integration",
            "question": "Coincidence detection at a synapse is exemplified by:",
            "options": ["NMDA receptor activation requiring presynaptic release and postsynaptic depolarization", "AMPA-only transmission without voltage dependence", "Electrical synapses that lack voltage sensitivity", "Passive decay that ignores timing"],
            "correct": 0,
            "explanation": "NMDA receptors act as coincidence detectors for Hebbian plasticity.",
        },
        {
            "topic": "Neural Circuits",
            "question": "Disynaptic inhibition refers to:",
            "options": ["An inhibitory interneuron interposed between excitatory input and target", "Direct monosynaptic excitation only", "Electrical coupling without chemical synapses", "Recurrent excitation without inhibition"],
            "correct": 0,
            "explanation": "Disynaptic pathways include an intermediate inhibitory neuron.",
        },
        {
            "topic": "Neuromodulation",
            "question": "Serotonin (5-HT) commonly modulates circuits through:",
            "options": ["Multiple G-protein-coupled receptor subtypes", "Direct ligand-gated cation pores only at all synapses", "Voltage-gated Na\u207a channels in photoreceptors", "Tip-link gating in hair cells"],
            "correct": 0,
            "explanation": "5-HT acts through diverse metabotropic receptors altering excitability and plasticity.",
        },
        {
            "topic": "Visual System",
            "question": "On-center retinal ganglion cells increase firing when:",
            "options": ["Light hits the receptive field center", "Light hits only the surround without center stimulation", "The cochlea is stimulated by sound", "Odorants bind glomerular receptors"],
            "correct": 0,
            "explanation": "ON-center cells are excited by center illumination and often inhibited by surround light.",
        },
        {
            "topic": "Auditory System",
            "question": "Auditory nerve fibers encode sound intensity primarily by:",
            "options": ["Increasing firing rate with louder stimuli", "Changing the wavelength of basilar membrane resonance only", "Switching from rods to cones", "Eliminating all spontaneous activity at threshold"],
            "correct": 0,
            "explanation": "Rate coding in auditory nerve fibers conveys stimulus intensity.",
        },
        {
            "topic": "Somatosensation",
            "question": "Meissner corpuscles in glabrous skin are most sensitive to:",
            "options": ["Low-frequency flutter and texture", "Sustained deep pressure only", "Light photons in scotopic conditions", "Odorant concentration gradients"],
            "correct": 0,
            "explanation": "Meissner corpuscles are rapidly adapting receptors for light touch and texture.",
        },
        {
            "topic": "Olfaction",
            "question": "Mitral cells in the olfactory bulb receive input from:",
            "options": ["Olfactory sensory neuron axons in glomeruli", "Inner hair cells of the cochlea", "Retinal bipolar cells exclusively", "Upper motor neurons in cortex"],
            "correct": 0,
            "explanation": "OSN axons synapse in glomeruli onto mitral/tufted cell dendrites.",
        },
        {
            "topic": "Neuroanatomy",
            "question": "The decussation of pyramidal tract fibers occurs mainly in:",
            "options": ["The medulla (pyramids)", "The retina only", "The olfactory epithelium", "The cochlear apex exclusively"],
            "correct": 0,
            "explanation": "Most corticospinal axons cross in the medullary pyramids.",
        },
        {
            "topic": "Motor Systems",
            "question": "Muscle spindles detect:",
            "options": ["Muscle stretch and length changes", "Light intensity in the fovea", "Sound frequency at the cochlear base", "Odor identity in glomeruli"],
            "correct": 0,
            "explanation": "Intrafusal fibers in spindles transduce stretch for proprioceptive feedback.",
        },
        {
            "topic": "Learning & Memory",
            "question": "LTD (long-term depression) is characterized by:",
            "options": ["Persistent decrease in synaptic strength after specific stimulation patterns", "Permanent block of all Na\u207a channels", "Increased photopigment bleaching", "Loss of all cochlear amplification"],
            "correct": 0,
            "explanation": "LTD is activity-dependent weakening of synaptic efficacy, complementing LTP.",
        },
        {
            "topic": "Brain Function",
            "question": "The primary visual cortex (V1) is organized such that:",
            "options": ["Neighboring columns represent neighboring regions of visual space", "All orientations are represented in one cell only", "Tonotopy maps frequency to position", "Odor types map one-to-one to single glomeruli without overlap"],
            "correct": 0,
            "explanation": "Retinotopic and columnar organization in V1 preserves spatial relationships from the retina.",
        },
        {
            "topic": "Electrical Synapses",
            "question": "A major advantage of electrical synapses over chemical synapses is:",
            "options": ["Faster, bidirectional signaling with minimal synaptic delay", "Ability to store long-term memories without protein synthesis", "Exclusive use of second messengers for amplification", "Requirement for Ca\u00b2\u207a-triggered exocytosis"],
            "correct": 0,
            "explanation": "Gap junctions pass current directly with very short latency.",
        },
        {
            "topic": "Second Messengers",
            "question": "Protein kinase A (PKA) is activated when:",
            "options": ["cAMP binds regulatory subunits releasing catalytic subunits", "IP\u2083 directly opens the Na\u207a channel pore", "Glutamate binds AMPA receptors without Na\u207a flux", "Photopigment is bleached in darkness"],
            "correct": 0,
            "explanation": "cAMP binding to PKA regulatory subunits frees active catalytic subunits.",
        },
        {
            "topic": "Action Potentials",
            "question": "Tetraethylammonium (TEA) applied to voltage-gated K\u207a channels typically:",
            "options": ["Prolongs repolarization and broadens the action potential", "Blocks Na\u207a channels and prevents initiation", "Hyperpolarizes photoreceptors in light", "Closes gap junction connexons exclusively"],
            "correct": 0,
            "explanation": "K\u207a channel block slows repolarization, widening the spike.",
        },
        {
            "topic": "Passive Membrane Properties",
            "question": "An EPSP recorded at the soma from a distal dendritic synapse is smaller than at the synapse because of:",
            "options": ["Passive cable attenuation along dendrites", "Active regeneration in dendrites identical to axons", "Elimination of all ion gradients", "Exclusive Cl\u207b permeability at the soma only"],
            "correct": 0,
            "explanation": "Subthreshold signals decrement with distance due to leak and axial resistance.",
        },
        {
            "topic": "Synaptic Transmission",
            "question": "Desensitization of ionotropic receptors reduces the response because:",
            "options": ["Receptors enter a closed state despite ligand binding", "Vesicle pool is permanently depleted in one trial", "Myelin is removed from the presynaptic axon", "The Na\u207a/K\u207a pump reverses direction"],
            "correct": 0,
            "explanation": "Desensitized receptors fail to open even when neurotransmitter remains bound.",
        },
    ],
    "NEW_TIER3": [
        {
            "topic": "Resting Potential",
            "question": "If the Na\u207a/K\u207a pump rate doubles but relative leak conductances are unchanged, the immediate effect on V_m is:",
            "options": ["Slight hyperpolarization due to electrogenic 3Na\u207a/2K\u207a exchange", "Immediate depolarization to E_Na", "No change because pumps do not affect voltage", "Shift to E_Cl regardless of Cl\u207b conductance"],
            "correct": 0,
            "explanation": "Increased electrogenic pumping moves net positive charge out, hyperpolarizing slightly.",
        },
        {
            "topic": "Nernst Equation",
            "question": "At 37\u00b0C, a tenfold increase in external K\u207a (with fixed internal K\u207a) shifts E_K by approximately:",
            "options": ["+61 mV (toward 0 mV)", "\u221261 mV", "0 mV", "+120 mV"],
            "correct": 0,
            "explanation": "A tenfold change in concentration ratio changes E_ion by about 61 mV at body temperature.",
        },
        {
            "topic": "Passive Membrane Properties",
            "question": "If both R_m and R_i double while C_m is constant, the length constant \u03bb:",
            "options": ["Remains unchanged because \u03bb = \u221a(R_m/R_i)", "Doubles", "Halves", "Becomes zero"],
            "correct": 0,
            "explanation": "Proportional changes in R_m and R_i cancel in the ratio under the square root.",
        },
        {
            "topic": "Action Potentials",
            "question": "The positive feedback loop during the rising phase ends when:",
            "options": ["Na\u207a channel inactivation dominates and K\u207a efflux increases", "The pump stops entirely", "Cl\u207b conductance goes to zero", "Gap junctions close permanently"],
            "correct": 0,
            "explanation": "Inactivation of Na\u207a channels and activation of K\u207a channels terminate the upswing.",
        },
        {
            "topic": "Action Potential Propagation",
            "question": "Cooling an axon reduces conduction velocity primarily by:",
            "options": ["Slowing voltage-gated channel kinetics and ion diffusion", "Increasing myelin thickness", "Raising E_Na above +100 mV", "Eliminating passive spread between nodes"],
            "correct": 0,
            "explanation": "Temperature affects channel gating rates and ion mobility, slowing propagation.",
        },
        {
            "topic": "Electrical Signaling",
            "question": "If V_m is clamped at E_K, the driving force on K\u207a ions is:",
            "options": ["Zero (no net electrochemical driving force)", "Maximal inward", "Maximal outward always", "Determined only by the Na\u207a/K\u207a pump"],
            "correct": 0,
            "explanation": "When V_m equals E_ion, (V_m \u2212 E_ion) = 0 and net ion flux at equilibrium is zero.",
        },
        {
            "topic": "Chemical Synapses",
            "question": "Botulinum toxin reduces synaptic transmission by:",
            "options": ["Cleaving SNARE proteins required for vesicle fusion", "Opening all postsynaptic Cl\u207b channels", "Blocking voltage-gated K\u207a channels in photoreceptors", "Increasing rhodopsin activation in light"],
            "correct": 0,
            "explanation": "SNARE cleavage prevents Ca\u00b2\u207a-triggered exocytosis of neurotransmitter.",
        },
        {
            "topic": "Synaptic Transmission",
            "question": "Facilitation at a synapse after a short train of presynaptic spikes is often due to:",
            "options": ["Residual presynaptic Ca\u00b2\u207a elevating release probability", "Immediate postsynaptic receptor insertion without activity", "Permanent myelin loss", "Photoreceptor dark current increase"],
            "correct": 0,
            "explanation": "Leftover Ca\u00b2\u207a from prior spikes increases probability of subsequent release.",
        },
        {
            "topic": "Receptor Types",
            "question": "GABA_B receptors inhibit neurons primarily by:",
            "options": ["Activating GIRK K\u207a channels and reducing Ca\u00b2\u207a channel activity", "Direct fast Cl\u207b influx identical to GABA_A", "Opening voltage-gated Na\u207a channels", "Bleaching photopigment in rods"],
            "correct": 0,
            "explanation": "Metabotropic GABA_B signaling opens K\u207a channels and inhibits Ca\u00b2\u207a channels.",
        },
        {
            "topic": "Synaptic Integration",
            "question": "Divisive normalization in neural circuits adjusts responses by:",
            "options": ["Scaling activity relative to pooled network activity", "Adding only excitatory inputs without inhibition", "Eliminating all passive membrane properties", "Converting chemical synapses to gap junctions exclusively"],
            "correct": 0,
            "explanation": "Divisive normalization divides a neuron's response by a common factor, controlling gain across the population.",
        },
        {
            "topic": "Neural Circuits",
            "question": "Winner-take-all dynamics in a network can arise from:",
            "options": ["Recurrent lateral inhibition among excitatory units", "Elimination of all inhibitory interneurons", "Exclusive electrical synapses without thresholds", "Constant photoreceptor dark current"],
            "correct": 0,
            "explanation": "Lateral inhibition suppresses non-selected units, sharpening competition.",
        },
        {
            "topic": "Neuromodulation",
            "question": "Norepinephrine increases cortical arousal partly by:",
            "options": ["Modulating HCN and other channels via \u03b2-adrenergic receptors", "Directly gating nicotinic ACh pores at the neuromuscular junction", "Mechanically deflecting inner hair cell stereocilia", "Increasing photopigment synthesis in cones only"],
            "correct": 0,
            "explanation": "NE modulates intrinsic excitability and synaptic gain through metabotropic pathways.",
        },
        {
            "topic": "Visual System",
            "question": "Receptive field orientation selectivity in V1 simple cells reflects:",
            "options": ["Specific arrangements of ON and OFF subregions in space", "Tonotopic mapping of sound frequency", "Olfactory glomerular identity alone", "Exclusive input from rods without cones"],
            "correct": 0,
            "explanation": "Simple cells respond best to edges at a preferred orientation due to elongated ON/OFF zones.",
        },
        {
            "topic": "Auditory System",
            "question": "Phase locking in auditory brainstem neurons helps encode:",
            "options": ["Low-frequency pitch via precise spike timing to waveform phase", "Color opponency in the fovea", "Odor concentration without temporal structure", "Muscle spindle length without frequency information"],
            "correct": 0,
            "explanation": "At low frequencies, timing of spikes to stimulus phase carries pitch information.",
        },
        {
            "topic": "Somatosensation",
            "question": "Two-point discrimination acuity is highest on fingertips because:",
            "options": ["Receptor density and cortical magnification are greatest there", "Pacinian corpuscles are absent in glabrous skin", "Photoreceptors are packed in the fingertip epidermis", "Olfactory receptors line the glabrous surface"],
            "correct": 0,
            "explanation": "High receptor density and large somatosensory cortical representation improve spatial acuity.",
        },
        {
            "topic": "Olfaction",
            "question": "Granule cells in the olfactory bulb provide:",
            "options": ["Recurrent inhibition onto mitral cells via dendrodendritic synapses", "Direct transduction of odorants to action potentials", "Mechanotransduction of sound in the cochlea", "Saltatory conduction in the optic nerve"],
            "correct": 0,
            "explanation": "Granule cell inhibition shapes mitral cell output and odor discrimination.",
        },
        {
            "topic": "Neuroanatomy",
            "question": "The limbic system is functionally linked to:",
            "options": ["Emotion, memory, and motivated behavior", "Exclusive control of phototransduction", "Cochlear amplification by outer hair cells only", "Direct generation of CSF in muscle spindles"],
            "correct": 0,
            "explanation": "Limbic structures (e.g., amygdala, hippocampus) integrate affect and memory.",
        },
        {
            "topic": "Motor Systems",
            "question": "The cerebellum contributes to motor control primarily by:",
            "options": ["Error correction and timing of movements via mossy and climbing fiber input", "Transducing odorants in glomeruli", "Encoding color opponency in blobs", "Generating the cochlear traveling wave"],
            "correct": 0,
            "explanation": "Cerebellar circuits compare intended and actual movement for fine coordination.",
        },
        {
            "topic": "Learning & Memory",
            "question": "Protein synthesis is required for long-term memory because:",
            "options": ["Persistent synaptic changes require new proteins for structural plasticity", "Immediate early genes alone permanently store memory without translation", "Photopigment regeneration depends on ribosomes in outer segments", "Action potentials cannot occur without new ion channel genes each second"],
            "correct": 0,
            "explanation": "Consolidation engages transcription and translation to stabilize synaptic changes.",
        },
        {
            "topic": "Brain Function",
            "question": "Default mode network activity is most prominent during:",
            "options": ["Internally directed cognition when not engaged in a task", "Active phototransduction in bright light only", "Cochlear resonance at high frequencies exclusively", "Muscle spindle stretch during maximal contraction only"],
            "correct": 0,
            "explanation": "DMN regions are active during rest, mind-wandering, and self-referential thought.",
        },
        {
            "topic": "Electrical Synapses",
            "question": "Electrical coupling strength between cells can be modulated by:",
            "options": ["Phosphorylation state of connexins altering gap junction conductance", "SNARE-mediated vesicle fusion in the cleft", "Photopigment bleaching in rods", "Tip-link tension in stereocilia"],
            "correct": 0,
            "explanation": "Connexin phosphorylation and trafficking regulate gap junction permeability.",
        },
        {
            "topic": "Second Messengers",
            "question": "DAG (diacylglycerol) activates:",
            "options": ["Protein kinase C at the membrane", "Voltage-gated Na\u207a channels directly without lipids", "Rhodopsin in the dark", "The Na\u207a/K\u207a pump exclusively"],
            "correct": 0,
            "explanation": "PLC cleavage of PIP\u2082 yields DAG, which activates PKC alongside Ca\u00b2\u207a.",
        },
        {
            "topic": "Action Potentials",
            "question": "A neuron with reduced Na\u207a channel density will likely show:",
            "options": ["Higher threshold and slower rising phase", "Lower threshold and faster rising phase", "No change in excitability", "Permanent hyperpolarization to E_K without stimulation"],
            "correct": 0,
            "explanation": "Fewer Na\u207a channels require stronger depolarization and slow regenerative upswing.",
        },
        {
            "topic": "Passive Membrane Properties",
            "question": "Under voltage clamp, increasing membrane conductance while holding voltage constant increases:",
            "options": ["Clamp current required to maintain the set voltage", "Resting potential without clamp", "Length constant without changing resistance", "Photoreceptor sensitivity to light"],
            "correct": 0,
            "explanation": "More conductance demands more compensatory current to hold V_m fixed.",
        },
        {
            "topic": "Synaptic Transmission",
            "question": "Stochastic release at a synapse means:",
            "options": ["Only a fraction of presynaptic spikes trigger vesicle fusion", "Every spike releases exactly one vesicle with certainty", "Postsynaptic receptors are never activated", "Quantal size varies with action potential amplitude above threshold"],
            "correct": 0,
            "explanation": "Release probability is less than 1, making transmission probabilistic.",
        },
    ],
    "NEW_TIER4": [
        {
            "topic": "Resting Potential",
            "question": "With E_K = \u221290 mV, E_Na = +60 mV, E_Cl = \u221270 mV, and P_K:P_Na:P_Cl = 1:0.05:0.45 at rest, V_m is closest to:",
            "options": ["Between E_K and E_Cl, weighted by conductances", "Exactly E_Na", "Exactly 0 mV", "The average of all three without weighting"],
            "correct": 0,
            "explanation": "Goldman equation weights each permeant ion; significant Cl\u207b conductance pulls V_m toward E_Cl.",
        },
        {
            "topic": "Nernst Equation",
            "question": "If z = +2 for Ca\u00b2\u207a, a fourfold increase in external Ca\u00b2\u207a (fixed internal) changes E_Ca by approximately:",
            "options": ["+30 mV at 37\u00b0C", "+61 mV", "0 mV", "\u221261 mV"],
            "correct": 0,
            "explanation": "For divalent ions the Nernst slope is halved (~30 mV per tenfold change at 37\u00b0C).",
        },
        {
            "topic": "Passive Membrane Properties",
            "question": "Separating R_m and R_i effects: increasing R_m alone increases both \u03bb and \u03c4, whereas increasing R_i alone:",
            "options": ["Decreases \u03bb but leaves \u03c4 unchanged if C_m is constant", "Increases both \u03bb and \u03c4", "Decreases \u03c4 and increases \u03bb", "Affects neither \u03bb nor \u03c4"],
            "correct": 0,
            "explanation": "\u03bb = \u221a(R_m/R_i) falls with higher R_i; \u03c4 = R_m C_m depends on R_m only.",
        },
        {
            "topic": "Action Potentials",
            "question": "The minimal stimulus (rheobase) to elicit a spike increases during the relative refractory period because:",
            "options": ["Fewer Na\u207a channels are available due to inactivation", "All K\u207a channels are permanently deleted", "Myelin is absent at the AIS", "E_Na becomes negative"],
            "correct": 0,
            "explanation": "Partial Na\u207a channel inactivation raises the current needed to reach threshold.",
        },
        {
            "topic": "Action Potential Propagation",
            "question": "If nodal Na\u207a channel density is halved in a myelinated axon, conduction failure is most likely when:",
            "options": ["Internodal distance is long and passive decay is large", "Internodal distance is very short with strong passive spread", "The axon is unmyelinated", "Temperature is raised to accelerate kinetics"],
            "correct": 0,
            "explanation": "Insufficient nodal regeneration combined with excessive internodal decay blocks propagation.",
        },
        {
            "topic": "Electrical Signaling",
            "question": "Under conditions of constant total conductance, shifting relative g_K upward while holding V_m fixed increases:",
            "options": ["Outward K\u207a current if V_m > E_K", "Inward Na\u207a current if V_m < E_Na always", "Pump flux independent of gradients", "Photoreceptor cGMP concentration"],
            "correct": 0,
            "explanation": "Higher g_K with V_m above E_K increases outward K\u207a current (I_K = g_K(V_m \u2212 E_K)).",
        },
        {
            "topic": "Chemical Synapses",
            "question": "Capacitance measurements at presynaptic terminals during exocytosis detect:",
            "options": ["Increased membrane area as vesicles fuse", "Decreased area due to endocytosis only during release", "Changes in photopigment packing", "Cochlear basilar membrane stiffness"],
            "correct": 0,
            "explanation": "Vesicle fusion adds membrane to the surface, increasing capacitance.",
        },
        {
            "topic": "Synaptic Transmission",
            "question": "If release probability p approaches 1, the coefficient of variation (CV) of EPSC amplitude across trials:",
            "options": ["Decreases toward zero (less trial-to-trial variability)", "Increases without bound", "Equals p independent of quantal size", "Is determined solely by mEPSP frequency in darkness"],
            "correct": 0,
            "explanation": "When release is nearly deterministic, variability from binomial release statistics diminishes.",
        },
        {
            "topic": "Receptor Types",
            "question": "MK-801 blocks NMDA receptors by binding:",
            "options": ["Inside the pore in a use-dependent manner", "Only to AMPA receptors at the neuromuscular junction", "To photopigment retinaldehyde", "To connexin hemichannels exclusively"],
            "correct": 0,
            "explanation": "MK-801 enters the NMDA channel when open and traps inside (use dependence).",
        },
        {
            "topic": "Synaptic Integration",
            "question": "A dendritic EPSP is attenuated more at the soma if an inhibitory synapse on the same dendritic branch opens Cl\u207b channels because:",
            "options": ["Shunting reduces effective EPSP amplitude at the soma", "Cl\u207b channels always depolarize above 0 mV", "Inhibition increases \u03bb without bound", "Na\u207a channels cluster on dendrites identically to the AIS"],
            "correct": 0,
            "explanation": "Increased conductance on the path shunts EPSP current, reducing somatic signal.",
        },
        {
            "topic": "Neural Circuits",
            "question": "A feedforward inhibitory circuit that sets a delay line for coincidence detection requires:",
            "options": ["Matched timing of excitation and delayed inhibition onto the target", "Only electrical synapses without chemical components", "Exclusive photoreceptor input", "Elimination of all Na\u207a channels in interneurons"],
            "correct": 0,
            "explanation": "Precisely timed disynaptic inhibition can create windows for coincident excitation.",
        },
        {
            "topic": "Neuromodulation",
            "question": "Presynaptic inhibition via GABAergic terminals on sensory afferents often acts by:",
            "options": ["Depolarizing primary afferents (primary afferent depolarization) reducing Ca\u00b2\u207a influx", "Opening voltage-gated Na\u207a channels in photoreceptors", "Increasing tip-link tension in hair cells", "Blocking all postsynaptic AMPA receptors globally"],
            "correct": 0,
            "explanation": "PAD reduces presynaptic Ca\u00b2\u207a entry and transmitter release from sensory terminals.",
        },
        {
            "topic": "Visual System",
            "question": "Color opponency in parvocellular pathway cells arises from:",
            "options": ["Antagonistic cone inputs (e.g., L vs M cone opposition)", "Tonotopic mapping on the basilar membrane", "Olfactory receptor gene choice", "Muscle spindle Ia afferent convergence only"],
            "correct": 0,
            "explanation": "Opponent receptive fields compare cone signals to encode color contrast.",
        },
        {
            "topic": "Auditory System",
            "question": "The medial superior olive localizes low-frequency sounds using:",
            "options": ["Interaural time differences via delay lines and coincidence detection", "Interaural level differences only above 10 kHz without timing", "Photoreceptor convergence in the fovea", "Olfactory bulb granule cell inhibition exclusively"],
            "correct": 0,
            "explanation": "MSO neurons compare arrival times of sounds at the two ears for azimuth cues.",
        },
        {
            "topic": "Somatosensation",
            "question": "Rapid adaptation in Pacinian corpuscles means they respond best to:",
            "options": ["Onset and offset of vibration, not steady pressure", "Constant deep pressure without change", "Sustained Merkel disk pressure", "Steady odor presentation"],
            "correct": 0,
            "explanation": "Rapidly adapting receptors encode dynamic stimuli and silence during steady state.",
        },
        {
            "topic": "Olfaction",
            "question": "Sparse coding in piriform cortex means:",
            "options": ["Only a small fraction of neurons fire strongly for a given odor", "Every neuron fires identically for all odors", "Mitral cells never inhibit granule cells", "OSNs express all receptor types simultaneously"],
            "correct": 0,
            "explanation": "Distributed sparse ensembles represent odor identity in cortex.",
        },
        {
            "topic": "Neuroanatomy",
            "question": "The substantia nigra pars compacta is located in the:",
            "options": ["Midbrain and provides dopaminergic input to striatum", "Retina and transduces photons", "Cochlear apex and encodes low frequencies", "Olfactory epithelium and binds odorants"],
            "correct": 0,
            "explanation": "SNc dopamine neurons in midbrain project to dorsal striatum for motor control and learning.",
        },
        {
            "topic": "Motor Systems",
            "question": "Alpha motor neurons and gamma motor neurons differ in that gamma neurons:",
            "options": ["Innervate intrafusal muscle fibers in spindles", "Innervate extrafusal fibers producing force only", "Transduce sound in the cochlea", "Release glutamate onto photoreceptors"],
            "correct": 0,
            "explanation": "Gamma efferents adjust spindle sensitivity by contracting intrafusal fibers.",
        },
        {
            "topic": "Learning & Memory",
            "question": "Tagging-and-capture models of synaptic consolidation propose that:",
            "options": ["Synapses marked by activity capture plasticity-related proteins arriving globally", "All synapses strengthen without specificity", "Photopigment bleaching stores memory directly", "Only electrical synapses can undergo LTP"],
            "correct": 0,
            "explanation": "Local synaptic tags interact with globally synthesized PRPs to stabilize potentiation.",
        },
        {
            "topic": "Brain Function",
            "question": "Binocular rivalry occurs when:",
            "options": ["Different images to each eye compete for perceptual dominance", "Both eyes always fuse images without competition", "Cochlear nuclei encode interaural timing", "Olfactory bulb glomeruli merge all odors into one percept"],
            "correct": 0,
            "explanation": "Conflicting monocular inputs alternate in conscious perception during rivalry.",
        },
        {
            "topic": "Electrical Synapses",
            "question": "If two neurons are coupled by gap junctions, injecting hyperpolarizing current into one will:",
            "options": ["Hyperpolarize the coupled partner (if junction is open)", "Depolarize the partner always regardless of polarity", "Have no effect because gap junctions are rectifying always", "Trigger photopigment regeneration"],
            "correct": 0,
            "explanation": "Electrical synapses pass transmembrane voltage changes bidirectionally (non-rectifying case).",
        },
        {
            "topic": "Second Messengers",
            "question": "CaMKII autophosphorylation after Ca\u00b2\u207a influx can:",
            "options": ["Maintain kinase activity after Ca\u00b2\u207a returns to baseline", "Permanently open all Na\u207a channels without phosphorylation targets", "Directly cleave SNARE proteins", "Convert rods to cones"],
            "correct": 0,
            "explanation": "Autophosphorylation gives CaMKII memory of recent Ca\u00b2\u207a elevation, relevant to LTP maintenance.",
        },
        {
            "topic": "Resting Potential",
            "question": "Ouabain inhibition of Na\u207a/K\u207a ATPase eventually causes:",
            "options": ["Depolarization as Na\u207a and K\u207a gradients run down", "Immediate hyperpolarization to \u2212120 mV", "Block of all gap junctions", "Increased photoreceptor sensitivity in light"],
            "correct": 0,
            "explanation": "Without active transport, ion gradients collapse and V_m drifts toward 0 mV.",
        },
        {
            "topic": "Nernst Equation",
            "question": "For an anion like Cl\u207b with higher internal than external concentration, E_Cl is:",
            "options": ["Negative (inside relative to outside)", "Positive always", "Zero regardless of concentrations", "Equal to E_Na"],
            "correct": 0,
            "explanation": "Negative charge and inward concentration gradient yield negative E_Cl.",
        },
        {
            "topic": "Passive Membrane Properties",
            "question": "In a passive cable, doubling both diameter and R_m per unit area leaves \u03bb:",
            "options": ["Unchanged if R_i scales inversely with diameter as in uniform geometry", "Doubled always", "Halved always", "Zero"],
            "correct": 0,
            "explanation": "For idealized geometry, R_i falls and R_m area changes can offset; classic result: \u03bb scales with \u221a(radius).",
        },
        {
            "topic": "Action Potentials",
            "question": "Persistent Na\u207a current (non-inactivating component) contributes to:",
            "options": ["Subthreshold resonance and repeated firing near threshold", "Exclusive repolarization after spikes", "Phototransduction in cones", "Cochlear electromotility"],
            "correct": 0,
            "explanation": "Subthreshold Na\u207a current can boost depolarization and support rhythmic firing.",
        },
        {
            "topic": "Action Potential Propagation",
            "question": "Ectopic spike initiation can occur at:",
            "options": ["Damaged axon segments with altered channel density", "Photoreceptor outer segments exclusively in dark", "The olfactory epithelium during odor binding", "CSF in ventricles without tissue"],
            "correct": 0,
            "explanation": "Abnormal channel redistribution after injury can create ectopic excitable zones.",
        },
        {
            "topic": "Electrical Signaling",
            "question": "If E_K is \u221290 mV and V_m is \u221260 mV, net K\u207a current through open K\u207a channels is:",
            "options": ["Outward (efflux)", "Inward (influx)", "Zero", "Determined only by the pump without channels"],
            "correct": 0,
            "explanation": "V_m above E_K drives K\u207a outward through open channels.",
        },
        {
            "topic": "Chemical Synapses",
            "question": "Retrograde messengers such as endocannabinoids act by:",
            "options": ["Traveling from postsynaptic to presynaptic terminals to reduce release", "Always anterograde from photoreceptors to bipolar cells only", "Diffusing only within the synaptic cleft without receptors", "Opening nicotinic pores at the neuromuscular junction"],
            "correct": 0,
            "explanation": "Endocannabinoids are synthesized postsynaptically and inhibit presynaptic release.",
        },
        {
            "topic": "Synaptic Transmission",
            "question": "Asynchronous release after a presynaptic spike suggests:",
            "options": ["Release from distant boutons with slower Ca\u207a clearance or lower sensitivity", "Exclusive quantal release at exactly 0 ms delay always", "Block of all voltage-gated Ca\u00b2\u207a channels", "Direct electrical coupling without vesicles"],
            "correct": 0,
            "explanation": "Heterogeneous release sites and Ca\u00b2\u207a dynamics spread release timing.",
        },
        {
            "topic": "Receptor Types",
            "question": "Inverse agonists of G-protein-coupled receptors:",
            "options": ["Stabilize inactive receptor conformations below basal activity", "Always open ionotropic pores directly", "Cleave SNARE proteins at presynaptic terminals", "Increase photopigment bleaching in rods"],
            "correct": 0,
            "explanation": "Inverse agonists reduce constitutive receptor activity by favoring inactive states.",
        },
        {
            "topic": "Synaptic Integration",
            "question": "Plateau potentials in dendrites can sustain firing when:",
            "options": ["Voltage-gated Ca\u00b2\u207a and Na\u207a channels produce regenerative depolarization locally", "Only passive decay occurs without channels", "All K\u207a channels are removed genetically", "Photoreceptors are hyperpolarized by light"],
            "correct": 0,
            "explanation": "Dendritic regenerative conductances can maintain elevated V_m and influence somatic output.",
        },
        {
            "topic": "Neural Circuits",
            "question": "Central pattern generators produce rhythmic motor output because:",
            "options": ["Recurrent excitatory and inhibitory connections form pacemaker-like loops", "Sensory input is required every cycle without exception", "Only gap junctions exist in the circuit", "Photoreceptor dark current drives limb movement"],
            "correct": 0,
            "explanation": "CPGs generate organized rhythms via interconnected interneuron circuits.",
        },
        {
            "topic": "Neuromodulation",
            "question": "Acetylcholine in cortex during arousal often:",
            "options": ["Reduces adaptation in pyramidal cells and enhances signal detection", "Closes all nicotinic receptors permanently", "Converts cochlear inner hair cells to photoreceptors", "Eliminates all IPSPs without receptors"],
            "correct": 0,
            "explanation": "Cholinergic modulation adjusts gain and intrinsic properties in cortical circuits.",
        },
        {
            "topic": "Visual System",
            "question": "Magnocellular pathway neurons preferentially respond to:",
            "options": ["High temporal frequency and motion", "Fine color borders requiring parvocellular input only", "Odorant identity in glomeruli", "Muscle spindle length without change"],
            "correct": 0,
            "explanation": "M pathway cells have transient responses suited for motion and low-contrast detection.",
        },
        {
            "topic": "Auditory System",
            "question": "The lateral superior olive uses interaural level differences primarily for:",
            "options": ["High-frequency localization via intensity cues", "Low-frequency phase locking without level", "Color processing in V1", "Olfactory discrimination in piriform cortex"],
            "correct": 0,
            "explanation": "LSO compares sound level at the two ears, effective at higher frequencies.",
        },
        {
            "topic": "Somatosensation",
            "question": "C fibers mediate:",
            "options": ["Slow, dull pain and warm/cold sensations", "Fine touch with Meissner corpuscles exclusively", "Photopic color vision", "High-frequency auditory pitch via phase locking"],
            "correct": 0,
            "explanation": "Unmyelinated C fibers convey slow pain and temperature.",
        },
        {
            "topic": "Olfaction",
            "question": "Enantiomers can smell different because:",
            "options": ["Receptor binding geometry differs despite identical chemical formula", "Mitral cells lack any inhibition", "OSNs do not express receptors", "Odorants bypass glomeruli entirely"],
            "correct": 0,
            "explanation": "Stereochemistry affects interaction with odorant receptor binding pockets.",
        },
        {
            "topic": "Neuroanatomy",
            "question": "The fornix connects:",
            "options": ["Hippocampus to mammillary bodies and related targets", "Cochlea to inferior colliculus directly without synapses", "Retina to olfactory bulb", "Muscle spindles to photoreceptors"],
            "correct": 0,
            "explanation": "Fornix fibers carry hippocampal output to diencephalic and septal regions.",
        },
        {
            "topic": "Motor Systems",
            "question": "Basal ganglia direct pathway activity tends to:",
            "options": ["Facilitate intended movements by disinhibiting thalamocortical activity", "Block all movement without exception", "Transduce sound in the cochlea", "Encode color opponency exclusively"],
            "correct": 0,
            "explanation": "Striatal direct pathway reduces basal ganglia output, releasing thalamic inhibition.",
        },
    ],
}


def js_escape(s: str) -> str:
    out = []
    for ch in s:
        o = ord(ch)
        if ch == "\\":
            out.append("\\\\")
        elif ch == '"':
            out.append('\\"')
        elif ch in "\n\r\t":
            out.append({"\\n": "\\n", "\\r": "\\r", "\\t": "\\t"}[ch])
        elif o < 32 or o > 126:
            out.append(f"\\u{o:04x}")
        else:
            out.append(ch)
    return "".join(out)


def format_question(q: dict, indent: str = "  ") -> str:
    lines = [
        f"{indent}{{",
        f'{indent}  topic: "{js_escape(q["topic"])}",',
        f'{indent}  question: "{js_escape(q["question"])}",',
        f"{indent}  options: [",
    ]
    for opt in q["options"]:
        lines.append(f'{indent}    "{js_escape(opt)}",')
    lines.extend(
        [
            f"{indent}  ],",
            f'{indent}  correct: {q["correct"]},',
            f'{indent}  explanation: "{js_escape(q["explanation"])}",',
            f"{indent}}}",
        ]
    )
    return "\n".join(lines)


def format_array(name: str, items: list) -> str:
    body = ",\n".join(format_question(q) for q in items)
    return f"const {name} = [\n{body}\n];"


def is_bad(q: dict) -> bool:
    s = json.dumps(q)
    return bool(
        re.search(
            r"integrative scenario|Correct choice applies|case \d+\)|\[Tier",
            s,
            re.I,
        )
    )


def main():
    with open(GOOD_PATH) as f:
        good = json.load(f)

    arrays = {
        "PART1_VARIANTS": good["PART1_VARIANTS"],
        "PART2_VARIANTS": good["PART2_VARIANTS"],
        "PART3_VARIANTS": good["PART3_VARIANTS"],
    }

    for tier in TARGETS:
        kept = good[tier]
        need = TARGETS[tier] - len(kept)
        extra = SUPPLEMENTAL[tier]
        if len(extra) != need:
            raise SystemExit(f"{tier}: need {need} supplemental, have {len(extra)}")
        arrays[tier] = kept + extra

    all_qs = []
    for name, arr in arrays.items():
        if len(arr) != (15 if name.startswith("PART") else TARGETS[name]):
            raise SystemExit(f"{name}: expected count mismatch, got {len(arr)}")
        for q in arr:
            if is_bad(q):
                raise SystemExit(f"Bad placeholder in {name}: {q['question'][:60]}")
            if len(q["options"]) != 4:
                raise SystemExit(f"Bad options count in {name}")
            if q["correct"] not in (0, 1, 2, 3):
                raise SystemExit(f"Bad correct index in {name}")
        all_qs.extend(q["question"] for q in arr)

    if len(all_qs) != len(set(all_qs)):
        seen = {}
        for q in all_qs:
            seen[q] = seen.get(q, 0) + 1
        dups = [q for q, n in seen.items() if n > 1]
        raise SystemExit(f"Duplicate questions ({len(dups)}): {dups[0][:80]}...")

    parts = ["// MCB80x question bank — HarvardX Fundamentals of Neuroscience\n"]
    order = [
        "PART1_VARIANTS",
        "PART2_VARIANTS",
        "PART3_VARIANTS",
        "NEW_TIER1",
        "NEW_TIER2",
        "NEW_TIER3",
        "NEW_TIER4",
    ]
    for name in order:
        parts.append(format_array(name, arrays[name]))
        parts.append("")

    OUT_PATH.write_text("\n".join(parts).rstrip() + "\n")
    print(f"Wrote {OUT_PATH}")
    for name in order:
        print(f"  {name}: {len(arrays[name])}")


if __name__ == "__main__":
    main()
