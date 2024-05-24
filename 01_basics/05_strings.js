const name = "Alam"
const repoCount = 50
// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('alams-Mohd')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(0,3)
console.log(anotherString);

const newStringOne = "  Alam  "
console.log(newStringOne);
console.log(newStringOne.trim());
const url = "https://google111.com"
console.log(url.replace('111','786'))
console.log(url.includes("Hamza"))
console.log(gameName.split('-'));