// @ts-check

import colors from 'colors';
import play from '../index.js';
import utils from '../utils/index.js';

const minStartNumber = -50;
const maxStartNumber = 50;

const minProgressStep = -5;
const maxProgressStep = 5;

const roundsCount = 3;
const rangeLength = 10;

const generateProgression = (startNum, step) => {
  const ranges = [];

  for (let i = 0; i < rangeLength; i += 1) {
    const randgeValue = startNum + step * i;
    ranges.push(randgeValue);
  }

  return ranges;
};

const createRounds = () => {
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const startNumber = utils.randomNumber(minStartNumber, maxStartNumber);

    let progressStep = utils.randomNumber(minProgressStep, maxProgressStep);
    progressStep = progressStep === 0 ? progressStep + maxProgressStep : progressStep;

    const progression = generateProgression(startNumber, progressStep);
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
