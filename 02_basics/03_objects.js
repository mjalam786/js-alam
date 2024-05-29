// singleton 
// object literals

// object.create

const mySym = Symbol("key1")

const JsUser = {
     name:"Hamza",
     "full name":"Mohd Alam",
     [mySym]:"mykey1",
     age:02,
     location:"Saharanpur",
     email:"Hamza@gmail.com",
     isLoggedIn:false,
     LastLoginDays:["Monday", "Saturday"]
}
//console.log(JsUser.location)
//console.log(JsUser["location"]);
//console.log(JsUser["full name"]);
//console.log(JsUser[mySym])

JsUser.email = "alam@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "Mohd@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
     console.log("Hello JS");
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
     console.log('Hello JS User, ${this.name}');
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

const regularUser = { 
     email:"my@gmail.com",
     fullname:{

          userfullname :{
               firstname:"Mohd",
               lastname:"Alam"
          }
     }
}
