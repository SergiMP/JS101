/*
Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absolute value is odd. 
You may assume that the argument is a valid integer value.
*/

let isOdd = (int) => int % 2 !== 0;

/*
Log all odd numbers from 1 to 99, inclusive, to the console. 
Log all numbers on separate lines.
*/

let oddNumbers = (int) => [...Array(int + 1).keys()].slice(1)
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

let evenNumbers = (int) => [...Array(int + 1).keys()].slice(1)
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

/*
Write a function that takes two strings as arguments, determines the longer of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. 
You may assume that the strings are of different lengths.
*/

let shortLongShort = (a,b) =>  a.length < b.length ? a+b+a : b+a+b;

/*
In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. 
If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input, 
and returns true if the year is a leap year, or false if it is not a leap year.
*/

let isLeapYear = (year) =>{
    return year % 4 === 0 && (!(year % 100 === 0) || (year % 400 ===0));
}

/*
The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. Prior to 1752, they used the Julian Calendar. Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.

Using this information, update the function from the previous exercise to determine leap years both before and after 1752.
*/

let JulianGregorianLeapYear = (year) =>{
    let gregorian = year % 4 === 0 && (!(year % 100 === 0) || (year % 400 ===0));
    let julian = year % 4 === 0;
    return year > 1752 ? gregorian : julian;
}

/*
Write a function that computes the sum of all numbers between 1 and some other number, 
inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20,
 the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).
You may assume that the number passed in is an integer greater than 1.

Examples:
*/

let multisum = (number) =>{
    let numbers = [...Array(number +1).keys()];
    return numbers.filter( x => x % 3 === 0 || x % 5 === 0).reduce((acc,x)=> acc + x,0);
}

/*
Write a function that determines and returns the ASCII string value of a string passed in as an argument. 
The ASCII string value is the sum of the ASCII values of every character in the string. 
(You may use String.prototype.charCodeAt() to determine the ASCII value of a character.)
asciiValue('Four score'); //// 984
*/

let asciiValue = (word) => word.split("").map(x => x.charCodeAt(0))
                                         .reduce((acc,x)=> acc +x,0);

