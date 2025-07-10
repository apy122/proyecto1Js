import { sliders} from './main/sliders.js';
import{ articles } from './main/articles.js';
import {formulario} from './main/form.js';
import {colors} from './main/colors.js';
addEventListener('DOMContentLoaded', () => {
   sliders();
   articles();
   upPage();
   formulario();
   colors();

    });


//go top pages
function upPage(){
    let botonSubir = document.querySelector(".footer__top");
    botonSubir.addEventListener("click", () => {
        window.scroll({
            top:0,
            left:0,
            behavior: "smooth"
        })
    });
}
