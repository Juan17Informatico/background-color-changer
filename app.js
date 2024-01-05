const colorRgb = document.getElementById('colorRgb');
const btnClick = document.getElementById('btn-click');

let randomNum = () =>{
    return Math.floor(Math.random()*256);
};

let changeColor = () => {
    const rgb = {r: randomNum(), g: randomNum(), b: randomNum()};
    console.log(rgb);
    let randomColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
    console.log(randomColor);
    document.body.style.backgroundColor = randomColor;
    colorRgb.innerText = randomColor;
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

btnClick.addEventListener("click", changeColor);
window.addEventListener("load", changeColor);


