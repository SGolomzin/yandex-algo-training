const benches = (input) => {
	var [params, blocks] = input.toString().match(/.+/gm);
	var [l, k] = params.split(' ');
	blocks = blocks.split(' ');

	if (k === '1') return blocks[0];

	var middle = Math.floor(l / 2);

	for (let i = 1; i < k; i++) {
		if (blocks[i - 1] < middle && blocks[i] >= middle) {
			return Number(blocks[i]) === middle && l % 2
				? blocks[i]
				: `${blocks[i - 1]} ${blocks[i]}`;
		}
	}
}

module.exports = benches;