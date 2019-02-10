import startGame from '..';
import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils';

const getGCD = (num1, num2) => {
  if (num1 === 1 || num2 === 1) {
    return 1;
  } if (num1 === num2) {
    return num1;
  }

  const mixNum = num1 > num2 ? num2 : num1;
  const iter = (divider, maxDivider) => {
    if (divider > mixNum) {
      return maxDivider;
    }
    if (num1 % divider === 0 && num2 % divider === 0) {
      return iter(divider + 1, divider);
    }
    return iter(divider + 1, maxDivider);
  };
  return iter(1, 1);
};

const startMessage = 'Find the greatest common divisor of given numbers.';

const brainGCD = () => {
  const numberFirst = getRandomNumber(100);
  const numberSecond = getRandomNumber(100);
  const question = `${numberFirst} ${numberSecond}`;
  const answer = getGCD(numberFirst, numberSecond);
  return cons(question, `${answer}`);
};

export default () => startGame(startMessage, brainGCD);
