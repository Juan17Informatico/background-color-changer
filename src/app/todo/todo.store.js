
/**
 * 
 * @returns Retorna un nuevo color RGB con sus valores aleatorios
 */
const changeColor = () => {
    const rgb = {
        r: randomNum(),
        g: randomNum(),
        b: randomNum(),
    };
    return rgb;
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

/**
 * 
 * @returns Retorna un numero azar entre 1 y 256
 */
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


export default {
    changeColor,
    asignarColor,

}