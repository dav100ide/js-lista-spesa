'use strict';

const shoppingList = [
   'birra', // lista della spesa
   'vodka',
   'rum',
   'acqua',
];

const shoppingListHTML = document.getElementById('shopping-list');
let i = 0;
while (i < shoppingList.length) {
   shoppingListHTML.innerHTML += `<li>${shoppingList[i]}</li>`;
   i++;
}

//bonus
const addItemBtn = document.getElementById('added-item__btn');
addItemBtn.addEventListener('click', function () {
   const addedItem = document.getElementById('added-item').value;
   shoppingListHTML.innerHTML += `<li>${addedItem}</li>`;
   console.log(shoppingList);
});
