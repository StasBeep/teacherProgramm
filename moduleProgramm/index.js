"use strict";
import {add, multiplication, subtraction, division} from './functions/arifmeticProg.js';
import {rootElement} from './functions/drygaiFun.js';

let a = +prompt("Введите a");
let b = +prompt("Введите b");

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