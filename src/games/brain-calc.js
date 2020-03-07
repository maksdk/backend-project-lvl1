// @ts-check

import play from '../index.js';
import { randomNumber } from '../utils/index.js';

const minNumber = 0;
const maxNumber = 10;
const roundsCount = 3;

const operations = {
  '*': (num1, num2) => num1 * num2,
  '+': (num1, num2) => num1 + num2,
  '-': (num1, num2) => num1 - num2,
};

const createRounds = () => {
  const operationsNames = Object.keys(operations);
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const num1 = randomNumber(minNumber, maxNumber);
    const num2 = randomNumber(minNumber, maxNumber);

    const operationName = operationsNames[randomNumber(0, operationsNames.length - 1)];
    const operation = operations[operationName];

    const question = `${num1} ${operationName} ${num2}`;
    const answer = String(operation(num1, num2));

    rounds.push({ answer, question });
  }

  return rounds;
};

const task = 'What is the result of the expression?';

export default () => play(task, createRounds);
