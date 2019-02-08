import readlineSynk from 'readline-sync';
import { getMean, getAnswer } from './func/make-pair';

export default (meansOfGame, gameTask) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameTask);

  const name = readlineSynk.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  const iter = (raundOfGame) => {
    const game = meansOfGame();
    const meanForQuewstion = getMean(game);
    console.log(`Question: ${meanForQuewstion}`);
    const userAnswer = readlineSynk.question('Your answer: ');

    const correctAnswer = getAnswer(game);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      if (raundOfGame === 3) {
        console.log(`Congratulations, ${name}!`);
      } else {
        iter(raundOfGame + 1);
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
    }
  };
  iter(1);
};
