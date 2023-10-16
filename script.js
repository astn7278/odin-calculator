//Basic Math operators
const add = function (a, b) {
    let total = (+a) + (+b);
    return total;
};

const subtract = function (a, b) {
    let total = a - b;
    return total;
};

const multiply = function (a, b) {
    let total = a * b;
    return total;
};

const divide = function (a, b) {
    if (b == 0) {
        alert("What are you trying to do, rip a hole in the space-time continuum???")
    }
    else {
        let total = a / b;
        return total;
    }

};

//Main operator function
const num1 = undefined;
const num2 = undefined;
const operator = undefined;

const operate = function (num1, operator, num2) {
    if (operator == "add") {
        return add(num1, num2);
    } else if (operator == "subtract") {
        return subtract(num1, num2);
    } else if (operator == "multiply") {
        return multiply(num1, num2);
    } else if (operator == "divide") {
        return divide(num1, num2);
    } 
    else alert("No Operator Selected");
};


//Updating display with numbers
const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".numberButton");
let currentDisplay = "";
numberButtons.forEach((numberButton) =>
    numberButton.addEventListener("click", () => {
        currentDisplay += numberButton.textContent;
        display.textContent = currentDisplay;
    })
);

//Setting operator and first number
const operatorButtons = document.querySelectorAll(".operatorButton");
let selectedOperator = "";
let firstNumber = "";

operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', function() {
        selectedOperator = this.value;
        if (currentDisplay !== "") {
            firstNumber = currentDisplay;
            currentDisplay = "";
        } 
    })
})  

//Enter button function
const enterButton = document.querySelector("#enter")
let newTotal = "";
enterButton.addEventListener('click', function() {
    newTotal = (operate(firstNumber, selectedOperator, currentDisplay));
    display.textContent = Math.round(newTotal * 1000) / 1000;
    currentDisplay = newTotal;
})