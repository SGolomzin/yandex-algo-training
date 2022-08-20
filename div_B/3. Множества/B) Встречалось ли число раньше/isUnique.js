const isUnique = (input) => {
	var nums = input.toString().match(/\d+/g);
	var set = new Set();

	return nums.map(n => set.has(n)
		? 'YES'
		: set.add(n) && 'NO'
	).join('\n');
}

module.exports = isUnique;
