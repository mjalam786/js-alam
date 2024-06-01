

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

// console.log(loginUserMessage("Hamza"))

function calculateCartPrice(val1, val2, ...num1){           // ... is rest operator and spread operator.  here ... used as rest operator which collect 
                                                  //       all the values and put all in array
    return num1
}

// console.log(calculateCartPrice(200,400,600,800));

const user = {

    username: "Hamza",
    price: 199
}
function handleObject(anyobject){
    
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject( {
    username: "Alam",
    price:599
})

const myNewArray = [200,400,300,500,800]
function returnSecondValue(getArray){
    return getArray[3]
}
console.log(returnSecondValue(myNewArray));