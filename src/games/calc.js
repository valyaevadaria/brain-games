import startGame from '..';
import { cons } from '../make-pair';
import getRandomNumber from '../utils';

const startMessage = 'What is the result of the expression?';

const brainCalc = () => {
  const numberFirst = getRandomNumber(100);
  const numberSecond = getRandomNumber(100);
  const operation = getRandomNumber(2, 1);
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

  const mathExpression = `${numberFirst} ${operationIcon} ${numberSecond}`;
  return cons(mathExpression, `${correctAnswer}`);
};

export default () => startGame(startMessage, brainCalc, 3);
