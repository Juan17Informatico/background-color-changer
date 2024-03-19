import { renderContent } from "./app/renderHTML/render.js";
import {cambiarColor, randomColor}  from "./app/listeners/btn-listeners.js";


export const initApp = (element) => {
    renderContent(element); 
    const btnClick1 = document.getElementById('btnClick1');
    const btnClick2 = document.getElementById('btnClick2');
    const btnClick3 = document.getElementById('btnClick3');
    const btnClick4 = document.getElementById('btnClick4');
    const random = document.getElementById('random');
    const resultHexa1 = document.querySelector("#result-hexa-span-1");
    const resultHexa2 = document.querySelector("#result-hexa-span-2");
    const resultHexa3 = document.querySelector("#result-hexa-span-3");
    const resultHexa4 = document.querySelector("#result-hexa-span-4");
    const resultRgb1 = document.querySelector("#result-rgb-span-1");
    const resultRgb2 = document.querySelector("#result-rgb-span-2");
    const resultRgb3 = document.querySelector("#result-rgb-span-3");
    const resultRgb4 = document.querySelector("#result-rgb-span-4");

    random.addEventListener('click', () => {
        randomColor('section1', resultHexa1, resultRgb1);
        randomColor('section2', resultHexa2, resultRgb2);
        randomColor('section3', resultHexa3, resultRgb3);
        randomColor('section4', resultHexa4, resultRgb4);
    });

    btnClick1.addEventListener('click', ()=>{
        cambiarColor("section1", resultHexa1, resultRgb1);
    }); 

    btnClick2.addEventListener('click', ()=>{
        cambiarColor("section2", resultHexa2, resultRgb2);
    }); 

    btnClick3.addEventListener('click', ()=>{
        cambiarColor("section3", resultHexa3, resultRgb3);
    }); 

    btnClick4.addEventListener('click', ()=>{
        cambiarColor("section4", resultHexa4, resultRgb4);
    }); 
}