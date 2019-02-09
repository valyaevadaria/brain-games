import startGame from '..';
import { cons, car, cdr } from 'hexlet-pairs';
import getRandomNumber from '../utils';

const getProgression = (start, countOfNum) => {
  const emptyPosition = getRandomNumber(9, 1);

  const iter = (num, list, count, answer) => {
    if (count > countOfNum) {
      return cons(list, answer);
    }
    const nextNumber = num + start * count;
    if (count === emptyPosition) {
      return iter(nextNumber, `${list} ..`, count + 1, nextNumber);
    }
    return iter(nextNumber, `${list} ${nextNumber}`, count + 1, answer);
  };
  return iter(start, `${start}`, 1);
};

const startMessage = 'What number is missing in the progression?';

const brainProgression = () => {
  const startValue = getRandomNumber(100);
  const countOfNumbers = 10;

  const data = getProgression(startValue, countOfNumbers);
  const question = car(data);
  const answer = cdr(data);
  return cons(question, `${answer}`);
};

export default () => startGame(startMessage, brainProgression, 3);
