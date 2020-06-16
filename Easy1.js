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

/*Re-using the previous function.
Commented this one out to avoid having issues with redeclaring the same
variable twice

let oddNumbers = (int) => [...Array(int + 1).keys()]
                         .filter(isOdd)
                         .forEach(x => console.log(x));

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

/*
Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. 
You can ignore input validation and assume that the user will enter numbers.
*/

let bill = readlineSync.question("What is the bill amount?: ");
let tipPercentage = readlineSync.question("What is the tip percentage?: ");
let tip = bill * (tipPercentage/100);
console.log(`The tip is ${tip}`);
console.log(`The total is $${Number(bill)+Number(tip)}`);

/*
Write a program that asks the user to enter an integer greater than 0, then asks whether the user 
wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.
*/

let number = readlineSync.question("Please enter an integer greater than 0: ");
let sumOrProd = readlineSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

// We need to remove the first element which will be zero for the product function to work.
let arraynumbers = [...Array(Number(number)+1).keys()].slice(1);

let sumNumbers = (array) => array.reduce((acc,x)=> acc + x, 0);
let multNumbers = (array) => array.reduce((acc,x)=> acc * x, 1);

let userdecision = sumOrProd.toLowerCase() === 's' ? sumNumbers(arraynumbers) : multNumbers(arraynumbers);
console.log(userdecision);