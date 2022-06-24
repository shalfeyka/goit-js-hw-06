const inputSize = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");

const fontSize = inputSize.addEventListener("input", (event) => {
    textElement.style.fontSize = event.currentTarget.value + "px";
});