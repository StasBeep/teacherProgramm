import { coder } from './_cod';
import { decoder } from './_decod';

let btn2 = document.getElementById('btndecoder');
let inpDecoder = document.getElementById('decoder');

let btn = document.getElementById('btncoder');
let inpCoder = document.getElementById('coder');

btn2.addEventListener('click', () => decoder(inpCoder));
btn.addEventListener('click', () => coder(inpCoder) );
