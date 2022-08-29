// TODO: ML - на 35 тесте. Переделать
const sumOfThree = (input) => {
	var [S, A, B, C] = input.toString().match(/.+/g);
	const transform = (nums) => nums.split(' ').slice(1).map(Number);

	C = transform(C).reduce((acc, n, i) => {
		acc[n] = acc[n] !== undefined ? acc[n] : i;
		return acc;
	}, {});

	A = transform(A);
	B = transform(B);

	for (let i = 0; i < A.length; i++) {
		for (let j = 0; j < B.length; j++) {
			if (C[S - A[i] - B[j]] !== undefined) {
				return [i, j, C[S - A[i] - B[j]]].join(' ');
			}
		}
	}
	return '-1';
}

module.exports = sumOfThree;
