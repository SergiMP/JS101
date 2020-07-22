"use strict";
let readsync = require("readline-sync");

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
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

let availableMoves = Object.keys(p);

let isValidMove = (move) => availableMoves.includes(move);

let userSymbol = readsync.question(`=> Please make your choice... X or O ? `);

while ( !symbols.includes(userSymbol) ){
  console.log("Not a valid symbol...at least yet...");
  userSymbol = readsync.question(`=> Please make your choice... X or O ? `).trim().toUpperCase();                                          
};

let computerSymbol = symbols.filter(x => x !== userSymbol);

while (availableMoves.length !== 0) {
let displayMoves = () => `=> Please select one of the available moves: ${availableMoves.join(",")} `;

let playerMove = readsync.question(`${displayMoves()}`);

while (!(isValidMove(playerMove))) {
    console.log(`Sorry, that is not a valid move`);
    playerMove = readsync.question(`${displayMoves()}`);
}

p[playerMove] = userSymbol;

availableMoves = availableMoves.filter(x => x !== playerMove);

let computerChoice = "";

while (computerChoice === ""){
  console.log(`Available moves for computer are ${availableMoves}`)
   computerChoice =availableMoves[Math.floor(Math.random() * availableMoves.length)];
   console.log(`Computer chose ${computerChoice}`);
}

p[computerChoice] = computerSymbol;

availableMoves = availableMoves.filter(x => x !== computerChoice);


console.log(displayBoard(threeBythreeBoard()));
}
                          
