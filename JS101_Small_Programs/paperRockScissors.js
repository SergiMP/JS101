/* eslint-disable no-nested-ternary */
const readSync = require("readline-sync");


const bannerizeInput = (text) => {
  let topLine = ["*"];
  for (let int = 0; int <= text.length + 1; int++ ) {
    topLine.push("-");
  }
  topLine.push("*");
  topLine = topLine.join("");
  let fillerLine = topLine.replace(/\*/g,"|").replace(/-/g," ");
  let textLine = `| ${text} |`;
  return ` ${topLine}\n ${fillerLine}\n ${textLine.replace(/\n/g,'')}\n ${fillerLine}\n ${topLine}`;
};


const possibleChoices =
{ rock : "rock", 1 : "rock", r : "rock",
  paper : "paper", 2 : "paper", p : "paper",
  scissors : "scissors", 3 : "scissors", s : "scissors"};

const declareWinner = (inputA,inputB) => {
  let pc = possibleChoices;
  inputA = inputA.toLowerCase();
  let playerWins = pc[inputA] === ("rock" && pc[inputB] === "scissors") ||
      (pc[inputA] === "scissors" && pc[inputB] === "paper") ||
      (pc[inputA] === "paper" && pc[inputB] === "rock");

  if (pc[inputB] === pc[inputA]) {
    return "Draw Game";
  } else if (playerWins) {
    return "You Win";
  } else {
    return "You lose";
  }

};

const invalidInput = (input) => {
  return !(Object.keys(possibleChoices).includes(input.toLowerCase()));
};

const validKeys = [...new Set(Object.values(possibleChoices))];
const computerChoice = validKeys[Math.floor(Math.random()) * validKeys.length ];

const  quitGame = ['no','n','nope','bye'];
const keepGame = ['yes','y','yas'];

const invalidReply = (input) => {
  return ![...quitGame,...keepGame].includes(input);
};

console.log(bannerizeInput("Welcome to this simple Paper Rock Scissors game!"));
console.log(`The following options are available to select a move: `);
console.log(`Rock => Type 1, rock, or r `);
console.log(`Paper => Type 2, paper, or p `);
console.log(`Scissors => Type 3, scissors, or s `);


while ( true ) {

  let userChoice = readSync.question(`Please make your choice => `);

  while (invalidInput(userChoice)) {
    userChoice = readSync.question(
      `Sorry, that doesn't seem a valid choice, please try again => `
    );
  }


  console.log(`You chose ${possibleChoices[userChoice]} and the computer chose ${computerChoice} => ${declareWinner(userChoice,computerChoice)}`);

  let playAgain = readSync.question(`=> Want to play another game? `);

  while (invalidReply(playAgain)) {
    playAgain = readSync.question(`=> Sorry I didn't understand...Want to play another game? `);
  }

  if (quitGame.includes(playAgain)) {
    console.clear();
    console.log(bannerizeInput("Thanks for playing! "));
    break;
  }

  console.clear();

}
