import { littera, numCode } from './_arrayShifr';

let result = "";
let cod;
let text = "";

export function coder (inpCoder) {
    text = "";
    text = inpCoder.value;
    cod = text.split("");

    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < littera.length; j++) {
            if (text[i] == littera[j]) {
                result += numCode[j] + " ";
                break;
            }
        }
    }
    inpCoder.value = result;
}

console.log(result);