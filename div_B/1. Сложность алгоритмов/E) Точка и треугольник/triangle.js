const triangle = (input) => {
	var [d, coords] = input.toString().match(/.+/g);
	var [x0, y0] = coords.split(' ').map(c => Number(c));

	var a = d * y0;
	var b = (d - x0) * d - (d * y0);
	var c = x0 * d;

	if (
		(a >= 0 && b >= 0 && c >= 0) ||
		(a <= 0 && b <= 0 && c <= 0)
	) return '0'; // точка пренадлежит треугольнику или лежит на стороне

	function getDist(x1, y1, x2, y2) {
		return Math.sqrt(
			Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)
		);
	}

	var toA = getDist(0, 0, x0, y0);
	var toB = getDist(d, 0, x0, y0);
	var toC = getDist(0, d, x0, y0);

	var minDist = Math.min(toA, toB, toC);

	return [['1', toA], ['2', toB], ['3', toC]]
		.filter(dists => dists[1] === minDist)
		.sort((distA, distB) => distA[0] - distB[0])[0][0];
}

module.exports = triangle;
