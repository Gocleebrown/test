// scripts/topic10.js

const additionalQuestionsTopic10 = [
  // 1) Voltage divider
  {
    topic: 10,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const R1 = Math.floor(Math.random() * 50 + 50);
      const R2 = Math.floor(Math.random() * 50 + 50);
      const Vin = Math.floor(Math.random() * 20 + 10);
      const Vout = (Vin * (R2 / (R1 + R2))).toFixed(1);
      return {
        text: `In a voltage divider with ${R1} Ω and ${R2} Ω resistors and Vin = ${Vin} V, find the voltage across the ${R2} Ω resistor.`,
        answer: Vout,
        modelAnswer: [
          `1) Total resistance = ${R1} + ${R2} = ${R1 + R2} Ω.`,
          `2) Voltage divider rule: V_out = Vin × (R2 / (R1 + R2)).`,
          `3) So V_out = ${Vin} × (${R2} / ${R1 + R2}) = ${Vout} V.`
        ]
      };
    }
  },

  // 2) LDR circuit analysis (corrected to topic 10)
  {
    topic: 10,
    difficulty: "hard",
    type: "numeric_multi",
    question: function() {
      const Vin = 9.0, R_fixed = 1800, V_fixed = 5.4;
      const I = V_fixed / R_fixed;
      const V_LDR = Vin - V_fixed;
      const R_LDR = V_LDR / I;
      return {
        text: `A ${Vin} V battery is connected in series with an LDR and a ${R_fixed} Ω resistor. The voltmeter reads ${V_fixed} V. Calculate:  
(a) the current in the circuit  
(b) the resistance of the LDR.`,
        answer: [I.toFixed(3) + " A", R_LDR.toFixed(0) + " Ω"],
        modelAnswer: [
          `1) Use V = IR: I = V_fixed ÷ R = ${V_fixed} ÷ ${R_fixed} ≈ ${I.toFixed(3)} A.`,
          `2) V across LDR = Vin - V_fixed = ${Vin} - ${V_fixed} = ${V_LDR.toFixed(2)} V.`,
          `3) R_LDR = V ÷ I = ${V_LDR.toFixed(2)} ÷ ${I.toFixed(3)} ≈ ${R_LDR.toFixed(0)} Ω.`
        ]
      };
    }
  },

  // 3) Series circuit I = V / R
  {
    topic: 10,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const Vin = Math.floor(Math.random() * 20 + 10);
      const R_total = Math.floor(Math.random() * 100 + 100);
      const I = (Vin / R_total).toFixed(2);
      return {
        text: `Find the current in a series circuit with R_total = ${R_total} Ω and Vin = ${Vin} V.`,
        answer: I,
        modelAnswer: [
          `1) I = Vin ÷ R_total = ${Vin} ÷ ${R_total} = ${I} A.`
        ]
      };
    }
  },

  // 4) Power = I²R
  {
    topic: 10,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const I = Math.floor(Math.random() * 5 + 1);
      const R = Math.floor(Math.random() * 100 + 50);
      const P = (I * I * R).toFixed(1);
      return {
        text: `Calculate the power in a ${R} Ω resistor with current ${I} A.`,
        answer: P,
        modelAnswer: [
          `1) P = I² × R = (${I})² × ${R} = ${P} W.`
        ]
      };
    }
  },

  // 5) Series resistance total
  {
    topic: 10,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const R1 = Math.floor(Math.random() * 50 + 50);
      const R2 = Math.floor(Math.random() * 50 + 50);
      const R3 = Math.floor(Math.random() * 50 + 50);
      const R_total = R1 + R2 + R3;
      return {
        text: `Three resistors of ${R1} Ω, ${R2} Ω, and ${R3} Ω are in series. Find the total resistance.`,
        answer: R_total.toFixed(1),
        modelAnswer: [
          `1) Total resistance = ${R1} + ${R2} + ${R3} = ${R_total} Ω.`
        ]
      };
    }
  },

  // 6) Power and voltage in R2 of a series circuit
  {
    topic: 10,
    difficulty: "hard",
    type: "numeric_multi",
    question: function() {
      const R1 = 100, R2 = 200, R3 = 300, Vin = 12;
      const R_total = R1 + R2 + R3;
      const I = Vin / R_total;
      const V_R2 = I * R2;
      const power_R2 = (V_R2 * V_R2) / R2;
      return {
        text: `In a series circuit with resistors ${R1} Ω, ${R2} Ω, and ${R3} Ω and Vin = ${Vin} V, calculate:  
(a) voltage across the ${R2} Ω resistor  
(b) power dissipated in the ${R2} Ω resistor.`,
        answer: [V_R2.toFixed(2) + " V", power_R2.toFixed(2) + " W"],
        modelAnswer: [
          `1) Total resistance = ${R1 + R2 + R3} Ω → Current I = ${Vin} ÷ ${R_total} ≈ ${I.toFixed(3)} A.`,
          `2) V across R2 = I × R2 = ${I.toFixed(3)} × ${R2} ≈ ${V_R2.toFixed(2)} V.`,
          `3) Power in R2 = V² ÷ R = (${V_R2.toFixed(2)})² ÷ ${R2} ≈ ${power_R2.toFixed(2)} W.`
        ]
      };
    }
  },

  // 7) Define resistance
  {
    topic: 10,
    difficulty: "easy",
    type: "definition",
    question: "Define resistance.",
    modelAnswer: "Resistance is how much a material opposes the flow of current. It equals voltage divided by current.",
    keywords: [["voltage"], ["current"], ["oppose", "ratio"]]
  },

  // 8) Define internal resistance
  {
    topic: 10,
    difficulty: "easy",
    type: "definition",
    question: "Define internal resistance.",
    modelAnswer: "Internal resistance is the resistance inside a battery or power source that reduces the voltage available to the circuit.",
    keywords: [["internal"], ["resistance"], ["battery", "source"]]
  }
];
