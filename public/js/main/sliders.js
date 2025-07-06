export function sliders(){
    const prevButton= document.querySelector(".slider__btn-prev");
    const nextButton = document.querySelector(".slider__btn-next");
    let slides= document.querySelectorAll(".slides__item");
    let counter=0;
    let allslide= slides.length;

    //click prev button
    prevButton.addEventListener("click", () => {
        slides[counter].classList.remove("slides__item--active");
        counter--;
        if(counter < 0){
            counter = allslide - 1; //ultima diapositiva
        }
        slides[counter].classList.add("slides__item--active");
        clearActive();
    });7

    //click next button
    nextButton.addEventListener("click", () => {
        slides[counter].classList.remove("slides__item--active");
        counter++;
        if(counter >= allslide){
            counter = 0;
        }
        slides[counter].classList.add("slides__item--active");
        clearActive();
    });
}