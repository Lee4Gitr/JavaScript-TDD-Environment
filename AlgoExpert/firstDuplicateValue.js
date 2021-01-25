function firstDuplicateValue(array) {
  let cache = {};
  for (let value of array) {
    if (cache[value]) {
      return value;
    }
    cache[value] = true;
  }
  return -1;
}

console.log(firstDuplicateValue([2, 1, 5, 2, 3, 3, 4]))