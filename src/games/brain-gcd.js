// @ts-check

import game from '../index.js';
import Utils from '../utils/index.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const ROUNDS_COUNT = 3;

const isPrime = (num) => {
  if (num < 2) return false;

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

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

const buildRounds = () => {
  const rounds = [];

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    let number1 = Utils.randomNumber(MIN_NUMBER, MAX_NUMBER);
    number1 = Utils.isPrime(number1) ? number1 + 1 : number1;

    let number2 = Utils.randomNumber(MIN_NUMBER, MAX_NUMBER);
    number2 = isPrime(number2) ? number2 + 1 : number2;

    const question = `${number1} ${number2}`;
    const answer = String(getGreatestCommonDivisor(number1, number2));

    rounds.push({ question, answer });
  }

  return rounds;
};

const task = 'Find the greatest common divisor of given numbers.';
const rounds = buildRounds();

export default {
  run: () => game(rounds, task),
};
