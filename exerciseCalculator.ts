interface ExerciseInfo {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const parseExerciseArguments = (args: Array<string>) => {
  const finalArray = [];

  for (let i = 2; i < args.length; i++) {
    if (!isNaN(Number(args[i]))) {
      finalArray.push(Number(args[i]));
    } else {
      throw new Error("Input provided were not numbers");
    }
  }

  return { finalArray };
};

const calculateExercises = (param: Array<number>): ExerciseInfo => {
  const periodLength = param.length;
  const trainingDays = param.filter((a) => a > 0).length;
  var totalHours = 0;
  for (let i = 0; i < periodLength; i++) {
    totalHours += param[i];
  }
  const average = totalHours / periodLength;
  const rating = average > 2 ? 3 : average < 2 && average > 1 ? 2 : 1;
  const target = 2;
  const success = true ? average >= 2 : false;
  const ratingDescription =
    rating == 3
      ? "Hours met"
      : rating == 2
      ? "not too bad but could be better"
      : rating == 1
      ? "Hours not met"
      : "Error";
  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
};

try {
  const { finalArray } = parseExerciseArguments(process.argv);
  console.log(calculateExercises(finalArray));
} catch (error) {
  let errorMsg = "Something bad happened.";
  if (error instanceof Error) {
    errorMsg += "Error: " + error.message;
  }
  console.log(errorMsg);
}
