// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

import { isPrime } from '/helperFunctions';

var sumPrimes = (index) => {
    let primes = [0];

    for (let i = 0; i < index; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes.reduce((total, num) => { return total + num })
}
var isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) {
            return false;
        }

    return num > 1;
}