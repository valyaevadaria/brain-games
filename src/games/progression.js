import startGame from '..';
import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils';

const startMessage = 'What number is missing in the progression?';
const countOfNumbers = 10;


const getProgression = (start, step, empty) => {
  const iter = (list, count) => {
    if (count === countOfNumbers) {
      return list;
    }
    const nextNumber = start + step * count;
    if (count === empty) {
      return iter(`${list} ..`, count + 1);
    }
    return iter(`${list} ${nextNumber}`, count + 1);
  };
  return iter(`${start}`, 1);
};

const brainProgression = () => {
  const startValue = getRandomNumber(100);
  const difference = getRandomNumber(100);
  const emptyPosition = getRandomNumber(countOfNumbers);

  const question = getProgression(startValue, difference, emptyPosition);
  const answer = startValue + difference * emptyPosition;
  return cons(question, `${answer}`);
};

export default () => startGame(startMessage, brainProgression);
