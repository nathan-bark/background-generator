const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const h3 = document.querySelector("h3");
const body = document.querySelector("body");
const button = document.querySelector('button');


h3.textContent = 'linear-gradient(to right, orange, green);';


const backgroundGradient = () => {
  body.style.background =
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    h3.textContent = body.style.background + ';'
};

const randomColor = () => {
    body.style.background =
    "linear-gradient(to right, " 
    + `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})` 
    + ", " 
    + `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
    + ")";

    h3.textContent = body.style.background + ';'
}

color1.addEventListener('input', backgroundGradient);
color2.addEventListener('input', backgroundGradient);
button.addEventListener('click', randomColor);
