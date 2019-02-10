import startGame from '..';
import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  const iter = (divider) => {
    if (divider > Math.sqrt(number)) {
      return true;
    }
    if (number % divider === 0) {
      return false;
    }
    return iter(divider + 1);
  };
  return iter(2);
};

const startMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const brainPrime = () => {
  const question = getRandomNumber(100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => startGame(startMessage, brainPrime);
