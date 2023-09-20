let x = -6;
let c = 5;
let y = -4;
let z = 3;

let h;

if(y*z > 0 && x > 0) {
    // Предположение
    let minEl = c+y;
    if(minEl < Math.sqrt(x)){
        minEl = Math.sqrt(x);
    }

    // Предположение
    let maxEl = x + z;

    if(maxEl < y) {
        maxEl = y;
    }

    if(maxEl < minEl) {
        maxEl = minEl;
    }

    h = maxEl;
} else if(y*z < 0 && x > 0) {
    let minEl = Math.sin(x);

    if(minEl > Math.pow(z,3)) {
        minEl = Math.pow(z,3);
    }

    h = minEl;
} else {
    h = 1;
}


console.log(h)