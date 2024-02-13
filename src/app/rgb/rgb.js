

/**
 * 
 * @param {Object|String} rgb 
 * @returns {Array}
 */
export function rgbColor(rgb) {
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