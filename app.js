

const colorRgb1 = document.getElementById('colorRgb1');
const btnClick1 = document.getElementById('btn-click1');
const section1 = document.getElementById('section1');

const randomNum = () =>{
    return Math.floor(Math.random()*256);
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

const asignarColor = (r , g , b, id) => {
    
    let colorStyle = `rgb(${r},${g},${b})`;

    console.log(colorStyle)
    id.style.backgroundColor = colorStyle;
}

function rgbColor(rgb){
    console.log({rgb})
    const keys = Object.keys(rgb);
    const values = Object.values(rgb);
    console.log(keys, values);
    const rgbNewValue = []
    for (let i = 0; i < keys.length; i++) {
        rgbNewValue.push(keys.i);
        console.log(rgbNewValue);
    }
}

function rgbToHex(rgb){

}

btnClick1.addEventListener("click", () => {
    let rgb = changeColor();

    asignarColor(rgb.r, rgb.g, rgb.b, section1);
    
});
window.addEventListener("load", changeColor);


