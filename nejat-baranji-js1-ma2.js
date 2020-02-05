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
const animalButton = document.querySelector("button");

function changeClass() {
  animalButton.classList.add("newClass");
  console.log("Class changed");
}

animalButton.addEventListener("mouseover", changeClass);

// question 5
const dogButton = document.querySelector(".btn[data-animal='dog']");

dogButton.addEventListener("mouseout", removeClass);

function removeClass() {
  dogButton.classList.remove("hover");
  console.log("hover class removed");
}

// question 6
const list = document.querySelectorAll("li");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("mouseover", detectTypeData);
  function detectTypeData() {
    console.log(list[i].dataset.animal);
  }
}

// question 7
const animal = "cow";

switch (animal) {
  case "cat":
    console.log("Meow");
    break;
  case "cow":
    console.log("Moo");
    break;
  case "bird":
    console.log("Tweet");
    break;
  default:
    console.log("Harrumph");
}

// question 8
const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(sheepNames) {
  console.log(sheepNames);
});

// question 9
let counter = 0;
function printWord() {
  console.log("hello");
  if (counter === 5) {
    clearInterval(printWordLog);
  }
  counter++;
}

const printWordLog = setInterval(printWord, 500);

// question 10

const container = document.querySelector(".container");
let count = 0;

function updateText() {
  container.innerHTML = "Text updated";
  if (count === 1) {
    clearInterval(updateDivTimer);
  }
  count++;
}

const updateDivTimer = setInterval(updateText, 2000);
