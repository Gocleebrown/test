// scripts/topic6.js

// Topic 6: Deformation of Solids
const additionalQuestionsTopic6 = [
  // 1) Hooke’s law: extension from force
  {
    topic: 6,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const kVal = (Math.random() * 200 + 100).toFixed(0);
      const F = (Math.random() * 50 + 20).toFixed(0);
      const extension = (F / kVal).toFixed(3);
      return {
        text: `A spring with constant ${kVal} N/m is pulled with a force of ${F} N. Calculate its extension.`,
        answer: extension + " m",
        modelAnswer: [
          `1) Identify: k = ${kVal} N/m, F = ${F} N.`,
          `2) Hooke’s law: F = k × x, so x = F ÷ k = ${F} ÷ ${kVal} = ${extension} m.`
        ]
      };
    }
  },

  // 2) Definition: SI units of strain
  {
    topic: 6,
    difficulty: "easy",
    type: "definition",
    question: "Use the definition of strain to determine its SI units.",
    modelAnswer: "Strain has no units (it is a ratio), so it is dimensionless.",
    keywords: [["dimensionless"]]
  },

  // 3) Elastic extension of a rod
  {
    topic: 6,
    difficulty: "hard",
    type: "equation",
    question: function() {
      const L = (Math.random() * 100 + 50).toFixed(0);      // cm
      const A = (Math.random() * 0.001 + 0.0005).toFixed(6); // m²
      const F = (Math.random() * 1000 + 500).toFixed(0);     // N
      const E = 200e9;                                       // Pa
      const strain = F / (E * A);
      const extension = ((L / 100) * strain).toFixed(6);
      return {
        text: `A rod ${L} cm long with cross‐section ${A} m² is pulled with ${F} N. If Young’s modulus E = 200 GPa, calculate its extension.`,
        answer: extension + " m",
        modelAnswer: [
          `1) Convert length to m: L = ${L} cm = ${ (L/100).toFixed(3) } m.`,
          `2) Strain = F ÷ (E×A) = ${F} ÷ (${E}×${A}) ≈ ${strain.toExponential(2)}.`,
          `3) Extension = strain × original length = ${strain.toExponential(2)} × ${(L/100).toFixed(3)} ≈ ${extension} m.`
        ]
      };
    }
  },

  // 4) Spring‐graph: find k and energy
  {
    topic: 6,
    difficulty: "hard",
    type: "numeric_multi",
    question: function() {
      const k_num = (Math.random() * 0.2 + 0.3).toFixed(3);   // N/cm
      const L0 = Math.random() * 5;                          // unused in chart
      const F_applied = Number((Math.random() * 10 + 10).toFixed(0));
      const k_SI = (k_num * 100).toFixed(2);                 // N/m
      const x_cm = (F_applied / k_num).toFixed(2);
      const x_m = (x_cm / 100).toFixed(4);
      const energy = (0.5 * k_SI * x_m * x_m).toFixed(2);
      const canvasId = `springChart_${Math.floor(Math.random()*100000)}`;
      // Draw chart shortly after insertion
      setTimeout(() => drawSpringChart(canvasId, parseFloat(k_num), L0), 500);
      return {
        text: `A force–extension graph for a spring is shown.  
(a) Find the spring constant k.  
(b) Find the elastic energy stored when a ${F_applied} N force is applied.`,
        image: `<canvas id="${canvasId}" width="600" height="400"></canvas>`,
        answer: [`${k_SI} N/m`, `${energy} J`],
        modelAnswer: [
          `1) From graph slope = rise/run = k (in N/m). Here k = ${k_SI} N/m.`,
          `2) Extension x = F ÷ k = ${F_applied} ÷ ${k_SI} ≈ ${x_m} m.  
   Energy = ½ k x² = 0.5×${k_SI}×(${x_m})² ≈ ${energy} J.`
        ]
      };
    }
  },

  // 5) Elastic energy from force & extension
  {
    topic: 6,
    difficulty: "hard",
    type: "equation",
    question: function() {
      const F = (Math.random() * 500 + 100).toFixed(0);
      const k_approx = (Math.random() * 100 + 200).toFixed(0);
      const x = (F / k_approx).toFixed(3);
      const energy = (0.5 * F * x).toFixed(2);
      return {
        text: `A material with stiffness ${k_approx} N/m is stretched by a force of ${F} N (extension ${x} m). Calculate the stored elastic energy.`,
        answer: energy + " J",
        modelAnswer: [
          `1) Extension x = F ÷ k = ${F} ÷ ${k_approx} = ${x} m.`,
          `2) Energy = ½ × F × x = 0.5×${F}×${x} ≈ ${energy} J.`
        ]
      };
    }
  },

  // 6) Young’s modulus definition
  {
    topic: 6,
    difficulty: "easy",
    type: "definition",
    question: "Define Young’s modulus and its significance.",
    modelAnswer: "Young’s modulus = stress ÷ strain in the elastic region; it shows how stiff a material is.",
    keywords: [["stress"], ["strain"]]
  },

  // 7) Strain calculation
  {
    topic: 6,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const deltaL = (Math.random() * 0.05 + 0.01).toFixed(3);
      const L0 = (Math.random() * 1 + 1).toFixed(2);
      const strain = (deltaL / L0).toFixed(3);
      return {
        text: `A rod of length ${L0} m is stretched by ${deltaL} m. Calculate its strain.`,
        answer: strain,
        modelAnswer: [
          `1) Strain = ΔL ÷ L₀ = ${deltaL} ÷ ${L0} ≈ ${strain}.`,
          `2) Strain has no units (ratio of lengths).`
        ]
      };
    }
  },

  // 8) Hooke’s law definition
  {
    topic: 6,
    difficulty: "easy",
    type: "definition",
    question: "State Hooke’s Law.",
    modelAnswer: "Within the elastic limit, extension is directly proportional to the applied force.",
    keywords: [["proportional"], ["force"], ["extension"]]
  },

  // 9) Stress definition
  {
    topic: 6,
    difficulty: "easy",
    type: "definition",
    question: "Define stress.",
    modelAnswer: "Stress = force applied ÷ cross-sectional area.",
    keywords: [["force"], ["area"]]
  },

  // 10) Strain definition
  {
    topic: 6,
    difficulty: "easy",
    type: "definition",
    question: "Define strain.",
    modelAnswer: "Strain = change in length ÷ original length.",
    keywords: [["ratio"], ["length"]]
  },

  // 11) Stress & strain & elongation numeric multi
  {
    topic: 6,
    difficulty: "hard",
    type: "numeric_multi",
    question: function() {
      const length = 2;            // m
      const area = 1e-4;           // m²
      const force = 10000;         // N
      const E = 200e9;             // Pa
      const stress = force / area;
      const strain = stress / E;
      const elongation = (length * strain).toExponential(2);
      return {
        text: `A rod ${length} m long, area ${area} m², is loaded with ${force} N. E = 200 GPa. Calculate:  
(a) stress, (b) strain, (c) elongation.`,
        answer: [
          stress.toExponential(2) + " Pa",
          strain.toExponential(2),
          elongation + " m"
        ],
        modelAnswer: [
          `1) Stress = F ÷ A = ${force} ÷ ${area} ≈ ${stress.toExponential(2)} Pa.`,
          `2) Strain = stress ÷ E = ${stress.toExponential(2)} ÷ ${E} ≈ ${strain.toExponential(2)}.`,
          `3) Elongation = strain × original length = ${strain.toExponential(2)} × ${length} ≈ ${elongation} m.`
        ]
      };
    }
  }
];
