'use strict';

const shoppingList = [
   'birra', // lista della spesa
   'vodka',
   'vino',
   'tequila',
   'rum',
   'acqua',
];
// SOLUZIONE 1 OKAY 👌
// const shoppingListHTML = document.getElementById('shopping-list');
// let i = 0;
// while (i < shoppingList.length) {
//    const shoppingItem = shoppingList[i];
//    const newLi = document.createElement('li');
//    shoppingListHTML.append(newLi);
//    newLi.innerHTML = shoppingItem;
//    i++;
// }

// soluzione 2 non funziona 💩 non so cosa cambia🤷‍♂️
const shoppingListHTML = document.getElementById('shopping-list');
let i = 0;
while (i < shoppingList.length) {
   const shoppingItem = shoppingList[i];
   const newLi = document.createElement('li');
   shoppingListHTML.append((newLi.innerHTML = shoppingItem));
   i++;
}
