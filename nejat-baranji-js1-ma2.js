// question 1 
let myFunctionExpression = function() {
  console.log("Nejat");
};
// question 2
let button = document.querySelector(".btn");

function myFunction() {
  console.log("I was clicked");
}

button.addEventListener("click", myFunction);
// question 3
let input = document.querySelector("#firstName");
function detect(keyType) {
  console.log(keyType);
  // We can also use console.dir() to access KeyboardEvent from window.object
}
input.addEventListener("keydown", detect);

// question 4
const animalButton = document.querySelector('button');
const body = document.querySelector('body');


function changeClass(){
    animalButton.classList.add('newClass');
    console.log('Class changed');    
}

animalButton.addEventListener('mouseover', changeClass);

// question 5
const dogButton = document.querySelector(".btn[data-animal='dog']");

dogButton.addEventListener('mouseout', removeClass);
function removeClass(){
  dogButton.classList.remove('hover');
  console.log('hover class removed')
}
// question 6
const list = document.querySelectorAll('li');
for (let i = 0; i < list.length; i++)
console.log(list[i].dataset)

// question 7
// question 8
// question 9
// question 10
