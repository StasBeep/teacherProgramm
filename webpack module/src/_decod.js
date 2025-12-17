import { littera, numCode } from './_arrayShifr';

let result;
let text;
let cod;

export function decoder() {
    result = "";
    text = inpDecoder.value;
    cod = text.split(" ");

    for (let i = 0; i < cod.length; i++) {
        for (let j = 0; j < numCode.length; j++) {
            if (cod[i] == nm[j]) {
                res += littera[j];
                break;
            }
        }
    }
    inpDecoder.value = res;
}

console.log(result);