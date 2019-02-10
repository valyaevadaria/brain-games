import startGame from '..';
import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils';

const isEven = number => (number % 2 === 0);

const startMessage = 'Answer "yes" if number even otherwise answer "no".';

const brainEven = () => {
  const question = getRandomNumber(100);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => startGame(startMessage, brainEven);
