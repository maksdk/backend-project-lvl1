// @ts-check
import readlineSync from 'readline-sync';
import colors from 'colors';

const STATES = {
	GREET: 'greet',
	TASK: 'task',
	ROUND: 'round',
	WRIGHT: 'wright',
	FAILED: 'failed',
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
		const {
			currentState,
			name,
			rounds,
			answer,
			task
		} = state;

		let { currentRoundIndex } = state;

		let userName;
		let userAnswer;

		switch (currentState) {
		case STATES.GREET:
			console.log('Welcome to the Brain Games!');
			userName = readlineSync.question('May I have your name? ');
			console.log(`Hello, ${userName}!`);

			gameLoop({ ...state, name: userName, currentState: STATES.TASK });
			break;

		case STATES.TASK:
			console.log(task);

			gameLoop({ ...state, currentState: STATES.ROUND });
			break;

		case STATES.ROUND:
			console.log(`Question: ${rounds[currentRoundIndex].question}`);
			userAnswer = String(readlineSync.question('Your answer: '));
			
			if (userAnswer === rounds[currentRoundIndex].answer) {
				gameLoop({ ...state, currentState: STATES.WRIGHT });
			} else {
				gameLoop({ ...state, currentState: STATES.FAILED, answer: userAnswer });
			}
			break;
			
		case STATES.WRIGHT:
			console.log('Correct!');

			currentRoundIndex += 1;

			if (currentRoundIndex >= rounds.length) {
				gameLoop({ ...state, currentRoundIndex, currentState: STATES.WON });
			} else {
				gameLoop({ ...state, currentRoundIndex, currentState: STATES.ROUND });
			}
			break;
		
		case STATES.FAILED:
			console.log(`${colors.red(`"${answer}"`)} is wrong answer ${colors.bold(';(')}. Correct answer was ${colors.red(`"${rounds[currentRoundIndex].answer}"`)}.`);
			console.log(`Let${colors.red(`'s try again, ${name}!`)}`);
			break;

		case STATES.WON:
			console.log(`Congratulations, ${name}!`);
			break;

		default:
			throw new Error(`Such state: ${currentState} is not found`);
		}
	}

	gameLoop(initialState);
};


export default game;
