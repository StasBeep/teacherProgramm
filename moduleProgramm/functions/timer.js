let timeinput = document.querySelectorAll(`.time`);
let timeoutput = document.querySelector(`#outputtext`);
let timerInterval;
let stop = false; // переменная которая выключает таймер

let y;
let d;
let h;
let m;
let s;
let year;

function checkStartTimer() {
    if (timerInterval >= 1) {
        clearInterval(timerInterval);
        _startTimer();
    } else {
        _startTimer();
    }
}

function _startTimer() {

    //добавь в переменную то, что лежит  в пункте массива входных данных
    y = +timeinput[0].value || 0;
    d = +timeinput[1].value || 0;
    h = +timeinput[2].value || 0;
    m = +timeinput[3].value || 0;
    s = +timeinput[4].value || 0;
    year = Math.floor(y / 4);
    d = d + year;
    if (s == 0) {
        s++;
    }

    timerInterval = setInterval(_changeTimer, 1000); // переменная для включения (изменения времени в таймере) таймера с интервалом в 1 секунду
}

function _changeTimer() { //Функция измени время в таймере

    // Убери одну секунду, в переменную выключения запиши значение, если всё == 0, то выключи, если нет, то нет.
    // Если переменная изменилать на выключи, то убери интервал из переменной, дабы таймер перестал работать

    if (s == 1 && m > 0) {
        s = 60;
        m--;
    } else if (s == 1 && m == 0 && h > 0) {
        m = 59;
        s = 60;
        h--;
    } else if (s == 1 && m == 0 && h == 0 && d > 0) {
        h = 23;
        m = 59;
        s = 60;
        d--;
    } else if (s == 1 && m == 0 && h == 0 && d == 0 && y > 0) {
        d = 364;
        h = 23;
        m = 59;
        s = 60;
        y--;
    }

    s--;
    stop = _checkTimer(y, d, h, m, s);
    if (stop == true) {
        clearInterval(timerInterval);
        _changeText(y, d, h, m, s);
    } else {
        _changeText(y, d, h, m, s);
    }
}

function _changeText(y, d, h, m, s) {
    timeoutput.innerHTML = `${y} : ${d} : ${h} : ${m} :  ${s}`; // Найди переменные из тела и перенеси их в поле вывода
}

function _checkTimer(y, d, h, m, s) {
    if (y == 0 && d == 0 && h == 0 && m == 0 && s == 0) {
        return true;
    } else {
        return false;
    } //Можно ли убрать полность else, по сути же если не истина, то не входи, а значит ничего не делай
}

export {
    checkStartTimer
}