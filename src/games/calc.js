import startGame from '..';
import { cons } from '../make-pair';
import getRandomNumber from './utils';

const brainCalc = () => {
  const startMessage = 'What is the result of the expression?';
  const numberFirst = getRandomNumber();
  const numberSecond = getRandomNumber();
  const operation = Math.round((Math.random() * 2) + 1);
  let correctAnswer;
  let operationIcon;

  switch (operation) {
    case 1:
      operationIcon = '+';
      correctAnswer = numberFirst + numberSecond;
      break;
    case 2:
      operationIcon = '-';
      correctAnswer = numberFirst - numberSecond;
      break;
    case 3:
      operationIcon = '*';
      correctAnswer = numberFirst * numberSecond;
      break;
    default:
      break;
  }

  return cons(startMessage, cons(`${numberFirst} ${operationIcon} ${numberSecond}`, `${correctAnswer}`));
};

export default () => startGame(brainCalc);
