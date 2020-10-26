var calculatePrime = (nthPrime) => {
    let primes = [];

    while (primes.length <= nthPrime) {
        for (let i = 1; primes.length < nthPrime; i++) {
            if (isPrime(i)) {
				primes.push(i);
            }
        }

		let formattedAnswerField = `${nthPrime} Prime`;
        let answer =
        {
            [formattedAnswerField]: primes[primes.length - 1],
            primes: primes
        }
        return answer
    }
}

var isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) {
            return false;
        }

    return num > 1;
}