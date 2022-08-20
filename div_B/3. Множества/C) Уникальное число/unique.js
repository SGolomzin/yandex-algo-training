const unique = (input) => {
	var nums = input.toString().match(/\d+/g);
	let setResult = new Set();
	let set = new Set();

	nums.forEach(n => {
		if (!set.has(n)) {
			set.add(n);
			setResult.add(n);
		} else {
			setResult.delete(n);
		}
	});

	return [...setResult].join(' ');
}

module.exports = unique;
