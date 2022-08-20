const guess = (input) => {
	let [n, ...guesses] = input.toString().match(/.+/g);
	input = null;
	n = Number(n);
	let possibleAnswers = Array(n);
	for (let i = 0; i < n; i++) {
		possibleAnswers[i] = i + 1;
	}
	possibleAnswers = new Set(possibleAnswers);

	let i = 0;
	while (guesses[i] !== 'HELP') {
		let guessSet = new Set(guesses[i].split(' ').map(Number));
		let answer = guesses[i + 1];

		if (answer === 'YES') {
			for (const aValue of possibleAnswers) {
				if (!guessSet.has(aValue)) {
					possibleAnswers.delete(aValue);
				}
			}
		} else {
			for (const bValue of guessSet) {
				if (possibleAnswers.has(bValue)) {
					possibleAnswers.delete(bValue);
				}
			}
		}

		guesses[i] = guesses[i + 1] = null;
		i += 2;
	}

	return [...possibleAnswers].join(' ');
}

module.exports = guess;
