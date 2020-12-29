'use strict'


let input;
const numbers = [];
let total = 0;


while (input !== null) {
   input = prompt('Введите число');
   
   if (input === null) {
      break;
   }
   
   const incorrectInput = isNaN(input);

   if (incorrectInput) {
      alert('Было введено не число, попробуйте еще раз');

   } else {
      input = Number(input);
      numbers.push(input);
      console.log(numbers);
   }     
};

if (numbers.length > 0) {
   for (const number of numbers) {
      total += number;
   }
      console.log(`Общая сумма чисел равна ${total}`);
};