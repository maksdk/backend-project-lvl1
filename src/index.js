// @ts-check
/* eslint-disable */
import readlineSync from 'readline-sync';
import colors from "colors";

const STATES = {
	GREET: 'greet',
	TASK: 'task',
	ROUND: 'round',
	WRIGHT: 'wright',
	LOST: 'lost',
	WON: 'won'
};

/**
 * @param {Object} params 
 * @param {string} params.task 
 * @param {Object[]} params.rounds 
 * @param {string} params.rounds.answer 
 * @param {string} params.rounds.question 
 */
const game = (params) => {

	const initialState = {
		currentState: 'greet',
		name: '',
		answer: '',
		currentRoundIndex: 0,
		...params
	};

	function gameLoop(state) {
		const { currentState, name, currentRoundIndex, rounds, answer, task } = state;

		switch(currentState) {

			case STATES.GREET:
				console.log('Welcome to the Brain Games!') ;
				const userName = readlineSync.question('May I have your name? ');
				console.log(`Hello, ${userName}!`);
				state.name = userName;
				state.currentState = STATES.TASK;
				gameLoop(state);
				break;

			case STATES.TASK:
				console.log(task);
				state.currentState = STATES.ROUND;
				gameLoop(state);
				break;

			case STATES.ROUND:
				const { question, answer: roundAnswer } = rounds[currentRoundIndex];

				console.log(`Question: ${question}`);
				const userAnswer = String(readlineSync.question('Your answer: '));
				
				if (userAnswer === roundAnswer) {
					state.currentState = STATES.WRIGHT;
				}
				else {
					state.currentState = STATES.LOST;
					state.answer = userAnswer;
				}
				gameLoop(state);
				break;
				
			case STATES.WRIGHT:
				console.log(`Correct!`);
				state.currentRoundIndex += 1;
				if (state.currentRoundIndex >= rounds.length) {
					state.currentState = STATES.WON;
				}
				else {
					state.currentState = STATES.ROUND;
				}
				gameLoop(state);
				break;
			
			case STATES.LOST:
				const {answer: wrightAnswer} = rounds[currentRoundIndex];
				console.log(`${colors.red(`"${answer}"`)} is wrong answer ${colors.bold(';(')}. Correct answer was ${colors.red(`"${wrightAnswer}"`)}.`)
				console.log(`Let${colors.red(`'s try again, ${name}!`)}`);
				break;

			case STATES.WON:
				console.log(`Congratulations, ${name}!`);
				break;

			default: 
				throw `Such state: ${currentState} is not found`;
		}
	}

	gameLoop(initialState);
};


export default game;
