// scripts/topic9.js

const additionalQuestionsTopic9 = [
  // 1) V = IR
  {
    topic: 9,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const I = Math.floor(Math.random() * 5 + 1);
      const R = Math.floor(Math.random() * 20 + 10);
      const V = I * R;
      return {
        text: `A current of ${I} A flows through a ${R} Ω resistor. Calculate the voltage.`,
        answer: V.toFixed(1),
        modelAnswer: [
          `1) Use Ohm's law: V = I × R.`,
          `2) V = ${I} × ${R} = ${V.toFixed(1)} V.`
        ]
      };
    }
  },

  // 2) Power = VI
  {
    topic: 9,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const V = Math.floor(Math.random() * 20 + 10);
      const I = Math.floor(Math.random() * 5 + 1);
      const P = V * I;
      return {
        text: `With a voltage of ${V} V and current of ${I} A, calculate power.`,
        answer: P.toFixed(1),
        modelAnswer: [
          `1) Power = Voltage × Current.`,
          `2) P = ${V} × ${I} = ${P.toFixed(1)} W.`
        ]
      };
    }
  },

  // 3) Series and parallel resistance
  {
    topic: 9,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const R1 = Math.floor(Math.random() * 20 + 10);
      const R2 = Math.floor(Math.random() * 20 + 10);
      const R3 = Math.floor(Math.random() * 20 + 10);
      const Rp = 1 / (1 / R1 + 1 / R2);
      const R_total = Rp + R3;
      return {
        text: `Calculate the total resistance when ${R1} Ω and ${R2} Ω resistors are in parallel and in series with a ${R3} Ω resistor.`,
        answer: R_total.toFixed(1),
        modelAnswer: [
          `1) Parallel: 1/Rp = 1/${R1} + 1/${R2} → Rp ≈ ${Rp.toFixed(1)} Ω.`,
          `2) Total = Rp + ${R3} = ${Rp.toFixed(1)} + ${R3} ≈ ${R_total.toFixed(1)} Ω.`
        ]
      };
    }
  },

  // 4) Kirchhoff’s first law
  {
    topic: 9,
    difficulty: "easy",
    type: "definition",
    question: "State Kirchhoff’s first law.",
    modelAnswer: "At any junction, the total current going in equals the total current coming out.",
    keywords: [["current"], ["in", "out"], ["junction"]]
  },

  // 5) Electric current
  {
    topic: 9,
    difficulty: "easy",
    type: "definition",
    question: "Define electric current.",
    modelAnswer: "Current is the rate at which electric charge flows past a point.",
    keywords: [["rate"], ["charge"], ["flows"]]
  },

  // 6) EMF definition
  {
    topic: 9,
    difficulty: "easy",
    type: "definition",
    question: "Define electromotive force (e.m.f.).",
    modelAnswer: "E.m.f. is the energy supplied per unit charge by a power source.",
    keywords: [["energy"], ["charge"]]
  },

  // 7) Potential difference
  {
    topic: 9,
    difficulty: "easy",
    type: "definition",
    question: "Define electric potential difference.",
    modelAnswer: "It’s the energy used per unit charge to move it between two points.",
    keywords: [["work", "energy"], ["charge"], ["points"]]
  },

  // 8) Multi-part: Current, Power, New current
  {
    topic: 9,
    difficulty: "hard",
    type: "numeric_multi",
    question: function() {
      const R = 10, Vin = 12;
      const I1 = Vin / R;
      const P1 = I1 * I1 * R;
      const R_series = 10;
      const newTotal = R + R_series;
      const I2 = Vin / newTotal;
      return {
        text: `A ${R} Ω resistor is connected to a ${Vin} V battery.  
(a) Calculate the current.  
(b) Calculate the power used.  
(c) Find the new current if a ${R_series} Ω resistor is added in series.`,
        answer: [
          I1.toFixed(2) + " A",
          P1.toFixed(1) + " W",
          I2.toFixed(2) + " A"
        ],
        modelAnswer: [
          `1) I = V ÷ R = ${Vin} ÷ ${R} = ${I1.toFixed(2)} A.`,
          `2) Power = I² × R = (${I1.toFixed(2)})² × ${R} ≈ ${P1.toFixed(1)} W.`,
          `3) New R = ${R} + ${R_series} = ${newTotal} Ω.  
   New current = V ÷ R = ${Vin} ÷ ${newTotal} ≈ ${I2.toFixed(2)} A.`
        ]
      };
    }
  }
];
