const tdSubbtn = document.querySelector(".hidden");
const tdInput = document.querySelector("#todo_input");
const tdList = document.querySelector(".todo-list");

let toDos = [];


function tdSave(){
    localStorage.setItem("todos" , JSON.stringify(toDos));
}


function tdDelete(event) {
    const li = event.target.parentElement;
    li.remove();
}


function tdSubbtnClick(event){
    let ul = document.querySelector("ul");
    let li = document.createElement("li");
    const button = document.createElement("button");
    button.innerText = "❌";
    event.preventDefault();
    li.innerText = `${tdInput.value}`;
    toDos.push()
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
    toDos = todoParsed;
    console.log(todoParsed);
    todoParsed.forEach(tdSubbtnClick);
}