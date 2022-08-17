import express from 'express';
import {calculateBmi} from './bmiCalculator';
import { calculateExercises, parseExerciseArguments } from './exerciseCalculator';
const app = express();
import bodyParser from 'body-parser';
const jsonParser = bodyParser.json();

app.use(jsonParser);

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const {height, weight} = req.query;
  try {
    const bmi = calculateBmi(Number(height), Number(weight));
    res.json({weight, height, bmi});
  } catch (error) {
    if (error instanceof Error) {
      res.json({error: 'malformatted parameters'});
    }
  }
});
// Done 9.5

app.post('/exercises', (req,res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const {daily_exercises,target} = req.body;
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    parseExerciseArguments(daily_exercises);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const exerciseResullt = calculateExercises(daily_exercises,target);
    res.json(exerciseResullt);
  }
  catch(error) {
    // eslint-disable-next-line
    res.json({error: error.message});
  }


});

const PORT = 3000;


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
