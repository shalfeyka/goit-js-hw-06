function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
  bgColor: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
}

refs.button.addEventListener('click', onChangeColor);

function onChangeColor() {
  const hexColor = getRandomHexColor();
  refs.body.style.backgroundColor = hexColor;
  refs.bgColor.textContent = hexColor;

}