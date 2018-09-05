'use strict'

let userInput;
const numbers = [];
let total = 0;

do {
    userInput = prompt('Введите число');
    if (isNaN(userInput)) {
        alert('Было введено не число, попробуйте еще раз')
    } else {
        numbers.push(Number(userInput));
    }
} while (userInput != null);

for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
}
if (total !== 0) {
    alert(`Общая сумма чисел равна ${total}`);
} else {
    alert('Массив пуст!');
}
