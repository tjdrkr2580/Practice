const button = document.getElementById("random_btn");
const value = document.getElementById("value");



let value2 = 0;


function clickButton(){
    console.log(value2);
    value2 = Math.floor(Math.random() * 50);
    value.innerText = `Value = ${value2}`;
}

button.addEventListener("click",clickButton);