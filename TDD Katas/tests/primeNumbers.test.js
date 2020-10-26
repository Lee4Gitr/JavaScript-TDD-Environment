import generatePrimeFactors from "../primeNumbers";

test('1 should return an empty array', () => {
  expect(generatePrimeFactors(1)).toStrictEqual([])
});

test('2 should return an array with 2 in it', () => {
  expect(generatePrimeFactors(2)).toStrictEqual([2])
});

test('3 should return an array with 3 in it', () => {
  expect(generatePrimeFactors(3)).toStrictEqual([3])
});

test('4 should return an array of [2, 2]', () => {
  expect(generatePrimeFactors(4)).toStrictEqual([2, 2])
});

test('5 should return an array of [5]', () => {
  expect(generatePrimeFactors(5)).toStrictEqual([5])
});

test('6 should return an array of [2, 3]', () => {
  expect(generatePrimeFactors(6)).toStrictEqual([2, 3])
});

test('7 should return an array of [7]', () => {
  expect(generatePrimeFactors(7)).toStrictEqual([7])
});

test('8 should return an array of [2, 2, 2]', () => {
  expect(generatePrimeFactors(8)).toStrictEqual([2, 2, 2])
});

test('9 should return an array of [3, 3]', () => {
  expect(generatePrimeFactors(9)).toStrictEqual([3, 3])
});