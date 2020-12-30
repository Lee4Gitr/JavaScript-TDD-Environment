function firstDuplicateValue(array) {
  let cache = {};
  for (let value in array) {
    if (cache[value]) {
      return value;
    }
    cache[value] = true;
  }
  return -1;
}

firstDuplicateValue([2, 1, 5, 2, 3, 3, 4])