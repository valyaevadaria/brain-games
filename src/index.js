import readlineSynk from 'readline-sync';
import isEven from './func/iseven';

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');

  const name = readlineSynk.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  const iter = (raundOfGame) => {
    const numberForQuewstion = Math.round(Math.random() * 100);
    console.log(`Question: ${numberForQuewstion}`);
    const userAnswer = readlineSynk.question('Your answer: ');

    const correctAnswer = isEven(numberForQuewstion) ? 'yes' : 'no';
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
