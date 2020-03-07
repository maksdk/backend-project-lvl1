// @ts-check

import colors from 'colors';
import play from '../index.js';
import { randomNumber } from '../utils/index.js';

const minNumber = 0;
const maxNumber = 20;

const correctAnswer = 'yes';
const wrongAnswer = 'no';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const number = randomNumber(minNumber, maxNumber);
  const question = String(number);
  const answer = isEven(number) ? correctAnswer : wrongAnswer;

  return { question, answer };
};

const task = `Answer ${colors.red(`"${correctAnswer}"`)} ${colors.bold('if')} the number is even, otherwise answer ${colors.red(`"${wrongAnswer}"`)}.`;

export default () => play(task, generateRound);
