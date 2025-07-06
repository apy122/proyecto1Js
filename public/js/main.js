import { sliders} from './main/sliders.js'
import{ articles } from './main/articles.js'
import {formulario} from './main/form.js'

addEventListener('DOMContentLoaded', () => {
   sliders();
   articles();
   upPage();
   formulario();

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
