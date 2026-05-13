let index = 0;

const slider = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");

function slideAuto(){

    index++;

    slider.style.transition = "transform 1s ease-in-out";
    slider.style.transform = `translateX(-${index * 100}%)`;

    // kalau sudah sampai clone
    if(index === slides.length - 1){

        setTimeout(() => {

            slider.style.transition = "none";
            index = 0;

            slider.style.transform = `translateX(0%)`;

        }, 1000);
    }
}

setInterval(slideAuto, 3000);