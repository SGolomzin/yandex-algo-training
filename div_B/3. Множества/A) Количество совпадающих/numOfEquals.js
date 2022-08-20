const numOfEquals = (input) => {
	var [numsA, numsB] = input.toString().match(/.+/g);
	numsA = numsA.split(' ');
	numsB = numsB.split(' ');

	var set = new Set(numsA);
	var cnt = 0;

	numsB.forEach(n => {
		if (set.has(n)) cnt++;
	});

	return cnt.toString()
}

module.exports = numOfEquals;
