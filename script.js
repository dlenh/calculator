const one = document.getElementById("1")
const two = document.getElementById("2")
const three = document.getElementById("3")
const four = document.getElementById("4")
const five = document.getElementById("5")
const six = document.getElementById("6")
const seven = document.getElementById("7")
const eight = document.getElementById("8")
const nine = document.getElementById("9")
const zero = document.getElementById("0")
const result = document.getElementById("result")
const addButton = document.getElementById("add")
const subtractButton = document.getElementById("subtract")
const multiplyButton = document.getElementById("multiply")
const divideButton = document.getElementById("divide")
const equalButton = document.getElementById("equal")
const clear = document.getElementById("clear")


one.addEventListener("click", oneR)
two.addEventListener("click", twoR)
three.addEventListener("click", threeR)
four.addEventListener("click", fourR)
five.addEventListener("click", fiveR)
six.addEventListener("click", sixR)
seven.addEventListener("click", sevenR)
eight.addEventListener("click", eightR)
nine.addEventListener("click", nineR)
zero.addEventListener("click", zeroR)

addButton.addEventListener("click", addR)
subtractButton.addEventListener("click", subtractR)
multiplyButton.addEventListener("click", multiplyR)
divideButton.addEventListener("click", divideR)
equalButton.addEventListener("click", equalR)
clear.addEventListener("click", clearR)

function oneR() {
    result.innerText += 1;
}

function twoR() {
    result.innerText += 2;
}

function threeR() {
    result.innerText += 3;
}

function fourR() {
    result.innerText += 4;
}

function fiveR() {
    result.innerText += 5;
}

function sixR() {
    result.innerText += 6;
}

function sevenR() {
    result.innerText += 7;
}

function eightR() {
    result.innerText += 8;
}

function nineR() {
    result.innerText += 9;
}

function zeroR() {
    result.innerText += 0;
}

function addR() {
    result.innerText += "+";
}

function subtractR() {
    result.innerText += "-";
}

function multiplyR() {
    result.innerText += "*";
}

function divideR() {
    result.innerText += "/";
}

function equalR() {
    result.innerText += "=";
}

function clearR() {
    result.innerText = "";
}


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2)
            break;
        case "-": 
            return subtract(num1, num2)
            break;
        case "*":
            return multiply(num1, num2)
            break;
        case "/": 
            return divide(num1, num2)
            break;   
    }
}