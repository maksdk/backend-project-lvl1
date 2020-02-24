// @ts-check

import colors from 'colors';
import game from '../index.js';
import Utils from '../utils/index.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 50;
const ROUNDS_COUNT = 3;

const YES_ANSWER = 'yes';
const NO_ANSWER = 'no';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const buildRounds = () => {
  const rounds = [];

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const number = Utils.randomNumber(MIN_NUMBER, MAX_NUMBER);
    const question = String(number);
    const answer = isPrime(number) === true ? YES_ANSWER : NO_ANSWER;

    rounds.push({ question, answer });
  }

  return rounds;
};

const task = `Answer ${colors.red('"yes"')} ${colors.bold('if')} given number is prime. Otherwise answer ${colors.red('"no"')}.`;
const rounds = buildRounds();

export default {
  run: () => game(rounds, task),
};
