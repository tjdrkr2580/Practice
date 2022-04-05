const animation = () => {
    const surface = document.querySelector('.surface');
    const car = document.querySelector('.car_image');
    function carLightOff(){
        car.src = "./assets/Img_05.png";
    }
    function carLightOn(){
        car.src = "./assets/Img_06.png";
    }
    car.addEventListener("mouseenter",carLightOff);
    car.addEventListener("mouseleave",carLightOn);
}

animation();