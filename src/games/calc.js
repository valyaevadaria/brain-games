import startGame from '..';
import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils';

const startMessage = 'What is the result of the expression?';

const brainCalc = () => {
  const numberFirst = getRandomNumber(100);
  const numberSecond = getRandomNumber(100);
  const operation = getRandomNumber(3);
  let answer;
  let operationIcon;

  switch (operation) {
    case 1:
      operationIcon = '+';
      answer = numberFirst + numberSecond;
      break;
    case 2:
      operationIcon = '-';
      answer = numberFirst - numberSecond;
      break;
    case 3:
      operationIcon = '*';
      answer = numberFirst * numberSecond;
      break;
    default:
      break;
  }

  const question = `${numberFirst} ${operationIcon} ${numberSecond}`;
  return cons(question, `${answer}`);
};

export default () => startGame(startMessage, brainCalc);
