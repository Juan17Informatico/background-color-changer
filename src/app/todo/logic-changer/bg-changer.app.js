
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

/**
 * 
 * @param {Object|Colors} rgb 
 * @returns {Array}: New Color Array
 */
function rgbColor(rgb) {

    const keys = Object.keys(rgb);
    const values = Object.values(rgb);

    const rgbNewValue = [];
    for (let i = 0; i < keys.length; i++) {
        rgbNewValue.push(values[i]);
    }
    return rgbNewValue;
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

export {
    changeColor,
    asignarColor,
    rgbColor,
    rgbToText,
    rgbToHex
}