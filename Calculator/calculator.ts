import { readdirSync } from "fs";
import   inquirer  from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";
import { listenerCount } from "process";
import  Chalk   from "chalk";
import  chalkanimation, { rainbow }  from "chalk-animation";
import { CLIENT_RENEG_WINDOW } from "tls";
import chalk from "chalk";



let sleep = () => {

  return new Promise ((res)=>{
    setTimeout(res, 2000);
  })

}

async function welcome () {

  console.log (chalk.yellowBright.bold(`WELCOME TO MY CALCULATOR`)) 

let a = chalkanimation.rainbow(`
 _____________________
|  _________________  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|
`)
await sleep()
a.stop()
}
await  welcome()


async function calculator() {
    

await inquirer
  .prompt([
    {
        type: "list",
        name: "operator",
        message: Chalk.magentaBright("which operation you perform") ,
        choices: ["addition","subtraction","multiplication","divide"]

    },
    {
        type: "number",
        name: "num1",
        message: Chalk.yellowBright("Enter first number: "),
    },
    {
        type: "number",
        name: "num2",
        message: Chalk.yellowBright("Enter second number: "),
    }
  ])


  
  .then((answers) => {
    if (answers.operator === "addition") {
        console.log (Chalk.blueBright(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
        
    }

    else
    if (answers.operator === "subtraction") {
      console.log (Chalk.gray( `${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
      
  }
  else
  if (answers.operator === "multiplication") {
    console.log (Chalk.cyanBright(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
    
}
else 
if (answers.operator === "divide") {
  console.log(Chalk.magentaBright(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
  
}
  })
  
  
}

//  calculator()

async function startAgain() {
  do {
    await calculator();
  var abc = await inquirer
  .prompt([
    {
      type: "input",
      name: "restart",
      message: `Do you want to continue? Press "Y" or "N" = `
    }
  ])

} while ( abc.restart === "y" || abc.restart === "Y" );
}


startAgain()

