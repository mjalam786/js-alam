# Projects related to DOM

## project link
[click here]()

# solution code


## project1
```javascript
console.log("alam")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")

buttons.forEach(function(button){
console.log(button);
button.addEventListener('click',function(e){
console.log(e)
console.log(e.target)
if(e.target.id == 'grey') {
  body.style.backgroundColor = e.target.id;
}
if(e.target.id == 'blue') {
  body.style.backgroundColor = e.target.id;
}
if(e.target.id == 'white') {
  body.style.backgroundColor = e.target.id;
}
if(e.target.id == 'yellow') {
  body.style.backgroundColor = e.target.id;
}
if(e.target.id == 'green') {
  body.style.backgroundColor = e.target.id;
}

})

});
```