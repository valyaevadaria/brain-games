import readlineSynk from 'readline-sync';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log(`Answer "yes" if number even otherwise answer "no".`);

  const name = readlineSynk.question('May I have your name? ');
  console.log('Hello, ' + name);

  const number = Math.round(Math.random() * 100);
  console.log('Question: ' + number);
  const answer = readlineSynk.question('Your answer: ');

  const iter = (n, a, step) => {
    const correctAnswer = n%2 === 0 ? 'yes' : 'no';
    if ((a !== 'yes' && a !== 'no') || a !== correctAnswer){
      console.log(`'${a}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
    if (a === correctAnswer){
      console.log('Correct!');
      const newNumber = Math.round(Math.random() * 100);
      console.log('Question: ' + newNumber);
      const newAnswer = readlineSynk.question('Your answer: ');
      return iter(newNumber, newAnswer, step+1);
    }
    if (step === 4){
      return console.log(`Congratulations, ${name}`);
    }
  }
    
  return iter(number, answer, 1);
};

brainEven();