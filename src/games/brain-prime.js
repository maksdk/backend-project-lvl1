// @ts-check

import colors from 'colors';
import play from '../index.js';
import utils from '../utils/index.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 50;
const ROUNDS_COUNT = 3;

const YES_ANSWER = 'yes';
const NO_ANSWER = 'no';

const isPrime = (num) => {
  if (num < 2) return false;

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const createRounds = () => {
  const rounds = [];

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const number = utils.randomNumber(MIN_NUMBER, MAX_NUMBER);
    const question = String(number);
    const answer = isPrime(number) === true ? YES_ANSWER : NO_ANSWER;

    rounds.push({ question, answer });
  }

  return rounds;
};

const task = `Answer ${colors.red('"yes"')} ${colors.bold('if')} given number is prime. Otherwise answer ${colors.red('"no"')}.`;

export default () => play(task, createRounds);
