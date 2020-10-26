/** 
 * Mersenne Primes are primes that are 1 less than a power of 2. (2^n - 1)
 * Suprisingly in binary, 2^n - 1 is just a binary number with n ones.
 * Example: 127 === 111,1111; 8191 === 1,1111,1111,1111
*/

export var calculateNthMersennePrime = (nthMersennePrime) => {

    let mersennePrimes = [];

    while (mersennePrimes.length <= nthMersennePrime) {
        for (let i = 1; mersennePrimes.length < nthMersennePrime; i++) {
            let indexIsPrime = isPrime(i);
            if (indexIsPrime) {
                let mersennePrime = (Math.pow(2, i) - 1);
                if (isPrime(mersennePrime)) {
                    let formattedKey = `2^${i}-1`;
                    mersennePrimes.push({
                        [formattedKey]: mersennePrime,
                        'Binary': mersennePrime.toString(2)
                    })
                }
            }
        }

        let formattedAnswerField = `${appendOrdinalIndicator(nthMersennePrime)} Mersenne Prime`;
        let answer =
        {
            [formattedAnswerField]: mersennePrimes[mersennePrimes.length - 1],
            "Mersenne Primes": mersennePrimes
        }
        return answer;
    }
}

var isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) {
            return false;
        }

    return num > 1;
}

var appendOrdinalIndicator = num => {
    let numString = num ? num.toString() : '';

    let lastDigit = numString[numString.length - 1];
    let penultimateDigit = numString[numString.length - 2];

    let lastTwoDigits = penultimateDigit + lastDigit;

    if (isNaN(lastDigit)) {
        return 'Not a Number';
    }
    switch (lastTwoDigits) {
        case '11':
            numString += 'th';
            break;
        case '12':
            numString += 'th';
            break;
        case '13':
            numString += 'th';
            break;
        default:
            switch (lastDigit) {
                case '1':
                    numString += 'st';
                    break;
                case '2':
                    numString += 'nd';
                    break;
                case '3':
                    numString += 'rd';
                    break;
                default:
                    numString += 'th';
            }
    }
    return numString || '';
}