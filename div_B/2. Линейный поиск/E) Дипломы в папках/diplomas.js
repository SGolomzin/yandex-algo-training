const diplomas = (input) => {
	var [n, folders] = input.toString().match(/.+/gm);
	folders = folders.split(' ');

	var max = -Infinity;
	var sum = folders.reduce((acc, numOfDiplomas) => {
		max = Math.max(max, Number(numOfDiplomas));
		return acc += Number(numOfDiplomas);
	}, 0);

	return (sum - max).toString();
}

module.exports = diplomas;