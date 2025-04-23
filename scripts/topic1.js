// scripts/topic1.js

// Topic 1: Physical Quantities and Units
const additionalQuestionsTopic1 = [
  {
    topic: 1,
    difficulty: "easy",
    type: "numeric_multi",
    question: function() {
      const km = (Math.random() * 10 + 5).toFixed(1);
      const m = (km * 1000).toFixed(0);
      const cm = (km * 100000).toFixed(0);
      return {
        text: `A runner completes a race of ${km} km. Express this distance in both metres and centimetres. Explain your conversion process.`,
        answer: [m + " m", cm + " cm"],
        modelAnswer: [
          `We know 1 km = 1000 m. So multiply ${km} by 1000: ${km} × 1000 = ${m}. That gives ${m} m.`,
          `We also know 1 km = 100 000 cm. So multiply ${km} by 100 000: ${km} × 100000 = ${cm}. That gives ${cm} cm.`
        ]
      };
    }
  },
  {
    topic: 1,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const densitySI = (Math.random() * 1000 + 500).toFixed(0);
      const densityCGS = (densitySI / 1000).toFixed(3);
      return {
        text: `A substance has a density of ${densitySI} kg/m³. Convert this density to g/cm³. Explain the conversion.`,
        answer: densityCGS + " g/cm³",
        modelAnswer: `Since 1 kg/m³ is the same as 0.001 g/cm³, we multiply ${densitySI} by 0.001 to convert: ${densitySI} × 0.001 = ${densityCGS}. So it is ${densityCGS} g/cm³.`
      };
    }
  },
  {
    topic: 1,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const V = (Math.random() * 450 + 50).toFixed(0);
      const dV = (V * (Math.random() * 0.1 + 0.01)).toFixed(1);
      const percent = ((dV / V) * 100).toFixed(1);
      return {
        text: `A measurement gives a value of ${V} with an absolute uncertainty of ${dV}. Calculate the percentage uncertainty. Explain how you got your answer.`,
        answer: percent + " %",
        modelAnswer: `Percentage uncertainty = (absolute uncertainty ÷ measured value) × 100.\nHere: (${dV} ÷ ${V}) × 100 ≈ ${percent}. So it is about ${percent} %.`
      };
    }
  },
  {
    topic: 1,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const C = (Math.random() * 100).toFixed(1);
      const K = (parseFloat(C) + 273.15).toFixed(2);
      return {
        text: `Convert a temperature of ${C} °C to kelvin. Explain the formula you use.`,
        answer: K + " K",
        modelAnswer: `To convert °C to K, you add 273.15 because 0 °C equals 273.15 K.\nSo: ${C} + 273.15 = ${K}. That gives ${K} K.`
      };
    }
  },
  {
    topic: 1,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const km = (Math.random() * 9 + 1).toFixed(3);
      const m  = (km * 1000).toFixed(0);
      return {
        text: `Convert ${km} km to metres.`,
        answer: m,
        modelAnswer: `1 km = 1000 m. Multiply ${km} by 1000: ${km} × 1000 = ${m}. So it is ${m} m.`
      };
    }
  },
  {
    topic: 1,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const grams = Math.floor(Math.random() * 9001) + 1000;
      const kg = (grams / 1000).toFixed(3);
      return {
        text: `Express ${grams} g in kilograms.`,
        answer: kg,
        modelAnswer: `1 kg = 1000 g. Divide ${grams} by 1000: ${grams} ÷ 1000 = ${kg}. So it is ${kg} kg.`
      };
    }
  },
  {
    topic: 1,
    difficulty: "hard",
    type: "equation",
    question: function() {
      const km = (Math.random() * 90 + 10).toFixed(0);
      const hr = (Math.random() * 9 + 1).toFixed(1);
      const mps = ((parseFloat(km) * 1000) / (parseFloat(hr) * 3600)).toFixed(2);
      return {
        text: `A car travels ${km} km in ${hr} hours. What is its speed in m/s?`,
        answer: mps,
        modelAnswer: `1 km = 1000 m and 1 h = 3600 s.\nSo distance = ${km}×1000 = ${parseFloat(km)*1000} m, time = ${hr}×3600 ≈ ${parseFloat(hr)*3600} s.\nSpeed = distance ÷ time = ${parseFloat(km)*1000} ÷ ${parseFloat(hr)*3600} ≈ ${mps} m/s.`
      };
    }
  },
  {
    topic: 1,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const mass_g = (Math.random() * 98000 + 2000).toFixed(0);
      const volume_cm3 = (Math.random() * 49500 + 500).toFixed(0);
      const density = ((mass_g / 1000) / (volume_cm3 / 1e6)).toFixed(0);
      return {
        text: `A substance has ${mass_g} g and occupies ${volume_cm3} cm³. Calculate its density in kg/m³.`,
        answer: density + " kg/m³",
        modelAnswer: `First convert mass to kg: ${mass_g} g ÷ 1000 = ${ (mass_g/1000).toFixed(3) } kg.\nThen convert volume to m³: ${volume_cm3} cm³ ÷ 1 000 000 = ${ (volume_cm3/1e6).toFixed(6) } m³.\nDensity = mass ÷ volume = ${ (mass_g/1000).toFixed(3) } ÷ ${ (volume_cm3/1e6).toFixed(6) } ≈ ${density} kg/m³.`
      };
    }
  },
  {
    topic: 1,
    difficulty: "easy",
    type: "definition",
    question: "Define a scalar quantity.",
    modelAnswer: "A scalar is a quantity that has only size (magnitude), like 5 m or 20 s, with no direction.",
    keywords: [["magnitude", "size", "amount"], ["no direction", "directionless"]]
  },
  {
    topic: 1,
    difficulty: "easy",
    type: "definition",
    question: "Define a vector quantity.",
    modelAnswer: "A vector is a quantity that has both size (magnitude) and direction, like 5 m to the north.",
    keywords: [["magnitude", "size"], ["direction", "arrow"]]
  },
  {
    topic: 1,
    difficulty: "easy",
    type: "definition",
    question: "Define an SI base quantity.",
    modelAnswer: "An SI base quantity is one that is defined on its own, like length or time, and is used to build other quantities.",
    keywords: [["independent"], ["derived", "build"]]
  },
  {
    topic: 1,
    difficulty: "easy",
    type: "definition",
    question: "Define random error.",
    modelAnswer: "Random error is the small, unpredictable changes you get when you repeat a measurement, caused by things you cannot control.",
    keywords: [["unpredictable"], ["variation", "fluctuation"]]
  },
  {
    topic: 1,
    difficulty: "easy",
    type: "definition",
    question: "Define systematic error.",
    modelAnswer: "Systematic error is a consistent mistake in one direction, for example if a scale is always 0.1 kg off.",
    keywords: [["consistent"], ["bias", "offset"]]
  },
  {
    topic: 1,
    difficulty: "easy",
    type: "definition",
    question: "Define precision.",
    modelAnswer: "Precision shows how close repeated measurements are to each other, even if they are not correct.",
    keywords: [["repeatability"], ["closeness"]]
  },
  {
    topic: 1,
    difficulty: "easy",
    type: "definition",
    question: "Define accuracy.",
    modelAnswer: "Accuracy shows how close a measurement is to the true or accepted value.",
    keywords: [["true value"], ["correctness"]]
  },
  {
    topic: 1,
    difficulty: "easy",
    type: "definition",
    question: "Define absolute uncertainty.",
    modelAnswer: "Absolute uncertainty is the amount by which you think your measurement could be wrong, for example ±0.2 cm.",
    keywords: [["may vary"], ["error", "uncertainty"]]
  },
  {
    topic: 1,
    difficulty: "easy",
    type: "definition",
    question: "Explain how to combine uncertainties for multiplication and division.",
    modelAnswer: "When you multiply or divide measurements, add their percentage uncertainties together to get the total uncertainty.",
    keywords: [["percentage uncertainty"], ["add"]]
  },
  {
    topic: 1,
    difficulty: "easy",
    type: "equation",
    question: function() {
      const length = (Math.random() * 3 + 0.5).toFixed(2);
      const uncertainty = (Math.random() * 0.09 + 0.01).toFixed(3);
      const perc = ((uncertainty / length) * 100).toFixed(2);
      return {
        text: `An object is measured as ${length} m with an uncertainty of ${uncertainty} m. Calculate the percentage uncertainty.`,
        answer: perc + " %",
             modelAnswer: `Percentage uncertainty = (uncertainty ÷ measurement) × 100.\nHere: (${uncertainty} ÷ ${length}) × 100 = ${perc} %. So the percentage uncertainty is about ${perc} %.`
    };
  }
];
