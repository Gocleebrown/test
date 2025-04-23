// scripts/topic8.js

const additionalQuestionsTopic8 = [
  // 1) Principle of superposition
  {
    topic: 8,
    difficulty: "easy",
    type: "definition",
    question: "State the principle of superposition.",
    modelAnswer: "When waves meet, their displacements add up to give the total displacement.",
    keywords: [["sum", "add"], ["displacement"]]
  },

  // 2) Constructive interference
  {
    topic: 8,
    difficulty: "easy",
    type: "definition",
    question: "Define constructive interference.",
    modelAnswer: "This happens when waves meet in step and their displacements add to make a bigger wave.",
    keywords: [["in phase"], ["add", "increase"], ["displacement", "amplitude"]]
  },

  // 3) Destructive interference
  {
    topic: 8,
    difficulty: "easy",
    type: "definition",
    question: "Define destructive interference.",
    modelAnswer: "This happens when waves meet out of step and partly or fully cancel each other out.",
    keywords: [["out of phase"], ["cancel", "reduce", "lower"]]
  },

  // 4) Harmonic in a closed pipe
  {
    topic: 8,
    difficulty: "hard",
    type: "numeric_multi",
    question: function () {
      const n = Math.floor(Math.random() * 3 + 1); // 1 to 3
      const L = Math.floor(Math.random() * 3 + 1); // 1 to 3 m
      const v = Math.floor(Math.random() * 200 + 100);
      const f = (n * v) / (2 * L);
      return {
        text: `A pipe closed at both ends is ${L} m long and vibrates in its ${ordinalSuffix(n)} harmonic. Find the frequency.`,
        answer: f.toFixed(1),
        modelAnswer: `1) Use f = n·v / (2·L) = ${n}·${v} / (2·${L}) ≈ ${f.toFixed(1)} Hz.`
      };
    }
  },

  // 5) Open pipe: wavelength and frequency
  {
    topic: 8,
    difficulty: "hard",
    type: "numeric_multi",
    question: function () {
      const L = Math.floor(Math.random() * 3 + 1); // 1–3 m
      const n = Math.floor(Math.random() * 3 + 1); // 1–3
      const v = Math.floor(Math.random() * 50 + 330); // sound speed
      const lambda = (2 * L) / n;
      const f = v / lambda;
      return {
        text: `An open pipe of length ${L} m vibrates in its ${ordinalSuffix(n)} harmonic. Calculate:  
(a) wavelength  
(b) frequency`,
        answer: [lambda.toFixed(2) + " m", f.toFixed(2) + " Hz"],
        modelAnswer: [
          `λ = 2L / n = 2·${L} / ${n} ≈ ${lambda.toFixed(2)} m,`,
          `f = v / λ = ${v} / ${lambda.toFixed(2)} ≈ ${f.toFixed(2)} Hz.`
        ]
      };
    }
  },

  // 6) Formation of standing wave on a string
  {
    topic: 8,
    difficulty: "easy",
    type: "definition",
    question: "A string 8 cm long is fixed at both ends. A point on the string is moved down and released. Explain how a standing wave is formed.",
    modelAnswer: "Waves reflect off the fixed ends and meet the incoming waves. If they match in frequency, they interfere and form a standing wave.",
    keywords: [["reflect"], ["fixed ends"], ["interfere"], ["standing wave"]]
  },

  // 7) Interference from speaker and wall
  {
    topic: 8,
    difficulty: "hard",
    type: "equation",
    question: function () {
      const d = (Math.random() * 0.5 + 0.2).toFixed(2);
      const v = Math.floor(Math.random() * 50 + 330);
      const lambda = (2 * d).toFixed(2);
      const f = (v / (2 * d)).toFixed(2);
      return {
        text: `Loud points appear ${d} m apart between a speaker and a wall. If sound travels at ${v} m/s, calculate the frequency.`,
        answer: f + " Hz",
        modelAnswer: [
          `1) Loud point spacing = ½λ → λ = 2 × ${d} = ${lambda} m.`,
          `2) f = v / λ = ${v} / ${lambda} ≈ ${f} Hz.`
        ]
      };
    }
  },

  // 8) Define standing wave
  {
    topic: 8,
    difficulty: "easy",
    type: "definition",
    question: "Define a standing wave.",
    modelAnswer: "A standing wave is made when two waves move in opposite directions with the same frequency and size, causing points to stay still.",
    keywords: [["opposite"], ["frequency"], ["amplitude"]]
  }
];
