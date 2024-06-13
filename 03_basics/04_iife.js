// Immediately Invoked Function Expressions (IIFE). This function is used to remove global scope pollution.

(function chai(){        //named IIFE
    console.log(`DB CONNECTED`);
} ) ();


( () => {                  //Unnamed IIFE
       console.log(`DB CONNECTED TWO ${name}`);
})("ALAM")