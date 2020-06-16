/*
Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absolute value is odd. 
You may assume that the argument is a valid integer value.
*/

let isOdd = (int) => int % 2 !== 0;

/*
Log all odd numbers from 1 to 99, inclusive, to the console. 
Log all numbers on separate lines.
*/

let oddNumbers = (int) => [...Array(int + 1).keys()]
                           .filter(x => x % 2 !== 0)
                           .forEach(x => console.log(x));

//Re-using the previous function.
let oddNumbers = (int) => [...Array(int + 1).keys()]
                         .filter(isOdd)
                         .forEach(x => console.log(x));

/*
Log all even numbers from 1 to 99, inclusive, to the console. 
Log all numbers on separate lines.
*/

let evenNumbers = (int) => [...Array(int + 1).keys()]
                           .filter(x => x % 2 === 0)
                           .forEach(x => console.log(x));

/*
Build a program that asks the user to enter the length and width of a room in meters, 
and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. 
Use the readlineSync.prompt method to collect user input.
*/

let readlineSync = require('readline-sync');
let length = readlineSync.question("Please enter the length of the room. ");
let width = readlineSync.question("Please enter the width of the room. ");
console.log(`The are of the room is ${length*width}: ${((length*width)*10.7639)}`);