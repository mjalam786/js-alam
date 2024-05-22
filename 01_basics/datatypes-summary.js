// Primitive Data Types

// 7 Types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('786')
const anotherId = Symbol('786')

console.log(id === anotherId);

 const bigNumber = 3841418415122355134522n   // n repersents variable value  as bigInt



// Reference Type (Non Primitive)

// Array, Objects, Functions

const Cricketers = ["Kohli", "Shiraz", "Dhoni"]
let myObj = {
    name:"Alam"
    age:32;
}

const myFunction = function(){

     console.log("Hello Alam");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);