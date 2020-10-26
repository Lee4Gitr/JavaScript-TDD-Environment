let BubbleSort = (array) => {
  let isSorted = false;
  let counter = 0;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1 - counter; i++) {
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array)
        isSorted = false;
      }
    }
    counter += 1;
  }
  return array;
}

let swap = (i, j, array) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}