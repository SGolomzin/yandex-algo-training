const maxSum = (input) => {
	var [n, arr] = input.toString().match(/.+/g);
	arr = arr.split(' ').map(Number);

	var max = arr[0];
	var partialSum = arr[0];

	for (let i = 1; i < Number(n); i++) {
		if (partialSum < 0) partialSum = 0;
		partialSum += arr[i];
		max = Math.max(max, partialSum);
	}

	return max.toString();
}

module.exports = maxSum;
