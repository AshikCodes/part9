// interface ParsedValues {
//   height: number;
//   weight: number;
// }

// const parseArguments = (args: Array<string>): ParsedValues => {
//   if (args.length < 4) {
//     throw new Error('Not enough arguments');
//   }
//   if (args.length > 4) {
//     throw new Error('Too many arguments');
//   }

//   if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
//     return {
//       height: Number(args[2]),
//       weight: Number(args[3]),
//     };
//   } else {
//     throw new Error('Provided values were not numbers');
//   }
// };

const calculateBmi = (height: number, weight: number) => {
  const bmi = weight / Math.pow(height / 100, 2);
  if (bmi < 18.5) {
    return 'Underweight (unhealthy weight)';
  } else if (bmi > 18.5 && bmi < 24.9) {
    return 'Normal (healthy weight)';
  } else if (bmi > 25.0 && bmi < 29.0) {
    return 'Overweight (unhealthy weight)';
  } else if (bmi > 30.0 && bmi < 34.9) {
    return 'Obesity class I (unhealthy weight)';
  } else if (bmi > 35.0 && bmi < 39.9) {
    return 'Obesity class II (unhealthy weight)';
  } else if (bmi > 40) {
    return 'Obesity class III (unhealthy weight)';
  } else {
    throw new Error('Invalid input');
  }
};

// try {
//   const {height, weight} = parseArguments(process.argv);
//   console.log(calculateBmi(height, weight));
// } catch (error) {
//   let errorMsg = 'Something bad happened.';
//   if (error instanceof Error) {
//     errorMsg += ' Error:' + error.message;
//   }
//   console.log(errorMsg);
// }

export {calculateBmi};
