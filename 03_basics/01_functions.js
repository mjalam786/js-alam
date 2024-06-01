

function sayMyName(){

    console.log("H");
    console.log("A");
    console.log("M");
    console.log("Z");
    console.log("A");
}

// sayMyName()      //execute the function


// function addTwoNumbers(number1, number2) {        //number1 and number2 is called here parameters
// 
//       console.log(number1 + number2);    
// }

function addTwoNumbers(number1, number2) {        

   // let result = number1 + number2    
   // return result

   return number1 + number2
}

addTwoNumbers(5,9)      // values which are passing in function at time of execution is called arguments
 addTwoNumbers(5,"9")
const result = addTwoNumbers(5,"a")

// console.log("Result: ",result);

function loginUserMessage(username = "Alam"){         
     if(username === undefined)
        {

            console.log("Please enter a user name");
            return
     }  

    return `${username} just logged in` 
}

console.log(loginUserMessage("Hamza"))



