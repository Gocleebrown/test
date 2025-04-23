// scripts/topic7.js

// Topic 7: Waves
const additionalQuestionsTopic7 = [
  // 1) Wave speed on a string
  {
    topic: 7,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const T = (Math.random() * 20 + 50).toFixed(1);       // tension in N
      const mu = (Math.random() * 0.005 + 0.005).toFixed(4); // linear density in kg/m
      const v = Math.sqrt(T / mu).toFixed(2);
      return {
        text: `A wave travels along a string under ${T} N tension with linear density ${mu} kg/m. Find its speed.`,
        answer: v + " m/s",
        modelAnswer: [
          `1) Identify: tension T = ${T} N, linear density μ = ${mu} kg/m.`,
          `2) Formula: v = √(T ÷ μ).`,
          `3) Compute: √(${T} ÷ ${mu}) ≈ ${v} m/s.`
        ]
      };
    }
  },

  // 2) Wavelength from speed and frequency
  {
    topic: 7,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const v = (Math.random() * 50 + 300).toFixed(1); // speed in m/s
      const f = (Math.random() * 10 + 50).toFixed(1);  // frequency in Hz
      const lambda = (v / f).toFixed(2);
      return {
        text: `A sound wave has speed ${v} m/s and frequency ${f} Hz. Calculate its wavelength.`,
        answer: lambda + " m",
        modelAnswer: [
          `1) Identify: speed v = ${v} m/s, frequency f = ${f} Hz.`,
          `2) Formula: λ = v ÷ f.`,
          `3) Compute: ${v} ÷ ${f} ≈ ${lambda} m.`
        ]
      };
    }
  },

  // 3) Doppler effect
  {
    topic: 7,
    difficulty: "hard",
    type: "equation",
    question: function() {
      const f0 = (Math.random() * 10 + 400).toFixed(1); // source freq
      const v = 340;                                    // sound speed
      const vs = (Math.random() * 10 + 10).toFixed(1);  // source speed
      const f_obs = (f0 * (v / (v - vs))).toFixed(1);
      return {
        text: `A source emitting ${f0} Hz moves towards an observer at ${vs} m/s. Calculate the observed frequency.`,
        answer: f_obs + " Hz",
        modelAnswer: [
          `1) Identify: original frequency f₀ = ${f0} Hz, speed of sound v = ${v} m/s, source speed vₛ = ${vs} m/s.`,
          `2) Doppler formula: f' = f₀ × (v ÷ (v − vₛ)).`,
          `3) Compute: ${f0} × (${v} ÷ (${v} − ${vs})) ≈ ${f_obs} Hz.`
        ]
      };
    }
  },

  // 4) Definition of wavelength
  {
    topic: 7,
    difficulty: "easy",
    type: "definition",
    question: "Define wavelength.",
    modelAnswer: "Wavelength is the distance between two neighbouring crests (or troughs) of a wave.",
    keywords: [["distance"], ["crests", "troughs"]]
  },

  // 5) Definition of frequency
  {
    topic: 7,
    difficulty: "easy",
    type: "definition",
    question: "Define frequency.",
    modelAnswer: "Frequency is how many complete waves pass a fixed point each second.",
    keywords: [["waves"], ["per second", "Hz"]]
  },

  // 6) Definition of wavefront
  {
    topic: 7,
    difficulty: "easy",
    type: "definition",
    question: "Define wavefront.",
    modelAnswer: "A wavefront is a line joining points on a wave that are oscillating in step together.",
    keywords: [["line"], ["oscillating in step"]]
  },

  // 7) Period from an oscilloscope screen
  {
    topic: 7,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const timeBase = [1, 2, 5][Math.floor(Math.random() * 3)]; // ms per division
      const cycles   = Math.floor(Math.random() * 2) + 3;        // number of waves
      const totalDivisions = 10;
      const totalTime = timeBase * totalDivisions;              // in ms
      const period = (totalTime / cycles).toFixed(1);
      const canvasId = "oscChart_" + Math.floor(Math.random() * 1e5);
      // draw after insertion
      setTimeout(() => drawOscilloscopeChart(canvasId, cycles, timeBase), 100);
      return {
        text: `The oscilloscope below is set to ${timeBase} ms/division. Determine the wave’s period in ms.`,
        image: `<canvas id="${canvasId}" width="600" height="300"></canvas>`,
        answer: period + " ms",
        modelAnswer: [
          `1) Each division is ${timeBase} ms and there are ${totalDivisions} divisions, so total time = ${timeBase}×${totalDivisions} = ${totalTime} ms.`,
          `2) ${cycles} complete waves fit in that total time.`,
          `3) Period = total time ÷ number of waves = ${totalTime} ÷ ${cycles} ≈ ${period} ms.`
        ]
      };
    }
  }
];
