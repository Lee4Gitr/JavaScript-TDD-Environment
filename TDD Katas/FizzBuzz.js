let FizzBuzz = (num) => {

  if (!num) {
    return [];
  }

  let FizzBuzzArray = [];

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      FizzBuzzArray.push('FizzBuzz')
    } else if (i % 3 === 0) {
      FizzBuzzArray.push('Fizz');
    } else if (i % 5 === 0) {
      FizzBuzzArray.push('Buzz');
    } else {
      FizzBuzzArray.push(i);
    }
  }
  return FizzBuzzArray;
}

export default FizzBuzz;