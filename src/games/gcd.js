// @ts-check

import play from '../index.js';
import { randomNumber } from '../utils/index.js';

const minNumber = 1;
const maxNumber = 20;

const getGreatestCommonDivisor = (num1, num2) => {
  let n1 = Math.abs(num1);
  let n2 = Math.abs(num2);

  while (n2) {
    const temp = n2;
    n2 = n1 % n2;
    n1 = temp;
  }

  return n1;
};

const generateRound = () => {
  const number1 = randomNumber(minNumber, maxNumber);
  const number2 = randomNumber(minNumber, maxNumber);

  const question = `${number1} ${number2}`;
  const answer = String(getGreatestCommonDivisor(number1, number2));

  return { question, answer };
};

const task = 'Find the greatest common divisor of given numbers.';

export default () => play(task, generateRound);
