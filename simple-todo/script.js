/**
 * Vanilla JS To-Do App
 * Gets dom elements, adds event listeners
 */

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var todos = document.getElementById("todos");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function toggleDone(event) {
  event.target.classList.toggle("done");
}

/**
 * Add event listeners
 */

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
todos.addEventListener("click", toggleDone);
