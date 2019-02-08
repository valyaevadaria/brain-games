import isEven from '../func/iseven';
import { makePair } from '../func/make-pair';

const brainEven = () => {
  const numberForQuewstion = Math.round(Math.random() * 100);
  const correctAnswer = isEven(numberForQuewstion) ? 'yes' : 'no';
  return makePair(numberForQuewstion, correctAnswer);
};

export default brainEven;
