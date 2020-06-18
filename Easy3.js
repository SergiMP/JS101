/*
Write a function that takes a string argument and returns a new string that contains the value of 
the original string with all consecutive duplicate characters collapsed into a single character.

Examples:

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
*/

let crunch = (string) =>{
    let array = string.split("")
    let idx =0;
    let result = [];
    while(idx < array.length){
        if(array[idx] !== array[idx+1]){
            result.push(array[idx])
        }
        idx += 1;
    }
    return result.join("");
}

/*
Write a function that will take a short line of text, and write it to the console log within a box.

Examples:

logInBox('To boldly go where no one has gone before.');

will log on the console:

+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

logInBox('');
+--+
|  |
|  |
|  |
+--+
*/

let logInBox = (string) =>{
    let topLine = ["*"];
    let filler = ["|"];
    let encased = `| ${string}  |`
    for(let i =0; i<= string.length + 2; i++){
       topLine.push("-");
       filler.push(" ");
    }
    topLine.push("*")
    filler.push("|")
    console.log(topLine.join(""));
    console.log(filler.join(""));
    console.log(encased);
    console.log(filler.join(""));
    console.log(topLine.join(""));
}

/*
Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, 
always starting with a '1'. The length of the string should match the given integer.

Examples:

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

*/

let stringy = (int) => [...Array(int).keys()].map((elem,idx)=>idx %2 ==0? "1":"0").join("");

/*
The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that the first two numbers are 1 by definition, and each subsequent number is the sum of the two previous numbers.
This series appears throughout the natural world.

Computationally, the Fibonacci series is a simple series, but the results grow at an incredibly rapid rate. 
For example, the 100th Fibonacci number is 354,224,848,179,261,915,075—that's enormous, especially considering that it takes six iterations just to find the first 2-digit Fibonacci number.

Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. 
(The first Fibonacci number has an index of 1.)

You may assume that the argument is always an integer greater than or equal to 2.

Examples:

findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74
*/
// Don't try any higher values until you read the solution Discussion

// This solution doesn't use recursion or memoization just to follow the instructions.

let findFibonacciIndexByLength = (num) =>{
    let container = ["0","1","1"]
    let idx = 0;
    let first = 1;
    let second = 1;
    let fibonaccinumber = first + second;
    while(container[idx].length !== num){
        container.push(String(fibonaccinumber));
        first = second;
        second = fibonaccinumber;
        fibonaccinumber = first + second;
        idx += 1;
    }
    return idx;
}

/*
Write a function that takes a positive integer, n, as an argument, and logs a right triangle 
whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.

Examples:

triangle(5);

    *
   **
  ***
 ****
*****

*/

let triangle = (number)=>{
    // There are n lines of n size.
    // Create an array of size n
    // Iterate through the array and replace content by idx
    //  create a variable delimiter = 1
    // if idx < arr.length - delimiter ? " " : "*"
    // iterate and modify the value of delimiter at each iteration
    let array = [...Array(number + 1).keys()];
    let delimiter = 1;
    while(delimiter !== array.length){
        for(let i =0;i < array.length;i++){
            i < array.length - delimiter ? array[i] = " " : array[i] = "*";
        }
        console.log(array.join(""));
        delimiter += 1;
    }

}

/*
A double number is an even-length number whose left-side digits are exactly the same as 
its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, 
whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by two, 
unless the argument is a double number; return double numbers as-is.

Examples:

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676

*/

// If the number is of odd length, we need to  multiply it
// if the number is even we need to create two slices
// the first, from 0 to arr.length , the second from arr.length + 1
// we then need to check that every single digit from one, is on the other.

let twice = (number) =>{
    let digits = String(number).length;
    if(digits % 2 !== 0){
         return number * 2;
        }else{
            let first = String(number).split("").slice(0,digits/2).join("");
            let second = String(number).split("").slice(digits/2).join("");
            return first === second ? number : number * 2;
        }
}

/*
Given a string that consists of some words and an assortment of non-alphabetic characters, 
write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

Example:

cleanUp("---what's my +*& line?");    // " what s my line "
*/

let cleanUp = (word) => word.split("").map(x =>/[a-z]/i.test(x) ? x : " ").join("")
                                      .replace(/  +/g," ")