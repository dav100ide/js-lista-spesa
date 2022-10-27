'use strict';

const shoppingList = [
   'birra', // lista della spesa
   'vodka',
   'vino',
   'tequila',
   'rum',
   'acqua',
];
const shoppingListHTML = document.getElementById('shopping-list');
let i = 0;
while (i < shoppingList.length) {
   const shoppingItem = shoppingList[i];
   const newLi = document.createElement('li');
   shoppingListHTML.append(newLi);
   newLi.innerHTML = shoppingItem;
   i++;
}
