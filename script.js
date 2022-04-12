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
const clearButton = document.getElementById("clear")
const delButton = document.getElementById("backspace")

const number1 = () => {
    num1 += result.innerText;
    clearDisplay();
}
const number2 = () => num2 += result.innerText;
const clearDisplay = () => result.innerText = "";

const number = {
    one() {result.innerText += 1},
    two() {result.innerText += 2},
    three() {result.innerText += 3},
    four() {result.innerText += 4},
    five() {result.innerText += 5},
    six() {result.innerText += 6},
    seven() {result.innerText += 7},
    eight() {result.innerText += 8},
    nine() {result.innerText += 9},
    zero() {result.innerText += 0}
} 

const operation = {
    add: (a,b) => a + b,
    subtract: (a,b) => a - b,
    multiply: (a,b) => a * b,
    divide: (a,b) => a / b
}

const sign = () => {
    return addButton.style.backgroundColor === "pink" ? "+" : subtractButton.style.backgroundColor === "pink" ? "-" : multiplyButton.style.backgroundColor === "pink" ? "*" : "/"
}

const clearAll = () => {
    num1 = "";
    num2 = "";
    addButton.style.backgroundColor = ""
    subtractButton.style.backgroundColor = ""
    multiplyButton.style.backgroundColor = ""
    divideButton.style.backgroundColor = ""
}

const backspace = () => {
    arr = result.innerText.split("")
    arr.pop();
    result.innerText = arr.join("");
}

one.addEventListener("click", number.one)
two.addEventListener("click", number.two)
three.addEventListener("click", number.three)
four.addEventListener("click", number.four)
five.addEventListener("click", number.five)
six.addEventListener("click", number.six)
seven.addEventListener("click", number.seven)
eight.addEventListener("click", number.eight)
nine.addEventListener("click", number.nine)
zero.addEventListener("click", number.zero)

addButton.addEventListener("click", () => {
    addButton.style.backgroundColor = "pink";
    number1();
});

subtractButton.addEventListener("click", () => {
    subtractButton.style.backgroundColor = "pink";
    number1();
});
multiplyButton.addEventListener("click", () => {
    multiplyButton.style.backgroundColor = "pink";
    number1();
});
divideButton.addEventListener("click", () => {
    divideButton.style.backgroundColor = "pink";
    number1();
});

equalButton.addEventListener("click", () => {
    number2();
    clearDisplay();
    operate();
    clearAll();
})

clearButton.addEventListener("click", clearDisplay);

delButton.addEventListener("click", backspace);

let num1 = "";
let num2 = "";

function operate(operator, n1, n2) {
    n1 = Number(num1);
    n2 = Number(num2);
    operator = sign();
    switch (operator) {
        case "+":
            result.innerText += operation.add(n1, n2)
            break;
        case "-": 
            result.innerText += operation.subtract(n1, n2)
            break;
        case "*":
            result.innerText += operation.multiply(n1, n2)
            break;
        case "/": 
            result.innerText += (operation.divide(n1, n2)).toFixed(2);
            break;   
    }
}
