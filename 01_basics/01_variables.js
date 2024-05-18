const accountId = 144553
let accountEmail = "alam@gmail.com"
var accountPassword = "456456"
accountCity = "Delhi"
let accountState;

// accountId = 9 // not allowed


accountEmail = "Hamza@gmail.com"
accountPassword = "741147"
accountCity = "Mumbai"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])