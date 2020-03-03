// @ts-check

import play from '../index.js';
import utils from '../utils/index.js';

const MIN_NUMBER = 0;
const MAX_NUMBER = 10;
const ROUNDS_COUNT = 3;

const operations = {
  '*': (num1, num2) => num1 * num2,
  '+': (num1, num2) => num1 + num2,
  '-': (num1, num2) => num1 - num2,
};

const createRounds = () => {
  const operationsNames = Object.keys(operations);
  const rounds = [];

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const num1 = utils.randomNumber(MIN_NUMBER, MAX_NUMBER);
    const num2 = utils.randomNumber(MIN_NUMBER, MAX_NUMBER);

    const operationName = operationsNames[utils.randomNumber(0, operationsNames.length - 1)];
    const operation = operations[operationName];

    const question = `${num1} ${operationName} ${num2}`;
    const answer = String(operation(num1, num2));

    rounds.push({ answer, question });
  }

  return rounds;
};

const task = 'What is the result of the expression?';

export default () => play(task, createRounds);
