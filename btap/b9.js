"use strict";
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
function allPrimes(arr) {
    for (let num of arr) {
        if (!isPrime(num)) {
            return false;
        }
    }
    return true;
}
let arr1 = [1, 3, 4, 2, 7, 9, 32, 43, 12, 45];
console.log(allPrimes(arr1));
let arr2 = [3, 5, 7, 11, 13];
console.log(allPrimes(arr2));
