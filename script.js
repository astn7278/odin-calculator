const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    text.style.color = "#" + randomColor;
});
