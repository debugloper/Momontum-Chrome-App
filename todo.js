const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";


function paintToDo(text) {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "❌";
    const span = document.createElement("span");
    span.innerHTML = text;
    li.appendChild(deleteButton);
    li.appendChild(span);
    toDoList.appendChild(li);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}


function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
    if (toDos !== null) {

    }
}


function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}



init();