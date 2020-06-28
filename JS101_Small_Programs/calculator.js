const readSync = require("readline-sync");
const messages = require("./languages.json");

//Declare and set output format function.
const bannerizeInput = (text) => {
  let topLine = ["*"];
  for (let int = 0; int <= text.length + 1; int++ ) {
    topLine.push("-");
  }
  topLine.push("*");
  topLine = topLine.join("");
  let fillerLine = topLine.replace(/\*/g,"|").replace(/-/g," ");
  let textLine = `| ${text} |`;
  return ` ${topLine}\n ${fillerLine}\n ${textLine.replace(/\n/g,'')}\n ${fillerLine}\n ${topLine}`;
};
//Declare and set mathematical functions
const add = (x,y) => x + y;
const substract = (x,y) => x - y;
const multiply = (x,y) => x * y;
const divide = (x,y) => x / y;
//Declare and set dictionary as commands : functions
let operations = {
  "+" : add, "-" : substract,
  "*" : multiply, "/" : divide,
  "add" : add, "substract" : substract,
  "multiply" : multiply, "divide" : divide,
  "sumar" : add, "restar" : substract,
  "multiplicar" : multiply, "dividir" : divide,
  "1" : add, "2" : substract, "3" : multiply, "4" : divide
};
//Declare while loop conditions, and helper function isInvalidInput.
let carryOn = true;
let confirm;
const acceptableAnswers = ['yes',"y","yas","no",'n','nope'];
const quit = ['no','n','nope'];

const isInvalidInput = (input) => {
  if (typeof input === 'number') {
    return !isNaN(input);
  } else if (typeof input === 'string') {
    return ['es','en'].includes(input) ||
            acceptableAnswers.includes(input) ||
            (input in operations);
  }
  return false;
};

//Greet user
console.log(bannerizeInput(`Greetings, welcome to our calculator`));
console.log(bannerizeInput(` Please type "es" to switch to the Spanish version of this calculator or "en" 
for the english version`));
let language = readSync.question("Language ===>  ").toLowerCase();

while (!isInvalidInput(language)) {

  console.log("- The language is not recognized, please try again.");
  language = readSync.question("Language ===>  ").toLowerCase();
}

let langVersion = language === "es".trim() ? messages["es"] : messages["en"];

const chooseAgain = (inputType, input) => {
  input = readSync.question(langVersion[inputType]);
  return input;
};

const retrieveChoice = (inputType,input) => {
  switch (inputType) {
    case "askFirstNum":
      console.log(langVersion.numberNotRecon);
      return Number(chooseAgain('askFirstNum',input));
    case "askSecondNum":
      console.log(langVersion.numberNotRecon);
      return Number(chooseAgain('askSecondNum',input));
    case "askOperator":
      console.log(langVersion.operatorNotRecog);
      return Number(chooseAgain('askOperator',input));
    case "anotherOperation":
      console.log(langVersion.wrongAnswer);
      return chooseAgain('anotherOperation',input);
    default:
      return "Not recognized";
  }
};

console.log(bannerizeInput(langVersion.greeting.replace(/\s{2}/g,"")));
//Begin loop, ask numbers, operator, print results.
while (carryOn !== false) {

  let firstNum = Number(readSync.question(langVersion.askFirstNum));

  while (!isInvalidInput(firstNum)) {
    firstNum = retrieveChoice('askFirstNum',firstNum);
  }

  let secondNum = Number(readSync.question(langVersion.askSecondNum));

  while (!isInvalidInput(secondNum)) {
    secondNum = retrieveChoice('askSecondNum',secondNum);
  }

  console.log(langVersion.possibleOperator);

  let operator = readSync.question(langVersion.askOperator).toLowerCase();

  while (!isInvalidInput(operator)) {
    operator = retrieveChoice("askOperator",operator);
  }

  let result = operations[operator](firstNum,secondNum);
  if (secondNum === 0 && ["/","4","divide","dividir"].includes(operator)) {
    console.log(langVersion.divisionByZero);
  } else {
    console.log(bannerizeInput(`${langVersion.printResult} ${result} `));
  }

  confirm = readSync.question(langVersion.anotherOperation);
  while (!isInvalidInput(confirm)) {
    confirm = retrieveChoice("anotherOperation",confirm);
  }

  console.clear();

  if (quit.includes(confirm.toLowerCase())) {
    console.log(bannerizeInput(langVersion.farewell));
    carryOn = false;
  }
}