let y;

// C использованием цикла for
for(let x = 0; x <= 10; x+=0.5) {
    y = 0.5 * Math.exp(Math.sin(x)) - x - 1;
    console.log(y);
}

console.log("--------------------------");

// С использованием цикла while
let x = 0;

while (x <= 10) {
    y = 0.5 * Math.exp(Math.sin(x)) - x - 1;
    x += 0.5;
    console.log(y);
}

console.log("--------------------------");

// С использованием цикла do while
x = 0;

do {
    y = 0.5 * Math.exp(Math.sin(x)) - x - 1;
    x += 0.5;
    console.log(y);
} while (x <= 10)