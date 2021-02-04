// define function inside an object
// const title = document.getElementById("title");

// DOM document object model
// Everything you select from the page using JS will be called into an object.
// title.innerHTML = "This is a test again"
// title.style.color = "black"

// Change HTML using JavaScript.
// document.title = "Momontum"

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    // if CLICKED_CLASS nto in className, add if exists, remove using toggle.
    title.classList.toggle(CLICKED_CLASS);
}

function init() {
    title.addEventListener("click", handleClick);
}

init();
