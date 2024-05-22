"use strict";

let btn = document.querySelector("#play");
let timeInp = document.querySelectorAll(".time");
let texttime = document.querySelector("#textime");
let soundTrack = document.getElementById('soundtrack');
let timerId;
let k = false;

let h;
let m;
let s;

console.log(btn);
console.log(timeInp);
console.log(texttime);

btn.addEventListener('click', playTimer);

function playTimer() {
    h = timeInp[0].value;
    m = timeInp[1].value;
    s = timeInp[2].value;
    timerId = setInterval(timerChange, 1000);
}

function timerChange() {
    s--;
    k = checkTimer(h, m, s);
    if (k) {
        clearInterval(timerId);
        soundTrack.src = './sound/pedro.mp3';
        soundTrack.play();
    }
    changeText(h, m, s);
}

function changeText(h, m, s) {
    texttime.innerHTML = `${h} : ${m} : ${s}`;
}

function checkTimer(h, m, s) {
    if (h == 0 && m == 0 && s == 0) {
        return true;
    }
    return false;
}