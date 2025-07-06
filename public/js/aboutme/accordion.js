export function accordion() {
   let colapses= document.querySelectorAll(".accordion__collapse");
   colapses.forEach((collapse) => {
      let header= collapse.querySelector(".collapse__header");

      header.addEventListener("click", () => {
        if (header){
            collapse.classList.toggle("accordion__collapse--open");
        }
      });
   });

}