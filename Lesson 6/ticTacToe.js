"use strict";
let readsync = require("readline-sync");

const MATCH_GAME = 5;

/****Board related functions *****/
let boardValues = { 1: "1", 2: "2", 3:"3",
  4:"4", 5:"5", 6:"6", 7:"7", 8:"8", 9: "9"};


let initializeBoard = () => {
  let keys = Array.from(Array(10).keys()).slice(1);
  let board = {};
  for (let idx = 1; idx <= keys.length; idx++) {
    board[idx] = String(idx);
  }
  return board;
};

const symbols = ["X","O"];

let threeBythreeBoard = () => `
                              |   | 
                            ${boardValues['1']} | ${boardValues['2']} | ${boardValues['3']}
                           ___|___|___ 
                              |   |
                            ${boardValues['4']} | ${boardValues['5']} | ${boardValues['6']}
                           ___|___|___
                              |   |
                            ${boardValues['7']} | ${boardValues['8']} | ${boardValues['9']}
                              |   | 
                           `;

let displayBoard = (board) => {
  console.clear();
  console.log(board);
};


function updateBoard(move,symbol) {

  boardValues[move] = symbol;

}


/******** Moves related functions ********/

let remainingMoves = Object.keys(boardValues);

let emptyBoard = () => remainingMoves.length === 0;

let joinOr = (arr, delimiter = ",", word = 'or') => {
  let last = arr.slice().pop();
  return `${arr.slice(0,-1).join(delimiter)} ${word} ${last}`;
};

let displayMoves = () => `=> Please select one of the available moves: ${joinOr(remainingMoves)} `;

let isValidMove = (move) => remainingMoves.includes(move);

let availableMoves = (move) => remainingMoves.filter(x => x !== move);

/**** Winning Functions ****/

let winningCombinations = [[1,2,3],[4,5,6],[7,8,9],
  [1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

let winner = (array,symbol) => {
  return array.map(subarray =>
    subarray.every(x => boardValues[x] === symbol)).includes(true);
};


/**** Symbol and choice functions *****/

let userSymbol = readsync.question(`=> Please make your choice... X or O ? `).trim().toUpperCase();

while ( !symbols.includes(userSymbol) ) {
  console.log("Not a valid symbol...at least yet...");
  userSymbol = readsync.question(`=> Please make your choice... X or O ? `).trim().toUpperCase();
}

let computerSymbol = symbols.filter(x => x !== userSymbol);

let playerchoice = () => {

  let playerMove = readsync.question(`${displayMoves()}`);

  while (!(isValidMove(playerMove))) {
    console.log(`Sorry, that is not a valid move`);
    playerMove = readsync.question(`${displayMoves()}`);
  }

  return playerMove;

};

// Basic algorithm

// let computerChoice = () => {
//   return remainingMoves[Math.floor(Math.random() * availableMoves.length)];
// };

// The computer analyzes the winning combinations,
// and selects the first that is one move away
// to win.

let analyzeBoard = () => winningCombinations.map(subarray =>
  subarray.filter( x => boardValues[x] !== userSymbol)
    .filter( x => boardValues[x] !== computerSymbol))
  .filter(x => x.some( _val => true))
  .filter(x => x.length === 1);

let computerDecision = (array) => {
  let elem = array.flat().shift();
  if (elem) {
    return boardValues[elem];
  } else {
    return boardValues[Math.floor(Math.random() * remainingMoves.length)];
  }

};


let playerScore = 0;
let computerScore = 0;

function resetScores() {
  playerScore = 0;
  computerScore = 0;
}

/******* Main Game Loop ********/

while (true) {
  while (!emptyBoard()) {

    displayBoard(threeBythreeBoard());

    let move = playerchoice();

    updateBoard(move,userSymbol);

    if (winner(winningCombinations,userSymbol)) {
      displayBoard(threeBythreeBoard());
      playerScore += 1;
      if (playerScore === MATCH_GAME) {
        console.log("Player won the competition");
        resetScores();
        break;
      }
      console.log("Player Won this round");
      break;
    }

    remainingMoves =  availableMoves(move);

    let compMove = computerDecision(analyzeBoard());
    // let compMove = computerChoice();


    updateBoard(compMove,computerSymbol);

    if (winner(winningCombinations,computerSymbol)) {
      displayBoard(threeBythreeBoard());
      computerScore += 1;
      if (computerScore === MATCH_GAME) {
        console.log("The computer won the competition");
        resetScores();
        break;
      }
      console.log("Computer Won");
      break;
    }

    remainingMoves = availableMoves(compMove);
    console.log(displayBoard(threeBythreeBoard()));

    if (emptyBoard()) {
      console.log("Draw Game");
      break;
    }

  }


  setTimeout(() => {
    console.clear();
    console.log("Thanks for playing this game.");
    setTimeout(() => console.clear(),1000);
  },1000);

  let playAgain = readsync.question("Would you like to play again? ")
    .trim()
    .toLowerCase();

  while (!(['yes','y','yas','no','n','nope'].includes(playAgain)) ) {
    console.log("Sorry I didn't understand, please try again.");
    playAgain = readsync.question("Would you like to play again? ")
      .toLowerCase();
  }

  if (['no','n','nope'].includes(playAgain))  break;


  boardValues = initializeBoard();
  remainingMoves = Object.keys(boardValues);

}

