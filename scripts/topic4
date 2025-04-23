// scripts/topic4.js

// Topic 4: Forces, Density and Pressure
const additionalQuestionsTopic4 = [
  {
    topic: 4,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const h = (Math.random() * 10 + 5).toFixed(1);
      const rho = 1000, g = 9.81;
      const pressure = (rho * g * h).toFixed(0);
      return {
        text: `Calculate the hydrostatic pressure at a depth of ${h} m in water.`,
        answer: pressure + " Pa",
        modelAnswer: [
          `1) Identify: density ρ = ${rho} kg/m³, gravity g = ${g} m/s², depth h = ${h} m.`,
          `2) Use formula P = ρ × g × h.`,
          `3) Compute: P = ${rho} × ${g} × ${h} ≈ ${pressure} Pa.`
        ]
      };
    }
  },
  {
    topic: 4,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const A_cm2 = (Math.random() * 1000 + 500).toFixed(0);
      const h = (Math.random() * 4 + 2).toFixed(1);
      const rho = 1000, g = 9.81;
      const A_m2 = (A_cm2 / 10000).toFixed(4);
      const force = (rho * g * h * A_m2).toFixed(1);
      return {
        text: `A container with a base area of ${A_cm2} cm² is filled with water to ${h} m. Calculate the force on its base.`,
        answer: force + " N",
        modelAnswer: [
          `1) Convert area: ${A_cm2} cm² ÷ 10000 = ${A_m2} m².`,
          `2) Pressure at bottom: P = ρgh = ${rho}×${g}×${h} ≈ ${(rho*g*h).toFixed(0)} Pa.`,
          `3) Force = pressure × area = ${ (rho*g*h).toFixed(0) } × ${A_m2} ≈ ${force} N.`
        ]
      };
    }
  },
  {
    topic: 4,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const V_cm3 = (Math.random() * 500 + 100).toFixed(0);
      const rho = 1000, g = 9.81;
      const V_m3 = (V_cm3 / 1e6).toFixed(6);
      const buoyant = (rho * g * V_m3).toFixed(2);
      return {
        text: `An object displaces ${V_cm3} cm³ of water. Calculate its buoyant force using Archimedes’ principle.`,
        answer: buoyant + " N",
        modelAnswer: [
          `1) Convert volume: ${V_cm3} cm³ ÷ 1 000 000 = ${V_m3} m³.`,
          `2) Archimedes' principle: F_b = ρ × g × V = ${rho}×${g}×${V_m3} ≈ ${buoyant} N.`
        ]
      };
    }
  },
  {
    topic: 4,
    difficulty: "hard",
    type: "numeric_multi",
    question: function() {
      const Vg = (Math.random() * 60 + 20).toFixed(0);
      const dg = 1.3, dw = 1.0, dm = 1.1;
      // Vw = ((dg - dm)/(dm - dw)) * Vg
      const Vw = (((dg - dm) / (dm - dw)) * Vg).toFixed(1);
      return {
        text: `You have ${Vg} cm³ of glycerine (density 1.3 g/cm³). How much water (density 1.0 g/cm³) must be added to get mixture density 1.1 g/cm³?`,
        answer: Vw + " cm³",
        modelAnswer: [
          `1) Formula: dm = (dg·Vg + dw·Vw) / (Vg + Vw).`,
          `2) Rearranged: Vw = (dg − dm)/(dm − dw) × Vg.`,
          `3) Substitute: (1.3 − 1.1)/(1.1 − 1.0) = 0.2/0.1 = 2, so Vw = 2 × ${Vg} = ${Vw} cm³.`
        ]
      };
    }
  },
  {
    topic: 4,
    difficulty: "hard",
    type: "equation",
    question: function() {
      const Fsmall = (Math.random() * 200 + 100).toFixed(0);
      const Asmall = (Math.random() * 50 + 50).toFixed(0);
      const Alarge = (Math.random() * 200 + 100).toFixed(0);
      // F_large = Fsmall * (Alarge/Asmall)
      const Flarge = (Fsmall * (Alarge / Asmall)).toFixed(1);
      return {
        text: `In a hydraulic press, ${Fsmall} N is applied on a small piston of ${Asmall} cm². What force appears on a large piston of ${Alarge} cm²?`,
        answer: Flarge + " N",
        modelAnswer: [
          `1) Pascal’s principle: pressure is same, so F/A = constant.`,
          `2) Therefore F_large = F_small × (A_large/A_small).`,
          `3) Substitute: ${Fsmall} × (${Alarge}/${Asmall}) ≈ ${Flarge} N.`
        ]
      };
    }
  },
  // Definitions
  {
    topic: 4,
    difficulty: "easy",
    type: "definition",
    question: "Define pressure.",
    modelAnswer: "The amount of force pushing on each square metre of surface.",
    keywords: [["force"], ["surface"]]
  },
  {
    topic: 4,
    difficulty: "easy",
    type: "definition",
    question: "Define density.",
    modelAnswer: "How much mass there is in each cubic metre (or cm³) of a substance.",
    keywords: [["mass"], ["volume"]]
  },
  {
    topic: 4,
    difficulty: "hard",
    type: "numeric_multi",
    question: function() {
      const area_cm2 = 500;
      const height = 2.5;
      const rho = 1000, g = 9.8;
      const area_m2 = area_cm2 / 10000;
      const pressure = rho * g * height;
      const extraPressure = 0.1 * pressure;
      const extraForce = extraPressure * area_m2;
      return {
        text: `For a container area ${area_cm2} cm² and water height ${height} m, calculate: (a) hydrostatic pressure and (b) extra force if pressure rises by 10%.`,
        answer: [
          pressure.toFixed(0) + " Pa",
          extraForce.toFixed(2) + " N"
        ],
        modelAnswer: [
          `1) Pressure = ρgh = ${rho}×${g}×${height} ≈ ${pressure.toFixed(0)} Pa.`,
          `2) Extra pressure = 10% of that = 0.1×${pressure.toFixed(0)} = ${extraPressure.toFixed(0)} Pa.`,
          `3) Extra force = extra pressure × area in m² = ${extraPressure.toFixed(0)} × ${(area_m2).toFixed(4)} ≈ ${extraForce.toFixed(2)} N.`
        ]
      };
    }
  }
];
