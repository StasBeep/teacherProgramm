"use strict";
import {
    add,
    multiplication,
    subtraction,
    division
} from './functions/arifmeticProg.js';
import {
    rootElement
} from './functions/drygaiFun.js';
import {
    checkStartTimer
} from './functions/timer.js'

//let a = +prompt("Введите a");
//let b = +prompt("Введите b");

let a = 8;
let b = 5;

let result = add(a, b);

console.log(result);

result = subtraction(a, b);

console.log(result);

result = multiplication(a, b);

console.log(result);

result = division(a, b);

console.log(result);

result = rootElement(a);

console.log(result);

result = rootElement(b);

console.log(result);

//Создай переменную кнопки в которой лежит физическиая кнопка из HTML с ID (#) "start"
// Создай переменную в которой лежат все данные класса (.) "time". По сути создаётся массив с данными к которому надо обратиться в будущем
//Создай переменную в которой лежит строка вывода

let btn = document.querySelector(`#start`);

btn.addEventListener("click", checkStartTimer); // Если в переменной btn добавиться событие "клик", то выполни функцию "startTimer".