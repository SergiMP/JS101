const readSync = require("readline-sync");
const messages = require("./config.json");

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
//Declare while loop conditions.
let carryOn = true;
let confirm;
const acceptableAnswers = ['yes',"y","yas","no",'n','nope'];

//Greet user
console.log(bannerizeInput(`Greetings, welcome to our calculator`));
console.log(bannerizeInput(` Please type "es" to switch to the Spanish version of this calculator or "en" for the english version`));
let language = readSync.question("Language (default: en) ===>  ").toLowerCase();
let langVersion = language === "es".trim() ? messages["es"] : messages["en"];

console.log(bannerizeInput(langVersion.greeting.replace(/\s{2}/g,"")));
//Begin loop, ask numbers, operator, print results.
while (carryOn !== false) {

  let firstNum = Number(readSync.question(langVersion.askFirstNum));

  while (isNaN(firstNum)) {
    console.log(langVersion.numberNotRecon);
    firstNum = Number(readSync.question(langVersion.askFirstNum));
  }

  let secondNum = Number(readSync.question(langVersion.askSecondNum));

  while (isNaN(secondNum)) {
    console.log(langVersion.numberNotRecon);
    secondNum = Number(readSync.question(langVersion.askSecondNum));
  }

  console.log(langVersion.possibleOperator);

  let operator = readSync.question(langVersion.askOperator).toLowerCase();

  while (!(operator in operations)) {
    console.log(langVersion.operatorNotRecog);
    operator = readSync.question(langVersion.askOperator).toLowerCase();
  }
  let result = operations[operator](firstNum,secondNum);
  if (secondNum === 0 && ["/","4","divide","dividir"].includes(operator)) {
    console.log(langVersion.divisionByZero);
  } else {
    console.log(bannerizeInput(`${langVersion.printResult} ${result} `));
  }

  confirm = readSync.question(langVersion.anotherOperation);
  while (!acceptableAnswers.includes(confirm)) {
    console.log(langVersion.wrongAnswer);
    confirm = readSync.question(langVersion.anotherOperation);

  }
  console.clear();
  let quit = ['no','n'];
  if (quit.includes(confirm.toLowerCase())) {
    console.log(bannerizeInput(langVersion.farewell));
    carryOn = false;
  }
}