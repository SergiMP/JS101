let readlineSync = require('readline-sync');
/*
Create a function that takes 2 arguments, an array and an object. The array will contain 2 or more elements that, 
when combined with adjoining spaces, will produce a person's name. 
The object will contain two keys, "title" and "occupation", and the appropriate values. 
Your function should return a greeting that uses the person's full name, and mentions the person's title.
Example:
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.
*/

let greetings = (array, object) =>{
    return `Hello, ${array.join(" ")}! Nice to have a ${object.title} ${object.occupation}`;
}

/*


Write a program that will ask for user's name. The program will then greet the user. 
If the user writes "name!" then the computer yells back to the user.

Examples

What is your name? Bob
Hello Bob.

What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?

*/
let word = readlineSync.question("Hey, what is your name?");
let answer = word.includes("!") ? `Hello ${word}` :`HELLO ${word.toUpperCase()} WHY ARE WE SCREAMING`;
console.log(answer);

/*


Write a program that prompts the user for two positive integers, 
and then prints the results of the following operations on those two numbers: 
addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.

Example

==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 141050039560662968926103
*/

let first = Number(readlineSync.question("Please enter the first number: "));
let second = Number(readlineSync.question("Please enter the second number: "));
let operations = (a, operator, b) => {
                switch (operator) {
                case "+":
                     console.log(`==> a + b = ${a + b}`);
                case "-":
                    console.log(`==> a - b = ${a - b}`);
                case "*":
                    console.log(`==> a * b = ${a * b}`);
                case "/":
                    console.log(`==> a / b = ${a / b}`);
                case "%":
                    console.log(`==> a % b = ${a % b}`);
                case "**":
                    console.log(`==> a ** b = ${a ** b}`);
                }
            }

operations(first,"+",second);

/*
The End Is Near But Not Here

Write a function that returns the next to last word in the String passed to it as an argument.

Words are any sequence of non-blank characters.

You may assume that the input String will always contain at least two words.

Examples:

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
*/

let penultimate = (word) => {
        return word.split(" ")[word.split(" ").length-2];
}

/*
The || operator returns a truthy value if either or both of its operands are truthy, a falsey value if both operands are falsey. The && operator returns a truthy value if both of its operands are truthy, and a falsey value if either operand is falsey. This works great until you need only one of two conditions to be truthy, the so-called exclusive or.

In this exercise, you will write a function named xor that takes two arguments, and returns true if exactly one of its arguments is truthy, false otherwise.

Examples:

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);
*/
