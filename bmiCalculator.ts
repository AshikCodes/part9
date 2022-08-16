const calculateBmi = (height: number, weight: number): String => {
  const bmi = weight / Math.pow(height / 100, 2);
  console.log(`bmi is ${bmi}`);
  if (bmi < 18.5) {
    return "Underweight (unhealthy weight)";
  } else if (bmi > 18.5 && bmi < 24.9) {
    return "Normal (healthy weight)";
  } else if (bmi > 25.0 && bmi < 29.0) {
    return "Overweight (unhealthy weight)";
  } else if (bmi > 30.0 && bmi < 34.9) {
    return "Obesity class I (unhealthy weight)";
  } else if (bmi > 35.0 && bmi < 39.9) {
    return "Obesity class II (unhealthy weight)";
  } else if (bmi > 40) {
    return "Obesity class III (unhealthy weight)";
  } else {
    throw new Error("Invalid input");
  }
};

console.log(calculateBmi(180, 74));
