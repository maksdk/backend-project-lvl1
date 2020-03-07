// @ts-check

import colors from 'colors';
import play from '../index.js';
import { randomNumber } from '../utils/index.js';

const minNumber = 0;
const maxNumber = 20;
const roundsCount = 3;

const correctAnswer = 'yes';
const wrongAnswer = 'no';

const isEven = (num) => num % 2 === 0;

const createRounds = () => {
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const number = randomNumber(minNumber, maxNumber);
    const question = String(number);
    const answer = isEven(number) ? correctAnswer : wrongAnswer;

    rounds.push({ question, answer });
  }

  return rounds;
};

const task = `Answer ${colors.red(`"${correctAnswer}"`)} ${colors.bold('if')} the number is even, otherwise answer ${colors.red(`"${wrongAnswer}"`)}.`;

export default () => play(task, createRounds);
