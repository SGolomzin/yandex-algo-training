const palindromes = (input) => {
	var [word] = input.toString().match(/\S+/g);

	var l = 0,
		r = word.length - 1,
		cost = 0;

	while (l < r) {
		if (word[l] !== word[r]) cost++;
		l++;
		r--;
	}

	return cost.toString();
}

module.exports = palindromes;