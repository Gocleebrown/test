// scripts/topic5.js

// Topic 5: Work, Energy and Power
const additionalQuestionsTopic5 = [
  // Winch pulling on a slope (power & tension)
  {
    topic: 5,
    difficulty: "hard",
    type: "numeric_multi",
    question: function() {
      const angle  = Math.floor(Math.random() * (80 - 25 + 1)) + 25;
      const weight = Math.floor(Math.random() * (800 - 300 + 1)) + 300;
      const power  = Math.floor(Math.random() * (500 - 80 + 1)) + 80;

      // tension from component of weight down slope
      const tension = (weight * Math.sin(angle * Math.PI/180)).toFixed(1);
      // speed from power = force × speed
      const speed   = (power / tension).toFixed(2);
      const canvasId = `winch_${angle}_${weight}_${power}`;

      return {
        text: `A car is pulled up a slope by a winch (no friction).  
– Winch power: ${power} W  
– Car weight: ${weight} N  
– Slope angle: ${angle}°  

(i) Calculate the tension in the cable.  
(ii) Calculate the speed of the car up the slope.`,
        image: `<canvas id="${canvasId}" width="500" height="400"></canvas>`,
        setup: () => setTimeout(() => drawWinchDiagram(canvasId, angle), 50),
        answer: [`${tension} N`, `${speed} m/s`],
        modelAnswer: [
          // Part (i)
          `1) Weight acts straight down: W = ${weight} N.  
2) Component along slope = W × sin(θ) = ${weight} × sin(${angle}°) ≈ ${tension} N.  
3) Tension must equal that to move at constant speed.`,

          // Part (ii)
          `1) Power P = force × speed (P = F×v).  
2) Rearrange: v = P ÷ F = ${power} ÷ ${tension} ≈ ${speed} m/s.  
3) So the car moves at about ${speed} m/s up the slope.`
        ]
      };
    }
  },

  // Gravitational potential energy
  {
    topic: 5,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const m = (Math.random() * 10 + 5).toFixed(1);
      const h = (Math.random() * 10 + 5).toFixed(1);
      const g = 9.81;
      const GPE = (m * g * h).toFixed(1);
      return {
        text: `Calculate the gravitational potential energy of a ${m} kg object raised to ${h} m.`,
        answer: `${GPE} J`,
        modelAnswer: [
          `1) Identify values: mass m = ${m} kg, height h = ${h} m, g = ${g} m/s².  
2) Use GPE = m × g × h.  
3) Compute: ${m} × ${g} × ${h} ≈ ${GPE} J.`
        ]
      };
    }
  },

  // Power from work done over time
  {
    topic: 5,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const W = (Math.random() * 500 + 200).toFixed(0);
      const t = (Math.random() * 10 + 5).toFixed(1);
      const P = (W / t).toFixed(1);
      return {
        text: `If ${W} J of work is done in ${t} s, calculate the power output.`,
        answer: `${P} W`,
        modelAnswer: [
          `1) Identify: work W = ${W} J, time t = ${t} s.  
2) Power = W ÷ t = ${W} ÷ ${t} ≈ ${P} W.`
        ]
      };
    }
  },

  // Spring energy
  {
    topic: 5,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const k = (Math.random() * 200 + 100).toFixed(0);
      const x = (Math.random() * 0.1 + 0.05).toFixed(3);
      const energy = (0.5 * k * x * x).toFixed(3);
      return {
        text: `A spring with constant ${k} N/m is compressed by ${x} m. Calculate the stored energy.`,
        answer: `${energy} J`,
        modelAnswer: [
          `1) Identify: k = ${k} N/m, compression x = ${x} m.  
2) Elastic energy = ½ × k × x².  
3) Compute: 0.5 × ${k} × (${x})² ≈ ${energy} J.`
        ]
      };
    }
  },

  // Net work with friction
  {
    topic: 5,
    difficulty: "hard",
    type: "equation",
    question: function() {
      const F = (Math.random() * 50 + 50).toFixed(0);
      const d = (Math.random() * 10 + 5).toFixed(1);
      const reduction = (Math.random() * 0.3 + 0.2).toFixed(2);
      const effectiveF = (F * (1 - reduction)).toFixed(1);
      const work = (effectiveF * d).toFixed(1);
      return {
        text: `A force of ${F} N acts over ${d} m, but friction reduces the force by ${(reduction * 100).toFixed(0)}%. Calculate the net work done.`,
        answer: `${work} J`,
        modelAnswer: [
          `1) Effective force = F × (1 − reduction) = ${F} × (1 − ${reduction}) = ${effectiveF} N.  
2) Work = force × distance = ${effectiveF} × ${d} ≈ ${work} J.`
        ]
      };
    }
  },

  // Energy conservation → impact speed
  {
    topic: 5,
    difficulty: "hard",
    type: "equation",
    question: function() {
      const m = (Math.random() * 5 + 1).toFixed(1);
      const h = (Math.random() * 10 + 5).toFixed(1);
      const g = 9.81;
      const v = (Math.sqrt(2 * g * h)).toFixed(2);
      return {
        text: `An object of ${m} kg is dropped from ${h} m. Calculate its impact speed using energy conservation.`,
        answer: `${v} m/s`,
        modelAnswer: [
          `1) Potential energy at top = mgh.  
2) Converts to kinetic energy: ½mv².  
3) So v = √(2gh) = √(2 × ${g} × ${h}) ≈ ${v} m/s.`
        ]
      };
    }
  },

  // Kinetic energy
  {
    topic: 5,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const m = Math.floor(Math.random() * 10 + 1);
      const v = Math.floor(Math.random() * 10 + 1);
      const KE = (0.5 * m * v * v).toFixed(1);
      return {
        text: `Calculate the kinetic energy of a ${m} kg object moving at ${v} m/s.`,
        answer: `${KE} J`,
        modelAnswer: [
          `1) Identify: mass m = ${m} kg, speed v = ${v} m/s.  
2) KE = ½ m v² = 0.5 × ${m} × (${v})² ≈ ${KE} J.`
        ]
      };
    }
  },

  // Definitions
  {
    topic: 5,
    difficulty: "easy",
    type: "definition",
    question: "State what is meant by the work done by a force.",
    modelAnswer: "Work is when a force makes something move in the direction of the force.",
    keywords: [["force"], ["move"]]
  },
  {
    topic: 5,
    difficulty: "easy",
    type: "definition",
    question: "Define power.",
    modelAnswer: "Power tells you how fast work is done: work done ÷ time taken.",
    keywords: [["work"], ["time"]]
  },
  {
    topic: 5,
    difficulty: "easy",
    type: "definition",
    question: "Use the definition of power to determine its SI units.",
    modelAnswer: [
      "1) Power = work ÷ time, units = J ÷ s.",
      "2) 1 J = kg·m²/s², so power = kg·m²/s² ÷ s = kg·m²/s³."
    ],
    keywords: [["kg"], ["m²"], ["s³"]]
  },
  {
    topic: 5,
    difficulty: "easy",
    type: "definition",
    question: "Use the definition of work to determine its SI units.",
    modelAnswer: [
      "1) Work = force × distance, units = N × m.",
      "2) 1 N = kg·m/s², so work = (kg·m/s²) × m = kg·m²/s²."
    ],
    keywords: [["kg"], ["m²"], ["s²"]]
  },
  {
    topic: 5,
    difficulty: "easy",
    type: "definition",
    question: "Use the definition of force (F = m·a) to determine its SI units.",
    modelAnswer: [
      "1) Force = mass × acceleration, units = kg × m/s².",
      "2) So 1 N = kg·m/s²."
    ],
    keywords: [["kg"], ["m/s²"]]
  },
  {
    topic: 5,
    difficulty: "easy",
    type: "definition",
    question: "Use the definition of pressure (P = F/A) to determine its SI units.",
    modelAnswer: [
      "1) Pressure = force ÷ area, units = N/m².",
      "2) 1 N = kg·m/s², so pressure = kg·m/s² ÷ m² = kg/(m·s²)."
    ],
    keywords: [["kg"], ["m"], ["s²"]]
  },
  {
    topic: 5,
    difficulty: "easy",
    type: "definition",
    question: "Use the definition of momentum (p = m·v) to determine its SI units.",
    modelAnswer: [
      "1) Momentum = mass × velocity, units = kg × m/s.",
      "2) So momentum unit = kg·m/s."
    ],
    keywords: [["kg"], ["m/s"]]
  }
];
