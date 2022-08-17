interface ExerciseInfo {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const parseExerciseArguments = (exerciseArray: Array<string>) => {
  const finalArray = [];

  if(exerciseArray === null || exerciseArray.length === 0){
    throw new Error('parameters missing');
  }

  for (let i = 2; i < exerciseArray.length; i++) {
    if (!isNaN(Number(exerciseArray[i]))) {
      finalArray.push(Number(exerciseArray[i]));
    } else {
      throw new Error('malformatted parameters');
    }
  }

  return {finalArray};
};

const calculateExercises = (exerciseArray: Array<number>, targetNum: number): ExerciseInfo => {
  const periodLength = exerciseArray.length;
  const trainingDays = exerciseArray.filter((a) => a > 0).length;
  let totalHours = 0;
  for (let i = 0; i < periodLength; i++) {
    totalHours += exerciseArray[i];
  }
  const average = totalHours / periodLength;
  const target = targetNum;
  const rating = average > target ? 3 : average == target ? 2 : 1;
  // eslint-disable-next-line no-constant-condition
  const success = true ? average >= target : false;
  const ratingDescription =
    rating == 3 ?
      'good' :
      rating == 2 ?
      'not too bad but could be better' :
      rating == 1 ?
      'bad' :
      'Error';
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

// try {
//   const {finalArray} = parseExerciseArguments(process.argv);
//   console.log(calculateExercises(finalArray,2));
// } catch (error) {
//   let errorMsg = 'Something bad happened.';
//   if (error instanceof Error) {
//     errorMsg += 'Error: ' + error.message;
//   }
//   console.log(errorMsg);
// }

export {calculateExercises,parseExerciseArguments};