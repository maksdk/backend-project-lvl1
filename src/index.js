// @ts-check
import readlineSync from 'readline-sync';
import colors from 'colors';

const mapTexts = {
	welcome: () => 'Welcome to the Brain Games!',
	name: () => 'May I have your name? ',
	greet: (name) => `Hello, ${name}!`,
	question: (body) => `Question: ${body}`,
	answer: () => 'Your answer: ',
	correct: () => 'Correct!',
	wrong: (wrongAnswer, correctAnswer) => `${colors.red(`"${wrongAnswer}"`)} is wrong answer ${colors.bold(';(')}. Correct answer was ${colors.red(`"${correctAnswer}"`)}.`,
	tryAgain: (name) => `Let${colors.red(`'s try again, ${name}!`)}`,
	win: (name) => `Congratulations, ${name}!`
};

const print = (message) => {
	console.log(message);
};

const ask = (question) => String(readlineSync.question(question));

const gameLoop = (rounds, userName, currentRoundIndex) => {
	const round = rounds[currentRoundIndex];

	const {
		answer: roundAnswer,
		question: roundQuestion
	} = round;

	print(mapTexts.question(roundQuestion));

	const userAnswer = ask(mapTexts.answer());
	
	if (userAnswer === roundAnswer) {
		const nextRoundIndex = currentRoundIndex + 1;
		
		if (nextRoundIndex >= rounds.length) {
			print(mapTexts.win(userName));
		} else {
			gameLoop(rounds, userName, nextRoundIndex);
		}
	} else {
		print(mapTexts.wrong(userAnswer, roundAnswer));
		print(mapTexts.tryAgain(userName));
	}
};

const game = (rounds, task) => {
	const initRoundIndex = 0;

	print(mapTexts.welcome());

	const userName = ask(mapTexts.name());

	print(mapTexts.greet(userName));

	print(task);

	gameLoop(rounds, userName, initRoundIndex);
};

export default game;
