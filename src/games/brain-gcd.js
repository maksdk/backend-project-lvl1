// @ts-check

import game from '../index.js';
import utils from '../utils/index.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const ROUNDS_COUNT = 3;

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

const createRounds = () => {
  const rounds = [];

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const number1 = utils.randomNumber(MIN_NUMBER, MAX_NUMBER);
    const number2 = utils.randomNumber(MIN_NUMBER, MAX_NUMBER);

    const question = `${number1} ${number2}`;
    const answer = String(getGreatestCommonDivisor(number1, number2));

    rounds.push({ question, answer });
  }

  return rounds;
};

const task = 'Find the greatest common divisor of given numbers.';

export default {
  run: () => game(task, createRounds),
};
