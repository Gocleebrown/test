// scripts/topic3.js

// Topic 3: Dynamics
const additionalQuestionsTopic3 = [
  {
    topic: 3,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const m = (Math.random() * 20 + 10).toFixed(1);
      const F = (Math.random() * 100 + 50).toFixed(1);
      const f = (Math.random() * F * 0.5).toFixed(1);
      const netForce = (F - f).toFixed(1);
      const a = (netForce / m).toFixed(2);
      return {
        text: `A force of ${F} N is applied to a ${m} kg object while friction of ${f} N opposes it. Calculate the net acceleration.`,
        answer: a + " m/s²",
        modelAnswer: [
          `1) Find the net force: ${F} N − ${f} N = ${netForce} N.`,
          `2) Use F = m×a, so a = net force ÷ mass = ${netForce} ÷ ${m} ≈ ${a} m/s².`
        ]
      };
    }
  },
  {
    topic: 3,
    difficulty: "hard",
    type: "equation",
    question: function() {
      const m1 = (Math.random() * 5 + 1).toFixed(1);
      const m2 = (Math.random() * 5 + 1).toFixed(1);
      const u1 = (Math.random() * 10 + 5).toFixed(1);
      const u2 = (Math.random() * 10).toFixed(1);
      const v1 = (
        ((m1 - m2) / (parseFloat(m1) + parseFloat(m2))) * u1 +
        ((2 * m2) / (parseFloat(m1) + parseFloat(m2))) * u2
      ).toFixed(2);
      return {
        text: `Two objects (masses ${m1} kg and ${m2} kg) moving at ${u1} m/s and ${u2} m/s collide elastically. Find the final speed of the ${m1} kg object.`,
        answer: v1 + " m/s",
        modelAnswer: [
          `1) Use elastic collision formula:`,
          `   v₁ = [(m₁−m₂)/(m₁+m₂)]×u₁ + [2m₂/(m₁+m₂)]×u₂.`,
          `2) Substitute:`,
          `   = [(${m1}−${m2})/(${m1}+${m2})]×${u1} + [2×${m2}/(${m1}+${m2})]×${u2} ≈ ${v1} m/s.`
        ]
      };
    }
  },
  {
    topic: 3,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const m1 = (Math.random() * 10 + 5).toFixed(1);
      const m2 = (Math.random() * 10 + 5).toFixed(1);
      const u1 = (Math.random() * 10 + 10).toFixed(1);
      const u2 = (Math.random() * 5).toFixed(1);
      const finalV = ((m1 * u1 + m2 * u2) / (parseFloat(m1) + parseFloat(m2))).toFixed(2);
      return {
        text: `A ${m1} kg object moving at ${u1} m/s collides inelastically with a ${m2} kg object at ${u2} m/s. Find their common final velocity.`,
        answer: finalV + " m/s",
        modelAnswer: [
          `1) Total momentum before collision:`,
          `   = (${m1}×${u1}) + (${m2}×${u2}) = ${(m1*u1 + m2*u2).toFixed(2)} kg·m/s.`,
          `2) Total mass = ${m1} + ${m2} = ${(parseFloat(m1)+parseFloat(m2)).toFixed(1)} kg.`,
          `3) Final velocity = momentum ÷ mass = ${(m1*u1 + m2*u2).toFixed(2)} ÷ ${(parseFloat(m1)+parseFloat(m2)).toFixed(1)} ≈ ${finalV} m/s.`
        ]
      };
    }
  },
  {
    topic: 3,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const m = (Math.random() * 20 + 5).toFixed(1);
      const angle = (Math.random() * 20 + 10).toFixed(1);
      const d = (Math.random() * 10 + 2).toFixed(1);
      const g = 9.8;
      const a = (g * Math.sin(angle * Math.PI / 180)).toFixed(2);
      const v = (Math.sqrt(2 * a * d)).toFixed(2);
      return {
        text: `A ${m} kg block slides down a ${angle}° frictionless slope for ${d} m. Find its speed at the bottom.`,
        answer: v + " m/s",
        modelAnswer: [
          `1) a = g × sin(${angle}°) = ${g} × sin(${angle}°) ≈ ${a} m/s².`,
          `2) v = √(2 a d) = √(2 × ${a} × ${d}) ≈ ${v} m/s.`
        ]
      };
    }
  },
  {
    topic: 3,
    difficulty: "hard",
    type: "numeric_multi",
    question: function() {
      const mass = 20;
      const angle = 23;
      const distance = 5;
      const g = 9.8;
      const a = g * Math.sin(angle * Math.PI / 180);
      const v = Math.sqrt(2 * a * distance);
      const ke = 0.5 * mass * v * v;
      return {
        text: `A ${mass} kg block slides down a ${angle}° slope for ${distance} m. Calculate: (a) acceleration, (b) final speed, and (c) kinetic energy.`,
        answer: [
          a.toFixed(2) + " m/s²",
          v.toFixed(2) + " m/s",
          ke.toFixed(2) + " J"
        ],
        modelAnswer: [
          `1) a = g × sin(${angle}°) = ${g} × sin(${angle}°) ≈ ${a.toFixed(2)} m/s².`,
          `2) v = √(2 a d) = √(2 × ${a.toFixed(2)} × ${distance}) ≈ ${v.toFixed(2)} m/s.`,
          `3) KE = ½ m v² = 0.5 × ${mass} × (${v.toFixed(2)})² ≈ ${ke.toFixed(2)} J.`
        ]
      };
    }
  },

  // Definitions
  {
    topic: 3,
    difficulty: "easy",
    type: "definition",
    question: "State Newton’s First Law of Motion.",
    modelAnswer: "An object stays at rest or keeps moving in a straight line unless a net force acts on it.",
    keywords: [["rest"], ["straight line"], ["force"]]
  },
  {
    topic: 3,
    difficulty: "easy",
    type: "definition",
    question: "What is meant by the centre of gravity of an object?",
    modelAnswer: "It is the single point where all of an object’s weight seems to act.",
    keywords: [["single point"], ["weight"]]
  },
  {
    topic: 3,
    difficulty: "easy",
    type: "definition",
    question: "State Newton’s Second Law of Motion.",
    modelAnswer: "Force equals mass multiplied by acceleration (F = m×a).",
    keywords: [["force"], ["mass"], ["acceleration"]]
  },
  {
    topic: 3,
    difficulty: "easy",
    type: "definition",
    question: "State Newton’s Third Law of Motion.",
    modelAnswer: "Whenever one object pushes on another, the second object pushes back equally in the opposite direction.",
    keywords: [["push"], ["equal"], ["opposite"]]
  },
  {
    topic: 3,
    difficulty: "easy",
    type: "definition",
    question: "Define inertia.",
    modelAnswer: "Inertia is an object’s tendency to keep doing whatever it is doing, whether that is staying at rest or moving.",
    keywords: [["tendency"], ["change"], ["motion"]]
  }
];
