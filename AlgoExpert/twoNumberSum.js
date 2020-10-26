// Two Number Sum

// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in sorted order. If no two numbers sum up to the target sum, the function should return an empty array. Assume that there will be at most one pair of numbers summing up to the target sum.

// Sample input: [3, 5, -4, 8, 11, 1, -1, 6], 10
// Sample output: [-1, 11]

// Algorithms with Big O analysis

// Time: O(n^2) Space: O(1)

function twoNumberSum(array, targetSum) {
  // Write your code here.
	
	for ( let i = 0; i <= array.length - 2; i++) {
		let leftNum = array[i];
		for ( let j = i + 1; j <= array.length - 1; j++) {
			let rightNum = array[j];
			
			if (leftNum + rightNum === targetSum) {
				return [leftNum, rightNum].sort((a, b) => a - b);
			}
		}
	}
	return [];
}

// Time: O(n) Space: O(n)

function twoNumberSum(array, targetSum) {
  let dict = {};

  for (let num of array) {
    let target = targetSum - num;

    if (dict[num]) {
      return [num, target].sort((a, b) => a - b);
    } else {
      dict[target] = true;
    }
  }
  return [];
}

// Time: O(n log n) Space: O(1) 

function twoNumberSum(array, targetSum) {
  // Write your code here.
	array.sort((a,b) => a - b);
	let left = 0;
	let right = array.length - 1;
	
	while (array[left] < array[right]) {
		let currentSum = array[left] + array[right];
		if (currentSum === targetSum) {
			return [array[left], array[right]];
		} else if (currentSum < targetSum) {
			left++;
		} else if (currentSum > targetSum) {
			right--;
		}
	}
	return [];
}
