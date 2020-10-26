
// O(n) time | O(1) space 
let findThreeLargestNumbers = (array) => {
  const threeLargest = [null, null, null];
  for (const num of array) {
    updateLargest(threeLargest, num);
  }
  return threeLargest;
}

let updateLargest = (threeLargest, num) => {
  if (threeLargest[2] === null || num > threeLargest[2]) {
    shiftAndUpdate(threeLargest, num, 2);
  } else if (threeLargest[1] === null || num > threeLargest[1]) {
    shiftAndUpdate(threeLargest, num, 1);
  } else if (threeLargest[0] === null || num > threeLargest[0]) {
    shiftAndUpdate(threeLargest, num, 0);
  }
}

let shiftAndUpdate = (array, num, index) => {
  for (let i = 0; i <= index; i++) {
    if (i === index) {
      array[i] = num;
    } else {
      array[i] = array[i + 1];
    }
  }
}
findThreeLargestNumbers([0, 1, 2, 3, 4, 5, 6, 78, 123, 456, -123, 38763456])