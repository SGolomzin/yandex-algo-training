const metro = (input) => {
	var [n, i, j] = input.toString().match(/\d+/g).map(el => Number(el));

	return '' + Math.min(
		(n + j - i - 1) % n,
		(n - j - 1 + i) % n
	)
}

module.exports = metro;
