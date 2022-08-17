interface ExerciseInfo {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (param: Array<number>): ExerciseInfo => {
  const periodLength = param.length;
  const trainingDays = param.filter((a) => a > 0).length;
  var totalHours = 0;
  for (let i = 0; i < periodLength; i++) {
    totalHours += param[i];
  }
  const average = totalHours / periodLength;
  // var rating
  // if(average > 2){
  //     rating = 3
  // }
  // else if(average < 2 && average > 1){
  //     rating = 2
  // }
  // else {
  //     rating = 1
  // }
  // const rating = 3 ? average > 2 : 2 ? average < 2 && average > 1 : 1;
  const rating = average > 2 ? 3 : average < 2 && average > 1 ? 2 : 1;
  console.log(`rating here is ${rating}`);
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

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1]));
