// @ts-check

import colors from 'colors';
import play from '../index.js';
import utils from '../utils/index.js';

const minStartNumber = -50;
const maxStartNumber = 50;

const minStep = -5;
const maxStep = 5;

const roundsCount = 3;
const progressionLength = 10;

const generateProgression = (startNum, step) => {
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    const progressionValue = startNum + step * i;
    progression.push(progressionValue);
  }

  return progression;
};

const createRounds = () => {
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const startNumber = utils.randomNumber(minStartNumber, maxStartNumber);

    let step = utils.randomNumber(minStep, maxStep);
    step = step === 0 ? step + maxStep : step;

    const progression = generateProgression(startNumber, step);
    const randomIndex = utils.randomNumber(0, progression.length - 1);

    const answer = String(progression[randomIndex]);

    progression[randomIndex] = '..';
    const question = progression.join(' ');

    rounds.push({ question, answer });
  }

  return rounds;
};

const task = `What number is missing ${colors.bold('in')} the progression?`;

export default () => play(task, createRounds);
