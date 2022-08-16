const validateDate = (input) => {
	var [x, y] = input.toString().match(/\d+/g).map(el => Number(el));

	return (x <= 12 && y <= 12 && x != y) ? '0' : '1';
}

module.exports = validateDate;