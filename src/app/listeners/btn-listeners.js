import { changeColor, asignarColor, rgbColor, rgbToText, rgbToHex } from "./../todo/logic-changer/bg-changer.app";

/**
 * 
 * @param {HTMLElementDiv} btn 
 * @param {Array|IdSections} sections 
 */
export const randomColor = (section, resultHex, resultRgb) => {

    let rgb = changeColor();
    const sectionDiv = document.getElementById(section);
    asignarColor(rgb.r, rgb.g, rgb.b, sectionDiv);

    let hex = rgbToHex(rgb);
    rgbToText(hex, resultHex);

    let rgbText = rgbColor(rgb);
    rgbToText(rgbText, resultRgb);



}

export const cambiarColor = (section, resultHex, resultRgb) => {

    const sectionDiv = document.getElementById(section);

    let rgb = changeColor();

    asignarColor(rgb.r, rgb.g, rgb.b, sectionDiv);

    let rgbText = rgbColor(rgb);

    rgbToText(rgbText, resultRgb);
    let hex = rgbToHex(rgb);
    rgbToText(hex, resultHex);

}
