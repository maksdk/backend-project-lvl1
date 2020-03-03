// @ts-check

import colors from 'colors';
import play from '../index.js';
import utils from '../utils/index.js';

const MIN_START_NUMBER = -50;
const MAX_START_NUMBER = 50;

const MIN_PROGRESS_STEP_NUMBER = -5;
const MAX_PROGRESS_STEP_NUMBER = 5;

const ROUNDS_COUNT = 3;
const RANGE_LENGTH = 10;

const generateProgression = (startNum, step) => {
  const ranges = [];

  for (let i = 0; i < RANGE_LENGTH; i += 1) {
    const randgeValue = startNum + step * i;
    ranges.push(randgeValue);
  }

  return ranges;
};

const createRounds = () => {
  const rounds = [];

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const startNumber = utils.randomNumber(MIN_START_NUMBER, MAX_START_NUMBER);

    let progressStep = utils.randomNumber(MIN_PROGRESS_STEP_NUMBER, MAX_PROGRESS_STEP_NUMBER);
    progressStep = progressStep === 0 ? progressStep + MAX_PROGRESS_STEP_NUMBER : progressStep;

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
