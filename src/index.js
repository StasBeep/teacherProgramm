import { ffirstElement, hardElement } from './_functions';

let a = 7;
let b = 10;

let result;


// Простой вариант возврата
result = ffirstElement(a);

console.log(result);

// Возврат нескольких значений
result = hardElement(a, b);

// Обратить внимание как вернулось!
console.log(result);

// Вывод определённого значения
console.log(result.t);
console.log(result.s);