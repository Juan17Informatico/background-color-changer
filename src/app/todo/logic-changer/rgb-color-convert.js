
/**
 * 
 * @param {Object|Colors} rgb 
 * @returns {Array}: New Color Array<
 */
export function rgbColor(rgb) {

    const keys = Object.keys(rgb);
    const values = Object.values(rgb);

    const rgbNewValue = [];
    for (let i = 0; i < keys.length; i++) {
        rgbNewValue.push(values[i]);
    }
    return rgbNewValue;
}