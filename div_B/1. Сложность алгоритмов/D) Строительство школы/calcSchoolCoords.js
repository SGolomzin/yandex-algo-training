const calcSchoolCoords = (input) => {
	var [n, coords] = input.toString().match(/.+/g);
	coords = coords.split(' ').map(c => Number(c));

	var median = Math.floor(n / 2);

	return '' + coords[median];
}

module.exports = calcSchoolCoords;
