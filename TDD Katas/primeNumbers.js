let generatePrimeFactors = (num) => {
  let factors = [];
  for (let divisor = 2; num > 1; divisor += 1) {
    for (; num % divisor === 0; num /= divisor) factors.push(divisor);
  }
  return factors;
}

export default generatePrimeFactors; 