let array = [-1.5, 0.1, 12, 0, -2.2, 0.5, -1, 0.3];

console.log(array);

console.log(array[3]);

// Предпоожение
let arrayMin = array[0];

for (let i = 1; i < array.length; i++) {
    if (array[i] < arrayMin) {
        arrayMin = array[i];
    }
}

// Предпоожение
let arrayMax = array[0];

for (let i = 1; i < array.length; i++) {
    if (array[i] > arrayMax) {
        arrayMax = array[i];
    }
}

for (let i = 0; i < array.length; i++) {
    if (array[i] <= 0) {
        array[i] = arrayMin;
    } else {
        array[i] = arrayMax;
    }
}

console.log(arrayMin, arrayMax, array)