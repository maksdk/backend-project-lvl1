// @ts-check
/* eslint-disable */

import game from "../index.js";

const operations = {
    "*": (num1, num2) => {
        return num1 * num2;
    },
    "+": (num1, num2) => {
        return num1 + num2;
    },
    "-": (num1, num2) => {
        return num1 - num2;
    }
};

const randomNumber = (min, max) => {
    return Math.floor(min + Math.random() * (max - min + 1));
};

const buildRounds = () => {
    const operationsNames = Object.keys(operations);
    const rounds = [];
    
    for(let i = 0; i < 3; i++) {
        const num1 = randomNumber(0, 99);
        const num2 = randomNumber(0, 99);
        const operationName = operationsNames[randomNumber(0, operationsNames.length - 1)];
        const operation = operations[operationName];

        const question = `${num1} ${operationName} ${num2}`;
        const answer = String(operation(num1, num2));
        
        rounds.push({ answer, question });
    }

    return rounds;
};

const rounds = buildRounds();
const task = `What is the result of the expression?`;

game({ rounds, task });
