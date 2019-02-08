import { makePair } from '../document/make-pair';

const isEven = number => (number % 2 === 0);

const brainEven = () => {
  const numberForQuewstion = Math.round(Math.random() * 100);
  const correctAnswer = isEven(numberForQuewstion) ? 'yes' : 'no';
  return makePair(numberForQuewstion, correctAnswer);
};

export default brainEven;
