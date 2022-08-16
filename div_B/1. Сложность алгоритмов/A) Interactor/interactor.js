const interactor = (input) => {
	var [r, i, c] = input.toString().match(/\S+/gm).map(el => Number(el));

	switch (i) {
		case 0:
			return r ? '3' : String(c);
		case 1:
			return String(c);
		case 4:
			return r ? '3' : '4';
		case 6:
			return '0';
		case 7:
			return '1';
		default:
			return String(i);
	}
}

module.exports = interactor;