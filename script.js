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

let num1 = "";
let num2 = "";

function sign() {
    return addButton.style.backgroundColor === "pink" ? "+" : subtractButton.style.backgroundColor === "pink" ? "-" : multiplyButton.style.backgroundColor === "pink" ? "*" : "/"
}

function number1() {
    num1 += result.innerText;
    clearDisplay();
}

function number2() {
    num2 += result.innerText;
}

addButton.addEventListener("click", () => {
    addButton.style.backgroundColor = "pink";
    // display.add();
    number1();
});

subtractButton.addEventListener("click", () => {
    subtractButton.style.backgroundColor = "pink";
    // display.subtract();
    getNum.num1();
});
multiplyButton.addEventListener("click", () => {
    multiplyButton.style.backgroundColor = "pink";
    // display.multiply();
    getNum.num1();
});
divideButton.addEventListener("click", () => {
    divideButton.style.backgroundColor = "pink";
    // display.divide();
    getNum.num1();
});

equalButton.addEventListener("click", () => {
    number2();
    clearDisplay();
    operate();
    clear();
})

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

// const operator = {
//     add: (a,b) => a + b,
//     subtract: (a,b) => a - b,
//     multiply: (a,b) => a * b,
//     divide: (a,b) => a / b
// }

function clear() {
    addButton.style.backgroundColor = ""
    subtractButton.style.backgroundColor = ""
    multiplyButton.style.backgroundColor = ""
    divideButton.style.backgroundColor = ""
}

function clearDisplay() {
    result.innerText = "";
}

clearButton.addEventListener("click", clearDisplay);

// const getNum = {
//     num1: function() {
//         index = result.innerText.search(/\D/)
//         arr = (result.innerText).split("")
//         return num1 = Number(arr.slice(0, index).join(""))
//     },
//     num2: function() {
//         index = result.innerText.search(/\D/)
//         arr = (result.innerText).split("")
//         equal = result.innerText.indexOf("=");
//         return num2 = Number(arr.slice(index + 1, equal).join(""))
//     }
// }

// function getNum1() {
//     index = result.innerText.search(/\D/)
//     arr = (result.innerText).split("")
//     num1 = Number(arr.slice(0, index).join(""))
// }

// function getNum2() {
//     index = result.innerText.search(/\D/)
//     arr = (result.innerText).split("")
//     num2 = Number(arr.slice(index + 1).join(""))
// }




// function oneR() {
//     if ((result.innerText).includes("=")) {
//         result.innerText = "";
//     }
//     result.innerText += 1;
// }

// function twoR() {
//     if ((result.innerText).includes("=")) {
//         result.innerText = "";
//     }
//     result.innerText += 2;
// }

// function threeR() {
//     if ((result.innerText).includes("=")) {
//         result.innerText = "";
//     }
//     result.innerText += 3;
// }

// function fourR() {
//     if ((result.innerText).includes("=")) {
//         result.innerText = "";
//     }
//     result.innerText += 4;
// }

// function fiveR() {
//     if ((result.innerText).includes("=")) {
//         result.innerText = "";
//     }
//     result.innerText += 5;
// }

// function sixR() {
//     if ((result.innerText).includes("=")) {
//         result.innerText = "";
//     }
//     result.innerText += 6;
// }

// function sevenR() {
//     if ((result.innerText).includes("=")) {
//         result.innerText = "";
//     }
//     result.innerText += 7;
// }

// function eightR() {
//     if ((result.innerText).includes("=")) {
//         result.innerText = "";
//     }
//     result.innerText += 8;
// }

// function nineR() {
//     if ((result.innerText).includes("=")) {
//         result.innerText = "";
//     }
//     result.innerText += 9;
// }

// function zeroR() {
//     if ((result.innerText).includes("=")) {
//         result.innerText = "";
//     }
//     result.innerText += 0;
// }



// function addR() {
//     result.innerText += "+";
// }

// function subtractR() {
//     result.innerText += "-";
// }

// function multiplyR() {
//     result.innerText += "*";
// }

// function divideR() {
//     result.innerText += "/";
// }

// function equalR() {
//     result.innerText += "=";
// }

// function clearR() {
//     result.innerText = "";
// }

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

// function sepNums() {
//     index = result.innerText.search(/\D/)
//     arr = (result.innerText).split("")
//     num1 = Number(arr.slice(0, index).join(""))
//     num2 = Number(arr.slice(index + 1).join(""))
//     operator = arr[index]
//     result.innerText += "="
//     switch (operator) {
//         case "+":
//             return result.innerText += add(num1, num2)
//             break;
//         case "-": 
//             return result.innerText += subtract(num1, num2)
//             break;
//         case "*":
//             return result.innerText += multiply(num1, num2)
//             break;
//         case "/": 
//             return result.innerText += divide(num1, num2)
//             break;   
//     }
// }

function operate(operator, n1, n2) {
    // result.innerText += "="
    // console.log(num1 = Number((result.innerText).slice(0,(result.innerText).indexOf(/\W/g))))
    // console.log(num2 = Number((result.innerText).slice((result.innerText).indexOf(/\W/g), result.innerText(-1))))
    // num1 = getNum.num1(); 
    // num2 = getNum.num2();
    // index = result.innerText.search(/\D/);
    // arr = (result.innerText).split("");
    n1 = Number(num1);
    n2 = Number(num2);
    operator = sign();
    // addButton.style.backgroundColor = "";
    switch (operator) {
        case "+":
            result.innerText += add(n1, n2)
            break;
        case "-": 
            result.innerText += subtract(n1, n2)
            break;
        case "*":
            result.innerText += multiply(n1, n2)
            break;
        case "/": 
            result.innerText += divide(n1, n2)
            break;   
    }
}