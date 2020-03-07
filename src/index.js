// @ts-check
import readlineSync from 'readline-sync';
import colors from 'colors';

const roundsCount = 3;

const mapTexts = {
  welcome: () => 'Welcome to the Brain Games!',
  name: () => 'May I have your name? ',
  greet: (name) => `Hello, ${name}!`,
  question: (body) => `Question: ${body}`,
  answer: () => 'Your answer: ',
  correct: () => 'Correct!',
  wrong: (wrongAnswer, correctAnswer) => `${colors.red(`"${wrongAnswer}"`)} is wrong answer ${colors.bold(';(')}. Correct answer was ${colors.red(`"${correctAnswer}"`)}.`,
  replay: (name) => `Let${colors.red(`'s try again, ${name}!`)}`,
  win: (name) => `Congratulations, ${name}!`,
};

const print = (message) => {
  console.log(message);
};

const ask = (question) => readlineSync.question(question);

const run = (userName, generateRound) => {
  for (let i = 0; i < roundsCount; i += 1) {
    const round = generateRound();
    const {
      answer: roundAnswer,
      question: roundQuestion,
    } = round;

    print(mapTexts.question(roundQuestion));

    const userAnswer = ask(mapTexts.answer());

    if (userAnswer !== roundAnswer) {
      print(mapTexts.wrong(userAnswer, roundAnswer));
      print(mapTexts.replay(userName));
      return;
    }
  }

  print(mapTexts.win(userName));
};

const play = (task, generateRound) => {
  print(mapTexts.welcome());

  const userName = ask(mapTexts.name());

  print(mapTexts.greet(userName));

  print(task);

  run(userName, generateRound);
};

export default play;
