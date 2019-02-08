import startGame from './logicgames';
import brainEven from './games/even';
import brainCalc from './games/calc';

export default (nameGame) => {
  if (nameGame === 'brain-even') {
    return startGame(brainEven, 'Answer "yes" if number even otherwise answer "no".');
  } if (nameGame === 'brain-calc') {
    return startGame(brainCalc, 'What is the result of the expression?');
  }
};
