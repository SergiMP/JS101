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