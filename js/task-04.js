const decrButton = document.querySelector("[data-action='decrement']");
const incrButton = document.querySelector("[data-action='increment']");
const valueCounter = document.querySelector("#value");

let counterValue = 0;

decrButton.addEventListener('click',() => {
    counterValue -= 1;
    valueCounter.textContent = counterValue;
  
});

incrButton.addEventListener('click', ()=> {
    counterValue +=1;
    valueCounter.textContent = counterValue;
  
})