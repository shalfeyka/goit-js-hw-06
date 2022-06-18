const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
console.log(input);
console.log(output);

input.addEventListener("input", (event) => {
    if (input.value === " ") {
        output.textContent === "Anonymous"
    }

        output.textContent = event.currentTarget.value;
        console.log(event.currentTarget.value);
});