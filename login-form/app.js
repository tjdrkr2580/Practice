const email = document.getElementById("user");
const password = document.getElementById("pwd");
const loginbutton = document.getElementById("login-button");
const forgotpwd = document.getElementById("forgot-password");
const loginform = document.querySelector("#login-form");
const HIDDEN_NAMED = "hidden"; 
function loginMyAcount() {
    loginform.classList.add(HIDDEN_NAMED);
}

loginbutton.addEventListener("click", loginMyAcount);
