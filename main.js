import './style.css';
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

const colorRgb1 = document.getElementById('colorRgb1');
const btnClick1 = document.getElementById('btnClick1');
const btnClick2 = document.getElementById('btnClick2');
const btnClick3 = document.getElementById('btnClick3');
const btnClick4 = document.getElementById('btnClick4');
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');
const section4 = document.getElementById('section4');

const resultRgb1 = document.getElementById('result-rgb-span-1');
const resultRgb2 = document.getElementById('result-rgb-span-2');
const resultRgb3 = document.getElementById('result-rgb-span-3');
const resultRgb4 = document.getElementById('result-rgb-span-4');

const resultHexa1 = document.getElementById('result-hexa-span-1');
const resultHexa2 = document.getElementById('result-hexa-span-2');
const resultHexa3 = document.getElementById('result-hexa-span-3');
const resultHexa4 = document.getElementById('result-hexa-span-4');

const random = document.querySelector('#random');

const randomNum = () => {
  return Math.floor(Math.random() * 256);
};

const changeColor = () => {
  const rgb = {
    r: randomNum(),
    g: randomNum(),
    b: randomNum(),
  };
  return rgb;

  // document.body.style.backgroundColor = randomColor;
  // colorRgb1.innerText = randomColor;
}

const asignarColor = (r, g, b, id) => {

  let colorStyle = `rgb(${r},${g},${b})`;

  id.style.backgroundColor = colorStyle;
}

function rgbColor(rgb) {
  const keys = Object.keys(rgb);
  const values = Object.values(rgb);
  console.log(keys, values);
  const rgbNewValue = [];
  for (let i = 0; i < keys.length; i++) {
    rgbNewValue.push(values[i]);
    console.log(rgbNewValue);
  }
  return rgbNewValue;
}

/**
 * 
 * @param {Array<string>} rgb 
 */
function rgbToText(rgb, element) {
  element.innerText = rgb;
}

function rgbToHex(color) {
  // Asegurarse de que los valores estén en el rango correcto (0-255)
  const clamp = (value) => Math.max(0, Math.min(255, value));
  const r = clamp(color.r);
  const g = clamp(color.g);
  const b = clamp(color.b);

  // Convertir cada componente a hexadecimal y concatenarlos
  const hex = ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

  return `#${hex.toUpperCase()}`;
}

// Ejemplo de uso:
const colorRGB = { r: 255, g: 127, b: 64 };
const colorHex = rgbToHex(colorRGB);
console.log(colorHex); // Salida: "#FF7F40"





random.addEventListener('click', () => {
  let rgb1 = changeColor();
  let rgb2 = changeColor();
  let rgb3 = changeColor();
  let rgb4 = changeColor();

  asignarColor(rgb1.r, rgb1.g, rgb4.b, section1);
  asignarColor(rgb2.r, rgb2.g, rgb4.b, section2);
  asignarColor(rgb3.r, rgb3.g, rgb4.b, section3);
  asignarColor(rgb4.r, rgb4.g, rgb4.b, section4);

  let rgbText1 = rgbColor(rgb1);
  let rgbText2 = rgbColor(rgb2);
  let rgbText3 = rgbColor(rgb3);
  let rgbText4 = rgbColor(rgb4);

  rgbToText(rgbText1, resultRgb1);
  rgbToText(rgbText2, resultRgb2);
  rgbToText(rgbText3, resultRgb3);
  rgbToText(rgbText4, resultRgb4);

  let hex1 = rgbToHex(rgb1);
  let hex2 = rgbToHex(rgb2);
  let hex3 = rgbToHex(rgb3);
  let hex4 = rgbToHex(rgb4);

  rgbToText(hex1, resultHexa1);
  rgbToText(hex2, resultHexa2);
  rgbToText(hex3, resultHexa3);
  rgbToText(hex4, resultHexa4);

});


btnClick1.addEventListener("click", () => {
  let rgb = changeColor();

  asignarColor(rgb.r, rgb.g, rgb.b, section1);

  let rgbText = rgbColor(rgb);

  rgbToText(rgbText, resultRgb1);
  let hex = rgbToHex(rgb);
  rgbToText(hex, resultHexa1);
});
btnClick2.addEventListener("click", () => {
  let rgb = changeColor();

  asignarColor(rgb.r, rgb.g, rgb.b, section2);

  let rgbText = rgbColor(rgb);

  rgbToText(rgbText, resultRgb2);
  let hex = rgbToHex(rgb);

  rgbToText(hex, resultHexa2);
});
btnClick3.addEventListener("click", () => {
  let rgb = changeColor();

  asignarColor(rgb.r, rgb.g, rgb.b, section3);

  let rgbText = rgbColor(rgb);

  rgbToText(rgbText, resultRgb3);
  let hex = rgbToHex(rgb);

  rgbToText(hex, resultHexa3);

});
btnClick4.addEventListener("click", () => {
  let rgb = changeColor();


  let rgbText = rgbColor(rgb);

  asignarColor(rgb.r, rgb.g, rgb.b, section4);
  rgbToText(rgbText, resultRgb4);
  let hex = rgbToHex(rgb);

  rgbToText(hex, resultHexa4);

});


// document.querySelector('#main').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
