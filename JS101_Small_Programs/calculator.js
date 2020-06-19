/*
Greet the user.
Ask the first number.
Ask the second number.
Perform the requested operation.
*/
const readSync = require("readline-sync");
const bannerize = (text) =>{
  let topLine = ["*"];
  for(let i =0;i <= text.length +1;i++){
      topLine.push("-")
  }
  topLine.push("*");
  topLine = topLine.join("");
  let fillerLine = topLine.replace(/\*/g,"|").replace(/-/g," ");
  let textLine = `| ${text} |`;
  return ` ${topLine}\n ${fillerLine}\n ${textLine}\n ${fillerLine}\n ${topLine}`
}

const add = (x,y) => x + y;
const substract = (x,y) => x - y;
const multiply = (x,y) => x * y;
const divide = (x,y) => x / y;

let operations ={"+": add, "-" : substract, "*" : multiply, "/": divide,
                 "add" : add, "substract" : substract, "multiply" : multiply, "divide" : divide,
                "1": add, "2": substract, "3": multiply, "4" : divide}


console.log(bannerize("Welcome to this calculator, you will be asked to enter two numbers one at a time."))

let firstNum = readSync.question("- Please enter your first number => ");
let secondNum = readSync.question("- Please enter your second number => ");

console.log("- To select your operation you can type the following: \n");
console.log("=> + - * / \n");
console.log("=> add substract multiply divide \n");
console.log("Or also:\n\n 1 for add\n 2 for substract\n 3 for multiply\n 4 for divide \n");

let operator = readSync.question("- Please enter your operator ").toLowerCase();

if(operator in operations){
    console.log(bannerize(`The result is ${operations[operator](firstNum,secondNum)} `));
}else{
    console.log("The operator is not recognized,please try again.")
    operator = readSync.question("- Please enter your operator ").toLowerCase();
}