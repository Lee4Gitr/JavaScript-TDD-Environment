var sumSquareDiff = (num) => {
	let squareOfSum = 0;
	let sumOfSquares = 0;

	for (let i = 0; i <= num; i++) {
		squareOfSum += i;
		sumOfSquares += (i * i);

	}

	let answer = {
		answer: (squareOfSum * squareOfSum) - sumOfSquares,
		squareSum: squareOfSum * squareOfSum,
		sumSquares: sumOfSquares,
	}
	return answer;

}