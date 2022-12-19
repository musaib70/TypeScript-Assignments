import  inquirer  from "inquirer";
import  chalk  from "chalk";
import random from "random";
import { type } from "os";
import { Chalk } from "chalk";


type ansType =  {
  userInput: number
}

   let computerInput : number = Math.round(Math.random()* 1 ) 
   
  async function randomNumber() {
    

let userSugestion : ansType = await inquirer
  .prompt([

    {
      type: "number",
      name: "userInput",
      message: chalk.yellowBright("Enter random number b/w 1-10: "),  
    },
  ])


 if (userSugestion.userInput === computerInput) {
  console.log(chalk.greenBright(`Your Number has been matched \n`))
  console.log(chalk.magentaBright(`You Won!!!!`)) 
 } else {

  console.log(chalk.redBright(`The computer choose to  ${computerInput} \n Oopsss!!! Try Again`))
 }
}

async function restart() {


do {
  await randomNumber()

  var  b = await inquirer
  .prompt([

    {
      type: "input",
      name: "restart",
      message: "Do you want to continue this game? select Y or N = ",
    },

  ])
} while (b.restart === "Y" || b.restart === "y");


}

 restart()