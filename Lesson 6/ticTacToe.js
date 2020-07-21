"use strict";
let readsync = require("readline-sync");

let p = { 1: "1", 2: "2", 3:"3", 4:"4", 5:"5", 6:"6", 7:"7", 8:"8", 9: "9"}

let initializeBoard = () => {
    let keys = Array.from(Array(10).keys()).slice(1);
    let board = {};
    keys.forEach(key => result[key]= "");
    return board;
}

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

let availableMoves = Object.keys(p);

let isValidMove = (move) => availableMoves.includes(move);

let displayMoves = () => `=> Please select one of the available moves: ${availableMoves.join(",")} `;

let playerMove = readsync.question(`${displayMoves()}`);

while (!(isValidMove(playerMove))) {
    console.log(`Sorry, that is not a valid move`);
    playerMove = readsync.question(`${displayMoves()}`);
}

console.log(threeBythreeBoard());
//console.log(displayMoves());                            
