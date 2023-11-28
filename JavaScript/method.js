let d1 = +prompt("Введите d1:");;
let S1 = Ploshadi(d1);
console.log("Площадь 1 круга " + S1);

let d2 = +prompt("Введите d2:");
let S2 = Ploshadi(d2);
console.log("Площадь 2 круга " + S2);

let d3 = +prompt("Введите d3:");
let S3 = Ploshadi(d3);
console.log("Площадь 3 круга " + S3);

/**
 * Функция (метод) расчёта площади круга
 * @param { Number } D
 * @returns Number
 */
function Ploshadi(D) {
    let S = Math.PI * Math.pow(D, 2) / 4;
    return S;
}