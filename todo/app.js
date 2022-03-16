const tdSubbtn = document.querySelector(".hidden");
const tdInput = document.querySelector("#todo_input");
const tdList = document.querySelector(".todo-list");

const toDos = [];


function tdSave(){
    localStorage.setItem("todos" , JSON.stringify(toDos));
}


function tdDelete(event) {
    const li = event.target.parentElement;
    li.remove();
}


function sayHello(){
    console.log(`안녕`);
}

function tdSubbtnClick(event){
    let ul = document.querySelector("ul");
    let li = document.createElement("li");
    const button = document.createElement("button");
    button.innerText = "❌";
    event.preventDefault();
    li.innerText = `${tdInput.value}`;
    toDos.push(tdInput.value)
    ul.appendChild(li);
    li.appendChild(button);
    tdInput.value = ""
    button.addEventListener("click",tdDelete);
    tdSave();
}

tdSubbtn.addEventListener("click",tdSubbtnClick);

const todoSaved = localStorage.getItem("todos");
console.log(todoSaved);
if (todoSaved !== null){
    const todoParsed = JSON.parse(todoSaved);
    console.log(todoParsed);
    todoParsed.forEach(sayHello);
}