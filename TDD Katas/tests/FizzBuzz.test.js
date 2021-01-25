import FizzBuzz from '../FizzBuzz';

test('Expect 0 to return an empty Array', () => {
  expect(FizzBuzz(0)).toStrictEqual([])
});

test('Expect 1 return 1 in an Array', () => {
  expect(FizzBuzz(1)).toStrictEqual([1])
});

test('Expect 3 to return [1, 2, Fizz]', () => {
  expect(FizzBuzz(3)).toStrictEqual([1, 2, "Fizz"])
});

test('Expect 5 to return [1, 2, Fizz, 4, Buzz]', () => {
  expect(FizzBuzz(5)).toStrictEqual([1, 2, "Fizz", 4, "Buzz"])
});

test('Expect 15 to return [1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz]', () => {
  expect(FizzBuzz(15)).toStrictEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"])
});

test('Expect -3 to return []', () => {
  expect(FizzBuzz(-3)).toStrictEqual([])
});