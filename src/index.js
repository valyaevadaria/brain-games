import readlineSynk from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const countOfRaunds = 3;

export default (message, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(message);

  const name = readlineSynk.question('May I have your name? ');
  console.log(`Hello, ${name}`);

   const iter = (raundOfGame) => {
    if (raundOfGame > countOfRaunds) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const getDataForRaund = game();
    const question = car(getDataForRaund);
    const correctAnswer = cdr(getDataForRaund);

    console.log(`Question: ${question}`);
    const userAnswer = readlineSynk.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      iter(raundOfGame + 1);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
    }
  iter(1);
};
