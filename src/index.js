import { renderContent } from "./app/renderHTML/render.js";
import {cambiarColor}  from "./app/listeners/btn-listeners.js";


export const initApp = (element) => {
    renderContent(element); 
    const btnClick1 = document.getElementById('btnClick1');
    const btnClick2 = document.getElementById('btnClick2');
    const btnClick3 = document.getElementById('btnClick3');
    const btnClick4 = document.getElementById('btnClick4');

    btnClick1.addEventListener('click', ()=>{
        cambiarColor("section1");
    }); 

    btnClick2.addEventListener('click', ()=>{
        cambiarColor("section2");
    }); 

    btnClick3.addEventListener('click', ()=>{
        cambiarColor("section3");
    }); 

    btnClick4.addEventListener('click', ()=>{
        cambiarColor("section4");
    }); 
}