const prefixSum = (input) => {
	var [params, ...rest] = input.toString().match(/.+/g);
	var [n, q] = params.split(' ');
	var prSum;
	[prSum, ...rest] = rest;
	prSum = prSum.split(' ').map(Number);

	for (let i = 1; i < prSum.length; i++) {
		prSum[i] = prSum[i] + prSum[i - 1];
	}

	var result = [];

	for (let query of rest) {
		var [start, end] = query.split(' ');
		start -= 2;
		end -= 1;
		result.push(start === -1
			? prSum[end]
			: prSum[end] - prSum[start]
		);
	}

	return result.join('\n');
}

module.exports = prefixSum;
