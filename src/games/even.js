import startGame from '..';
import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils';

const isEven = number => (number % 2 === 0);

const startMessage = 'Answer "yes" if number even otherwise answer "no".';

const brainEven = () => {
  const quewstion = getRandomNumber(100);
  const answer = isEven(quewstion) ? 'yes' : 'no';
  return cons(quewstion, answer);
};

export default () => startGame(startMessage, brainEven, 3);
