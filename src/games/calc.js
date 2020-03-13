// @ts-check

import play from '../index.js';
import randomNumber from '../utils/index.js';

const minNumber = 0;
const maxNumber = 10;

const operations = {
  '*': (num1, num2) => num1 * num2,
  '+': (num1, num2) => num1 + num2,
  '-': (num1, num2) => num1 - num2,
};

const generateRound = () => {
  const operationsNames = Object.keys(operations);

  const num1 = randomNumber(minNumber, maxNumber);
  const num2 = randomNumber(minNumber, maxNumber);

  const operationName = operationsNames[randomNumber(0, operationsNames.length - 1)];
  const operation = operations[operationName];

  const question = `${num1} ${operationName} ${num2}`;
  const answer = String(operation(num1, num2));

  return { question, answer };
};

const task = 'What is the result of the expression?';

export default () => play(task, generateRound);
