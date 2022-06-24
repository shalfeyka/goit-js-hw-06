const inputElement = document.querySelector('#validation-input');
const lengthData = document.querySelector('input[data-length]');
const lengthInput = lengthData.dataset.length;

inputElement.addEventListener("blur", (event) => {
  
    if (event.currentTarget.value.length != lengthInput) {
        inputElement.classList.remove('valid');
        inputElement.classList.add('invalid');
       
    }
    else {
        inputElement.classList.remove('invalid');
        inputElement.classList.add('valid');
    }
});