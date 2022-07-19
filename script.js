const inputElement = document.getElementById('numberInput');
const plusButton = document.getElementById('plusButton');
const equalButton = document.getElementById('equalButton');
const subtractButton = document.getElementById('subtractButton');
const mulButton = document.getElementById("mulButton");
const divButton = document.getElementById("divButton");
const clearButton = document.getElementById("clear");

const button_1 = document.getElementById("1");
const button_2 = document.getElementById("2");
const button_3 = document.getElementById("3");
const button_4 = document.getElementById("4");
const button_5 = document.getElementById("5");
const button_6 = document.getElementById("6");
const button_7 = document.getElementById("7");
const button_8 = document.getElementById("8");
const button_9 = document.getElementById("9");
const button_0 = document.getElementById("0");

let count = 0;

const main = document.getElementById('tubuh');

plusButton.addEventListener('click', () => {
    let lastChar = inputElement.value.substr(inputElement.value.length - 1);
    if(!(Number(lastChar) >= 0 && Number(lastChar) <= 9)){
        inputElement.value = inputElement.value.slice(0, -1);
    }
    inputElement.value += "+";
});

clearButton.addEventListener('click', () => {
    inputElement.value = "";
});

mulButton.addEventListener('click', () => {
    let lastChar = inputElement.value.substr(inputElement.value.length - 1);
    if(!(Number(lastChar) >= 0 && Number(lastChar) <= 9)){
        inputElement.value = inputElement.value.slice(0, -1);
    }
    inputElement.value += "*";
});

divButton.addEventListener('click', () => {
    let lastChar = inputElement.value.substr(inputElement.value.length - 1);
    if(!(Number(lastChar) >= 0 && Number(lastChar) <= 9)){
        inputElement.value = inputElement.value.slice(0, -1);
    }
    inputElement.value += "/";
});

subtractButton.addEventListener('click', () => {
    let lastChar = inputElement.value.substr(inputElement.value.length - 1);
    if(!(Number(lastChar) >= 0 && Number(lastChar) <= 9)){
        inputElement.value = inputElement.value.slice(0, -1);
    }
    inputElement.value += "-";
});

button_1.addEventListener('click', () => {
    inputElement.value += "1";
});

button_2.addEventListener('click', () => {
    inputElement.value += "2";
});

button_3.addEventListener('click', () => {
    inputElement.value += "3";
});

button_4.addEventListener('click', () => {
    inputElement.value += "4";
});

button_5.addEventListener('click', () => {
    inputElement.value += "5";
});

button_6.addEventListener('click', () => {
    inputElement.value += "6";
});

button_7.addEventListener('click', () => {
    inputElement.value += "7";
});

button_8.addEventListener('click', () => {
    inputElement.value += "8";
});

button_9.addEventListener('click', () => {
    inputElement.value += "9";
});

button_0.addEventListener('click', () => {
    inputElement.value += "0";
});


equalButton.addEventListener('click', () => {
    if(inputElement.value == "")
    {
        return;
    }
    let lastChar = inputElement.value.substr(inputElement.value.length - 1);
    if(!(Number(lastChar) >= 0 && Number(lastChar) <= 9))
    {
        inputElement.value = inputElement.value.slice(0, -1);
    }
    count += 1;
    let text = eval(inputElement.value);
    const p = document.createElement('p');
    p.innerText = "(" + String(count) + ") " + text;

    main.appendChild(p);
});