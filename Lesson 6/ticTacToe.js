"use strict";
let readsync = require("readline-sync");

/****Board related functions *****/
let boardValues = { 1: "1", 2: "2", 3:"3",
  4:"4", 5:"5", 6:"6", 7:"7", 8:"8", 9: "9"};


let initializeBoard = () => {
  let keys = Array.from(Array(10).keys()).slice(1);
  let board = {};
  for (let idx = 1; idx < keys.length; idx++) {
    boardValues[idx] = String(idx);
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

let displayMoves = () => `=> Please select one of the available moves: ${remainingMoves.join(",")} `;

let isValidMove = (move) => remainingMoves.includes(move);

let availableMoves = (move) => remainingMoves.filter(x => x !== move);

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

let computerChoice = () => {
  return remainingMoves[Math.floor(Math.random() * availableMoves.length)];
};

/**** Winning Functions ****/

let winningCombinations = [[1,2,3],[4,5,6],[7,8,9],
  [1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

let winner = (array,symbol) => {
  return array.map(subarray =>
    subarray.every(x => boardValues[x] === symbol)).includes(true);
};

/******* Main Game Loop ********/
while (true) {
  while (!emptyBoard()) {

    displayBoard(threeBythreeBoard());

    let move = playerchoice();

    updateBoard(move,userSymbol);

    if (winner(winningCombinations,userSymbol)) {
      displayBoard(threeBythreeBoard());
      console.log("Player Won");
      break;
    }


    remainingMoves =  availableMoves(move);

    let compMove = computerChoice();

    updateBoard(compMove,computerSymbol);

    if (winner(winningCombinations,computerSymbol)) {
      displayBoard(threeBythreeBoard());
      console.log("Computer Won");
      break;
    }

    if (emptyBoard()) break;

    remainingMoves = availableMoves(compMove);

    console.log(displayBoard(threeBythreeBoard()));

  }

  if (emptyBoard()) console.log("Draw Game...");

  setTimeout(() => {
    console.clear();
    console.log("Thanks for playing this game.");
    setTimeout(() => console.clear(),1000);
  },1000);

  let playAgain = readsync.question("Would you like to play again? ")
    .toLowerCase();

  if (['yes','y','yas'].includes(playAgain)) {
    initializeBoard();
    remainingMoves = Object.keys(boardValues);
  } else {
    break;
  }

}