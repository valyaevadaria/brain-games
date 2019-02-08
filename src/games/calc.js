import { makePair } from '../func/make-pair';

const brainCalc = () => {
  const numberFirst = Math.round(Math.random() * 100);
  const numberSecond = Math.round(Math.random() * 100);
  const operation = Math.round(Math.random() * 10);
  let correctAnswer;
  let iconOperation;

  if (operation <= 3) {
    iconOperation = '+';
    correctAnswer = numberFirst + numberSecond;
  } else if (operation > 3 && operation <= 7) {
    iconOperation = '-';
    correctAnswer = numberFirst - numberSecond;
  } else {
    iconOperation = '*';
    correctAnswer = numberFirst * numberSecond;
  }

  return makePair(`${numberFirst} ${iconOperation} ${numberSecond}`, `${correctAnswer}`);
};

export default brainCalc;
