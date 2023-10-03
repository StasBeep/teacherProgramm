

let operand = +prompt("Введите число");

switch (operand) {
    case 5:
        console.log("5 = " + operand);
        break;
    case 10:
        console.log("10 = " + operand);
        break;
    case -2:
        console.log("-2 = " + operand);
        break;
    case -6:
        console.log("-6 = " + operand);
        break;
    case 0.5:
        console.log("0.5 = " + operand);
        break;
    default:
        console.log('Вы ошиблись');
}