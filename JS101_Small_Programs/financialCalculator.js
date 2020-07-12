/*
* Loan Calculator:
* Display welcome message
* Ask the user for the principal amount => Verify input
* Ask the user for the interest:
* check possible input format .05, 5%, 5 verify input
* Ask the user if there is an APR amount
* and apply same logic as before.
* there should be a function inputToInterestRate()
* there should be a function validInput()
* Display the results.
* Ask the user if they want to perform another calculation
*/

const readSync = require("readline-sync");
const messages = require("./languages.json");

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

const isValidNumber = (input) =>  !isNaN(Number(input)) && input > 0;

const acceptableAnswers = ['yes',"y","yas","no",'n','nope'];

const isValidString = (input) => {
  return ['es','en'].includes(input) ||
         acceptableAnswers.includes(input);
};

const isInvalidInput = (input) => {
  return typeof input === 'string' ?
    !(isValidString(input)) : !(isValidNumber(Number(input)));
};

const inputToInterestRates = (input) => {
  let transformInput = input.split("").filter(x => x !== '%');
  transformInput = transformInput.includes('.') ?
    0 + Number(transformInput.join('')) : Number(transformInput.join('')) / 100;
  return transformInput;
};

const transformAPR = (input) =>{
  let APR = inputToInterestRates(input) / 12;
  return APR;
};

let carryOn = true;
let confirm;
const quit = ['no','n','nope'];

console.log(bannerizeInput('Greetings, welcome to the financial calculator.'));
console.log(bannerizeInput(` Please type "es" to switch to the Spanish version of this calculator or "en" 
for the english version`));

let language = readSync.question("Language ===>  ").toLowerCase();

while (isInvalidInput(language)) {

  console.log("- The language is not recognized, please try again.");
  language = readSync.question("Language ===>  ").toLowerCase();
}

let langVersion = language === "es".trim() ? messages["es"] : messages["en"];

let principalAmount = readSync.question(`${langVersion["principal"]}: `);

while (!isValidNumber(principalAmount)) {
  console.log(`${langVersion["notValidPrincipal"]} `);
  principalAmount = readSync.question(`${langVersion["principal"]}: `);
}