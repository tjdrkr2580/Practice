const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const form = document.querySelector(".picture_fc");

function imageAnimation(){
    btn1.addEventListener("click",()=>{
        console.log();
        form.style.transform = "translate(0)"
    });
    btn2.addEventListener("click",()=>{
        form.style.transform = "translate(-100vw)"
    });
    btn3.addEventListener("click",()=>{
        form.style.transform = "translate(-200vw)"
    });
}

imageAnimation();
