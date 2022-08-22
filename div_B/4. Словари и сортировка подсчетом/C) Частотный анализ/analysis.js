const analysis = (input) => {
	let words = input.toString().match(/\S+/g);

	let result = Object.entries(words.reduce((acc, word) => {
		acc[word] = acc[word] ? ++acc[word] : 1;
		return acc;
	}, {}))
		.sort((a, b) => a[0] > b[0] ? 1 : -1)
		.sort((a, b) => b[1] - a[1])
		.map(([word, n]) => word);

	return result.join('\n');
}

module.exports = analysis;