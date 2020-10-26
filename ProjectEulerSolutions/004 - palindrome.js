var palindrome = () => {
	let max = { value: 0, i: 0, j: 0, arr: [] };
	for (let i = 999; i > 100; i--) {
		for (let j = i; j > 100; j--) {
			let product = i * j;
			if (isPalindrome(product)) {
				max.arr.push([i, j, product]);
				if (product > max.value) {
					max.value = product;
					max.i = i;
					max.j = j;
				}
			}
		}
	}
	return max;
}

let isPalindrome = (arr) => {
	let leftIndex = 0;
	let rightIndex = arr.toString().length - 1;

	let stringArr = arr.toString();

	while (leftIndex < rightIndex) {
		if (stringArr[leftIndex] === stringArr[rightIndex]) {
			leftIndex++;
			rightIndex--;
		} else {
			return false;
		}

	}
	return true;
}

palindrome();

isPalindrome("abcba")