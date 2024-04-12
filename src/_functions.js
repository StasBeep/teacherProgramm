let p = 7;


function ffirstElement(x) {
    return Math.pow(x, 2);
}

function hardElement(x, y) {
    let t = p + x;
    let s = y + x + p;

    // ! Не на всех языках программирования так можно делать
    return { t, s };
}

export { ffirstElement, hardElement };