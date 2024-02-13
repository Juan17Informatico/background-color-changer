

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

/**
 * 
 * @param {String} r 
 * @param {String} g 
 * @param {String} b 
 * @param {elementDiv} id 
 */
const asignarColor = (r, g, b, id) => {

    let colorStyle = `rgb(${r},${g},${b})`;

    id.style.backgroundColor = colorStyle;
}


const randomNum = () => {
    return Math.floor(Math.random() * 256);
};




/**
* 
* @param {Array<string>} rgb 
*/
function rgbToText(rgb, element) {
    element.innerText = rgb;
 }



// Ejemplo de uso:
const colorRGB = { r: 255, g: 127, b: 64 };
const colorHex = rgbToHex(colorRGB);
console.log(colorHex); // Salida: "#FF7F40"



export default {
    changeColor,
    asignarColor,

}