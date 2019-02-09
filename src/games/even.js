import startGame from '..';
import { cons } from '../make-pair';
import getRandomNumber from '../utils';

const isEven = number => (number % 2 === 0);

const startMessage = 'Answer "yes" if number even otherwise answer "no".';

const brainEven = () => {
  const numberForQuewstion = getRandomNumber(100);
  const correctAnswer = isEven(numberForQuewstion) ? 'yes' : 'no';
  return cons(numberForQuewstion, correctAnswer);
};

export default () => startGame(startMessage, brainEven, 3);
