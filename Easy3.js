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