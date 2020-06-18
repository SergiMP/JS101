/*
Write a function that takes a string, doubles every character in the string, 
and returns the result as a new string.

Examples:

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');
*/

let repeater = (word) => word.split("").map(x => x + x).join("");

/*
Write a function that takes a string, doubles every consonant character in the string, 
and returns the result as a new string. The function should not double vowels 
('a','e','i','o','u'), digits, punctuation, or whitespace.

Examples:

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants(''); 
*/

let doubleConsonants = (word) => word.split("").map(x => /[^aeiou\s\W]/gi.test(x) ? x + x : x).join("");

/*
Write a function that takes a positive integer as an argument, and returns 
that number with its digits reversed.

Examples:

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);
*/

let reverseNumber = (number) => Number(String(number).split("").reverse().join(""));

/*
Write a function that takes a non-empty string argument, and returns the middle character(s) 
of the string. If the string has an odd length, you should return exactly one character. 
If the string has an even length, you should return exactly two characters.

Examples:

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x'); 
*/

let centerOf = (word) => word.length % 2 === 0 ? word[(word.length-1)/2 - 0.5] + word[(word.length-1)/2 +0.5] :
                         word.length === 1 ? word : word[(word.length-1)/2];

/*
Write a function that takes a number as an argument. If the argument is a positive number, return the negative of that number. If the argument is a negative number, return it as-is.

Examples:

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0
*/

let negative = (number) => number < 0 ? number : -number;

/*
Write a function that takes an integer argument, and returns an array containing 
all integers between 1 and the argument (inclusive), in ascending order.

You may assume that the argument will always be a positive integer.

Examples:

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1); 
*/

let sequence = (number) => [...Array(number + 1).keys()].slice(1);

/*
Write a function that takes a string argument consisting of a first name, 
a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.

Examples:

swapName('Joe Roberts');    // "Roberts, Joe"
*/

let swapName =(name) => name.split(" ").reverse().join(" ");

/*
Create a function that takes two integers as arguments. The first argument is a count, and the second is 
the starting number of a sequence that your function will create. The function should return an array containing 
the same number of elements as the count argument. The value of each element should be a multiple of the starting number.

You may assume that the count argument will always be an integer greater than or equal to 0. 
The starting number can be any integer. If the count is 0, the function should return an empty array.

Examples:

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []
*/

//I couldn't figure out a way of doing this one using FP
let sequence = (size,number) => {
    let array = [...Array(size +1).keys()].slice(1);
    let accum = number;
    for(let i =0;i < array.length;i++){
        array[i] = accum;
        accum += number;
    }
    return array;
}

/*
Write a function that takes a string argument, and returns a new string containing the words from the string argument in reverse order.

Examples:

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words'); 
*/

let reverseSentence = (words) => words.split(" ").reverse().join(" ");

/*
Write a function that takes a string argument containing one or more words, 
and returns a new string containing the words from the string argument. 
All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces. Words will be separated by a single space.

Examples:

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School'); 
*/

let reverseWords = (words) => words.split(" ")
                              .map(x => x.length >= 5? x.split("").reverse().join("") : x)
                              .join(" ");