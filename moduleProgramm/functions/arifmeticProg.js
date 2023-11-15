function add(a, b) {
    let p = _privet(a);
    return p + b;
}

function subtraction(a, b) {
    return a - b;
}

function _privet(a) {
    return a + 1;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

export {add, subtraction, multiplication, division};