

/**
 * 
 * @returns Random Number
 */
const randomNum = () => {
    return Math.floor(Math.random() * 256);
};

/**
 * @params {} : void
 * @returns {Object}: A new color RGB
 */
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

export default {
    randomNum, 
    changeColor,
    asignarColor
}