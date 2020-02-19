// @ts-check
/* eslint-disable */
import readlineSync from 'readline-sync';

const STATES = {
	GREET: 'greet',
	TASK: 'task',
	ROUND: 'round',
	WRIGHT: 'wright',
	LOST: 'lost',
	WON: 'won'
};

const game = () => {
	const initialState = {
		currentState: 'greet',
		name: '',
		answer: '',
		currentRoundIndex: 0,
		rounds: [
			{ answer: 'no', number: 15 }, 
			{ answer: 'yes', number: 6 }, 
			{ answer: 'no', number: 7 }
		]
	};

	function gameLoop(state) {
		const { currentState, name, currentRoundIndex, rounds, answer } = state;

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
				console.log('Answer %c"yes" %cif %cthe number is even, otherwise answer %c"no".', 'color: red', 'font: bold 1.05em/1 Arial; color: black', 'font: 1em', 'color:red');
				state.currentState = STATES.ROUND;
				gameLoop(state);
				break;

			case STATES.ROUND:
				const { number, answer: roundAnswer } = rounds[currentRoundIndex];

				console.log(`Question: ${number}`);
				const userAnswer = readlineSync.question('Your answer: ');
				
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
				console.log(`%c"${answer}" %cis wrong answer %c;(. %cCorrect answer was %c"${wrightAnswer}".`, 'color:red','font: 1em', 'font:bold 1.05em/1 Arial', 'font: 1em','color: red')
				// console.log(`"${answer}" is wrong answer ;(. Correct answer was "${wrightAnswer}"`);
				console.log(`Let%c's try again, ${name}!`, 'color:red');
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
