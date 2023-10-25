
let inp = document.querySelector('#input');
let btn = document.querySelector('#button');
let txt = document.querySelector('#text');
console.log(inp);

btn.addEventListener('click', changText);


function changText() {
    let p = inp.value;
    console.log(p);
    txt.innerHTML = p;
}