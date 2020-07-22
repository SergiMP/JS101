"use strict";
let readsync = require("readline-sync");

/****Board related functions *****/
let p = { 1: "1", 2: "2", 3:"3", 4:"4", 5:"5", 6:"6", 7:"7", 8:"8", 9: "9"}

let initializeBoard = () => {
    let keys = Array.from(Array(10).keys()).slice(1);
    let board = {};
    keys.forEach(key => result[key]= "");
    return board;
}

const symbols = ["X","O"];

let threeBythreeBoard = () => `
                              |   | 
                            ${p['1']} | ${p['2']} | ${p['3']}
                           ___|___|___ 
                              |   |
                            ${p['4']} | ${p['5']} | ${p['6']}
                           ___|___|___
                              |   |
                            ${p['7']} | ${p['8']} | ${p['9']}
                              |   | 
                           `;

let displayBoard = (board) => {
  console.clear();
  console.log(board)
}

let updateBoard = (move,symbol) => p[move] = symbol;
let emptyBoard = () => remainingMoves.length === 0;

/******** Moves related functions ********/

let remainingMoves = Object.keys(p);

let displayMoves = () => `=> Please select one of the available moves: ${remainingMoves.join(",")} `;

let isValidMove = (move) => remainingMoves.includes(move);

let availableMoves = (move) => remainingMoves.filter(x => x !== move);

/**** Symbol and choice functions *****/

let userSymbol = readsync.question(`=> Please make your choice... X or O ? `).trim().toUpperCase();

while ( !symbols.includes(userSymbol) ){
  console.log("Not a valid symbol...at least yet...");
  userSymbol = readsync.question(`=> Please make your choice... X or O ? `).trim().toUpperCase();                                      
};

let computerSymbol = symbols.filter(x => x !== userSymbol);

let playerchoice = () => {

  let playerMove = readsync.question(`${displayMoves()}`);

  while (!(isValidMove(playerMove))) {
      console.log(`Sorry, that is not a valid move`);
      playerMove = readsync.question(`${displayMoves()}`);
  }

  return playerMove;

}

let computerChoice = () => {
  return remainingMoves[Math.floor(Math.random() * availableMoves.length)];
}

/**** Winning Functions ****/




/******* Main Game Loop ********/

while (!emptyBoard()) {
  let move = playerchoice();

  updateBoard(move,userSymbol);

  remainingMoves =  availableMoves(move);

  let compMove = remainingMoves[Math.floor(Math.random() * availableMoves.length)];

  updateBoard(compMove,computerSymbol);

  remainingMoves =  availableMoves(compMove);

  console.log(displayBoard(threeBythreeBoard()));

}

                          
