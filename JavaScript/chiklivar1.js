for (let i = 0; i < 100; i++) {
    console.log("Привет");
}

let j = 0;

while (j < 100) {
    console.log('while');
    j++;
}


let p = 10000;

do {
    console.log('do');
    p++;
} while (p < 100);


for (let i = -4; i <= 4; i += 0.5) {
    if (i <= 0) {
        console.log(Math.pow(i, 2) - 1);
    } else if (i > 0 && i <= 1.5) {
        console.log(Math.cos(i));
    } else {
        console.log(Math.sin(i-1))
    }
}