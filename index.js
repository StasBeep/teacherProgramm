import { litera } from "./_mainlogic.js";

const inp = document.querySelector("#inp");
const btn = document.querySelector("#btn");
const text = document.querySelector("#text");
const time = document.querySelector("#time");

btn.addEventListener("click", () => litera(inp, text));

let a = 10;

const timeDelta = setInterval(() => {
  console.log(a);
  a++;
  time.innerHTML = a;
  if (a === 15) {
    clearInterval(timeDelta);
    alert("Time is up!");
  }
}, 1000);
