
import { renderContent } from "./app/renderHTML/render.js";
import {cambiarColor}  from "./app/listeners/btn-listeners.js";


export const initApp = (element) => {
    renderContent(element); 
    const btnColor1 = document.getElementById('btnClick1');
    cambiarColor(btnColor1);
}