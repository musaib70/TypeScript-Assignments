import inquirer from 'inquirer';


interface ATM{
    AccountID: string,
    AccountPin: string,
    AccountDetail: string,
    FastCash: number,
    cashWithdraw: number,
    AccountBalanceDetail: number
    
} 

let a : ATM  = await inquirer
  .prompt([
    {
        type: "input" ,
        name: "AccountID",
        message: "Enter your user id"
    },
    {
        type: "input" ,
        name: "AccountPin",
        message: "Enter your PIN code"
    },
    {
        type: "list" ,
        name: "AccountDetail",
        choices: ["Account Balance Detail","Fast Cash", "Cash Withdraw", "Exit"],
        
        
    },
    {
        type: "number" ,
        name: "AccountBalanceDetail",
        
        when(answers) { let b = Math.round(Math.random()*10000 + 1)
            if ( answers.AccountDetail == "Account Balance Detail") {
                
            console.log(`Your Account Balance is ${b}`);  
            }
  
        }
    },

    {
        
        type: "list" ,
        name: "FastCash",
        choices: [500, 1000, 5000, 10000, 25000],
        message: "Enter your cash ammout",
        when(answers) {
        if (answers.AccountBalanceDetail >= answers.FastCash ){
            console.log("Your Amount Transaction Has Been Completed");
          
           } 
           else("You have insuficient balance")

         return answers.AccountDetail == "Fast Cash"
       
        }
    },
   
    {
        type: "input" ,
        name: "cashWithdraw",
        message: "Enter your your ammout",
        when(answers) {
            if (answers.AccountBalanceDetail >= answers.cashWithdraw ){
                console.log("Your Amount Transaction Has Been Completed");
              
               } 
               else("You have insuficient balance")

             return answers.AccountDetail == "Cash Withdraw"
           
        },
 
    }

]
  )
