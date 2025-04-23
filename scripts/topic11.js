// scripts/topic11.js

const additionalQuestionsTopic11 = [
  {
    topic: 11,
    difficulty: "easy",
    type: "equation",
    question: function () {
      const A = Math.floor(Math.random() * 50 + 200);
      const finalA = A - 4;
      return {
        text: `A nucleus with mass number ${A} undergoes alpha decay. What is its final mass number?`,
        answer: finalA.toString(),
        modelAnswer: `In alpha decay, 2 protons and 2 neutrons are lost, so mass number decreases by 4: ${A} → ${finalA}.`
      };
    }
  },

  {
    topic: 11,
    difficulty: "easy",
    type: "equation",
    question: function () {
      const Z = Math.floor(Math.random() * 20 + 10);
      const A = Math.floor(Math.random() * 30 + Z + 10);
      const finalZ = Z + 1;
      return {
        text: `A nucleus with proton number ${Z} and mass number ${A} undergoes beta-minus decay. What is its new proton number?`,
        answer: finalZ.toString(),
        modelAnswer: `In β⁻ decay, a neutron becomes a proton, increasing the proton number by 1: ${Z} → ${finalZ}.`
      };
    }
  },

  {
    topic: 11,
    difficulty: "easy",
    type: "equation",
    question: function () {
      const initialN = Math.floor(Math.random() * 50 + 50);
      return {
        text: `In β– decay, if a nucleus has nucleon number ${initialN}, what remains?`,
        answer: initialN.toString(),
        modelAnswer: `Nucleon number (protons + neutrons) stays the same in beta decay: still ${initialN}.`
      };
    }
  },

  {
    topic: 11,
    difficulty: "easy",
    type: "equation",
    question: function () {
      const initialZ = Math.floor(Math.random() * 20 + 10);
      const finalZ = initialZ - 1;
      return {
        text: `A nucleus with proton number ${initialZ} undergoes β+ decay. What is its new proton number?`,
        answer: finalZ.toString(),
        modelAnswer: `In β⁺ decay, a proton turns into a neutron, so the proton number decreases: ${initialZ} → ${finalZ}.`
      };
    }
  },

  {
    topic: 11,
    difficulty: "easy",
    type: "equation",
    question: function () {
      const initialMass = Math.floor(Math.random() * 200 + 100);
      const finalMass = initialMass - 4;
      return {
        text: `A nucleus with mass number ${initialMass} undergoes alpha decay. What is its new mass number?`,
        answer: finalMass.toString(),
        modelAnswer: `Mass number drops by 4 in alpha decay: ${initialMass} → ${finalMass}.`
      };
    }
  },

  {
    topic: 11,
    difficulty: "easy",
    type: "equation",
    question: function () {
      const initialMass = Math.floor(Math.random() * 200 + 100);
      return {
        text: `A nucleus with mass number ${initialMass} undergoes alpha decay. By how much does its mass number change?`,
        answer: "4",
        modelAnswer: `The change is always 4 in alpha decay, because 2 protons and 2 neutrons are lost.`
      };
    }
  },

  // --- Definitions ---

  { topic: 11, difficulty: "easy", type: "definition", question: "Define nucleon number.", modelAnswer: "It is the total number of protons and neutrons in a nucleus.", keywords: [["protons"], ["neutrons"], ["total"]] },

  { topic: 11, difficulty: "easy", type: "definition", question: "Define proton number.", modelAnswer: "The number of protons in the nucleus of an atom.", keywords: [["proton"], ["number"]] },

  { topic: 11, difficulty: "easy", type: "definition", question: "Define isotope.", modelAnswer: "Atoms with the same number of protons but different numbers of neutrons.", keywords: [["same protons"], ["different neutrons"]] },

  { topic: 11, difficulty: "easy", type: "definition", question: "Define a hadron.", modelAnswer: "A particle made of quarks that is affected by the strong force.", keywords: [["quarks"], ["strong force"]] },

  { topic: 11, difficulty: "easy", type: "definition", question: "Define a baryon.", modelAnswer: "A baryon is a hadron made of three quarks.", keywords: [["three quarks"]] },

  { topic: 11, difficulty: "easy", type: "definition", question: "Define a meson.", modelAnswer: "A meson is made of one quark and one antiquark.", keywords: [["quark"], ["antiquark"]] },

  { topic: 11, difficulty: "easy", type: "definition", question: "Define a lepton.", modelAnswer: "A lepton is a fundamental particle that does not feel the strong nuclear force.", keywords: [["fundamental"], ["lepton"]] },

  { topic: 11, difficulty: "easy", type: "definition", question: "Define a quark.", modelAnswer: "A quark is a tiny particle that makes up protons and neutrons. There are 6 types: up, down, charm, strange, top, bottom.", keywords: [["up"], ["down"], ["charm"], ["strange"], ["top"], ["bottom"]] },

  { topic: 11, difficulty: "easy", type: "definition", question: "State the charges of up and down quarks.", modelAnswer: "Up quark has charge +2/3 e; Down quark has charge −1/3 e.", keywords: [["+2/3"], ["-1/3"]] },

  { topic: 11, difficulty: "easy", type: "definition", question: "State the quark composition of a proton.", modelAnswer: "A proton is made of two up quarks and one down quark (uud).", keywords: [["uud"]] },

  { topic: 11, difficulty: "easy", type: "definition", question: "State the quark composition of a neutron.", modelAnswer: "A neutron is made of one up quark and two down quarks (udd).", keywords: [["udd"]] },

  { topic: 11, difficulty: "easy", type: "definition", question: "Define an antiparticle.", modelAnswer: "An antiparticle is like a normal particle but has the opposite charge.", keywords: [["opposite charge"]] },

  { topic: 11, difficulty: "easy", type: "definition", question: "What is emitted during β– decay?", modelAnswer: "An electron and an electron antineutrino.", keywords: [["electron"], ["antineutrino"]] },

  { topic: 11, difficulty: "easy", type: "definition", question: "What is emitted during β+ decay?", modelAnswer: "A positron and an electron neutrino.", keywords: [["positron"], ["neutrino"]] },

  { topic: 11, difficulty: "easy", type: "definition", question: "Define the unified atomic mass unit (u).", modelAnswer: "1 u is one twelfth the mass of a carbon-12 atom.", keywords: [["1/12"], ["carbon-12"]] },

  // --- Multi-step decay chain ---
  {
    topic: 11,
    difficulty: "hard",
    type: "numeric_multi",
    question: function () {
      return {
        text: "A nucleus with mass number 210 and atomic number 84 undergoes β– decay followed by alpha decay. Calculate the final mass number and atomic number.",
        answer: ["206", "83"],
        modelAnswer: [
          `1) β⁻ decay increases atomic number by 1: 84 → 85.`,
          `2) Alpha decay reduces mass by 4 and atomic number by 2:  
Mass: 210 → 206  
Atomic: 85 → 83.`,
          `Final mass number = 206, atomic number = 83.`
        ]
      };
    }
  }
];
