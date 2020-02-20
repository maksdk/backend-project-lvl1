// @ts-check
/* eslint-disable */

import game from "../index.js";
import colors from 'colors';

const task = `Answer ${colors.red('"yes"')} ${colors.bold("if")} the number is even, otherwise answer ${colors.red('"no"')}${colors.blue(".")}`;
const rounds = [
    { question: '15', answer: 'no' },
    { question: '6', answer: 'yes' },
    { question: '7', answer: 'no' }
];

export default () => game({ rounds, task });