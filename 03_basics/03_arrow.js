const user = {

    username: "Alam",
    price:999,

    welcomeMessage: function() {
        console.log(`${this.username} , welocme to website`);

        //console.log(this);
    }
      

}

 // user.welcomeMessage()
 // 
 // user.username = "Hamza"
 // 
 // user.welcomeMessage()

// console.log(this);

 // function chai(){
 //     let username = "alam"
 //     console.log(this.username);
 // 
 // chai()

 const chai = () => {
    let username = "alam"
    console.log(this);
 }
// chai()


// const addTwo = (num1, num2) => {
// 
//     return num1 + num2                                //explicit 
// }
// console.log(addTwo(3,5));

// const addTwo = (num1, num2) => num1 + num2 


// const addTwo = (num1, num2) => (num1 + num2)   // implicit return

const addTwo = (num1, num2) => ({username: "ALAM"})
console.log(addTwo(3,5));