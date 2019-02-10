import startGame from '..';
import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils';

const startMessage = 'What number is missing in the progression?';
const countOfNumbers = 10;
let answer;

const getProgression = (start, empty) => {
  const iter = (num, list, count) => {
    if (count === countOfNumbers) {
      return list;
    }
    const nextNumber = num + start * count;
    if (count === empty) {
      answer = nextNumber;
      return iter(nextNumber, `${list} ..`, count + 1, nextNumber);
    }
    return iter(nextNumber, `${list} ${nextNumber}`, count + 1);
  };
  return iter(start, `${start}`, 1);
};

const brainProgression = () => {
  const startValue = getRandomNumber(100);
  const emptyPosition = getRandomNumber(9, 1);
  const question = getProgression(startValue, emptyPosition);
  return cons(question, `${answer}`);
};

export default () => startGame(startMessage, brainProgression);
