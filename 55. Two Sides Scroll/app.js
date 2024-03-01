const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upBtn = document.getElementById("up-btn");
const downBtn = document.getElementById("down-btn");
const sliderLength = slideRight.querySelectorAll("div").length;


let activeSlideIndex = 0;

slideLeft.style.top = `-${(sliderLength - 1) * 100}vh`;

upBtn.addEventListener("click", () => nextSlide("up"));
downBtn.addEventListener("click", () => nextSlide("down"));


function nextSlide(params) {
    const sliderHeight = sliderContainer.clientHeight;

    if (params === "up") {
        activeSlideIndex++;
        if (activeSlideIndex > sliderLength - 1) {
            activeSlideIndex = 0;
        }
    }

    if (params === "down") {
        activeSlideIndex--;
        if (activeSlideIndex < 0 ) {
            activeSlideIndex = sliderLength - 1;
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}
