random.addEventListener('click', () => {
    let rgb1 = todoStorechangeColor();
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