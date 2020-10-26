// Time O(n^2) | Space O(1)
let selectionSort = (array) => {
  let currentIndex = 0;
  while (currentIndex < array.length - 1) {
    let smallestIndex = currentIndex;
    for (let i = 0; i < array.length; i++) {
      if (array[smallestIndex] > array[i]) {
        smallestIndex = i;
      }
    }
    swap(currentIndex, smallestIndex, array)
    currentIndex + 1;
  }
  return array;
}
let swap = (i, j, array) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}