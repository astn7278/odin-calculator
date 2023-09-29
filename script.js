const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    text.style.color = "#" + randomColor;
});

const add = function(a, b) {
    let total = a + b;
    console.log(total);
}

const subtract = function(a, b) {
    let total = a - b;
    console.log(total);
}

const multiply = function(a, b) {
    let total = a * b;
    console.log(total);
}

const divide = function(a, b) {
    let total = a / b;
    console.log(total);
}

