// @ts-check

import colors from 'colors';
import play from '../index.js';
import { randomNumber } from '../utils/index.js';

const minNumber = 1;
const maxNumber = 50;

const correctAnswer = 'yes';
const wrongAnswer = 'no';

const isPrime = (num) => {
  if (num < 2) return false;

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const generateRound = () => {
  const number = randomNumber(minNumber, maxNumber);
  const question = String(number);
  const answer = isPrime(number) === true ? correctAnswer : wrongAnswer;

  return { question, answer };
};

const task = `Answer ${colors.red('"yes"')} ${colors.bold('if')} given number is prime. Otherwise answer ${colors.red('"no"')}.`;

export default () => play(task, generateRound);
