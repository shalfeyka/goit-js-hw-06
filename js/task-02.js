const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const liItem = document.createElement('li');
liItem.classList.add('item');
liItem.textContent = 'Potatoes';
console.log(liItem);

const liItemSecond = document.createElement('li');
liItemSecond.classList.add('item');
liItemSecond.textContent = 'Mushrooms';
console.log(liItemSecond);

const liItemThird = document.createElement('li');
liItemThird.classList.add('item');
liItemThird.textContent = 'Garlic';
console.log(liItemThird);

const liItemFour = document.createElement('li');
liItemFour.classList.add('item');
liItemFour.textContent = 'Tomatos';
console.log(liItemFour);

const liItemFive = document.createElement('li');
liItemFive.classList.add('item');
liItemFive.textContent = 'Herbs';
console.log(liItemFive);

const liItemSix = document.createElement('li');
liItemSix.classList.add('item');
liItemSix.textContent = 'Condiments';
console.log(liItemSix);

const listItem = document.querySelector('ul');
listItem.append(liItem, liItemSecond, liItemThird, liItemFour, liItemFive, liItemSix);