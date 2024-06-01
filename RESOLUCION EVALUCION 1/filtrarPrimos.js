function filtrarPrimos(numerosArray) {
let numerosPrimos = [];

for (let num of numerosArray) {
    if (num <= 1) {
    return false;
    }
    let numPrimo = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        numPrimo = false;
    }
    }
    if (numPrimo) {
    numerosPrimos.push(num);
    }
}
return numerosPrimos;
}
const numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const numerosPrimos = filtrarPrimos(numeros);
console.log(numerosPrimos); // [2, 3, 5, 7, 11]
