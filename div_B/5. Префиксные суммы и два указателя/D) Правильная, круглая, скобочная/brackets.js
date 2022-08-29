const brackets = (input) => {
	var brackets = input.toString().replace(/\s/, '');
	var ln = brackets.length;

	if (ln % 2 || brackets[0] === ')') return 'NO';

	var n = 0;

	for (let i = 0; i < ln; i++) {
		n += brackets[i] === '(' ? 1 : -1;
		if (n < 0) return 'NO';
	}

	return n ? 'NO' : 'YES';
}

module.exports = brackets;
