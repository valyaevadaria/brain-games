import startGame from '..';
import { cons } from '../make-pair';
import getRandomNumber from './utils';

const isEven = number => (number % 2 === 0);

const brainEven = () => {
  const startMessage = 'Answer "yes" if number even otherwise answer "no".';
  const numberForQuewstion = getRandomNumber();
  const correctAnswer = isEven(numberForQuewstion) ? 'yes' : 'no';
  return cons(startMessage, cons(numberForQuewstion, correctAnswer));
};

export default () => startGame(brainEven);
