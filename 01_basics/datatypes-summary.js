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

// const Cricketers = ["Kohli", "Shiraz", "Dhoni"]
//let myObj = {
   // name:"Alam" }
  


//const myFunction = function(){

    // console.log("Hello Alam");
  //  }

//console.log(typeof bigNumber);
//console.log(typeof outsideTemp);
//console.log(typeof scoreValue);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap(Non-Primitive)

let myYoutubename = "mjalamdotcom"
let anothername = myYoutubename
anothername = "chaicode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
  email: "user@google .com",
  upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "alam@google.com"
 console.log(userOne.email);
 console.log(userTwo.email);