import readlineSynk from 'readline-sync';
import { getMean, getAnswer } from './document/make-pair';

export default (meansOfGame, gameTask) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameTask);

  const name = readlineSynk.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  const iter = (raundOfGame) => {
    if (raundOfGame === 4) {
      console.log(`Congratulations, ${name}!`);
    } else {
      const game = meansOfGame();
      const meanForQuewstion = getMean(game);
      console.log(`Question: ${meanForQuewstion}`);
      const userAnswer = readlineSynk.question('Your answer: ');

      const correctAnswer = getAnswer(game);
      if (userAnswer === correctAnswer) {
        console.log('Correct!');
        iter(raundOfGame + 1);
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${name}!`);
      }
    }
  };
  iter(1);
};
