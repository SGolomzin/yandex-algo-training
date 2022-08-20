const licensePlates = (input) => {
	let [m, ...rest] = input.toString().match(/.+/g);
	m = Number(m);

	let witnesses = Array(m);
	for (let i = 0; i < m; i++) {
		witnesses[i] = rest[i];
	}

	let n = Number(rest[m]);
	let coherences = Array(m);

	for (let i = m + 1; i < m + n + 1; i++) {
		let licensePlate = new Set(rest[i].split(''));

		let cnt = 0;
		witnesses.forEach(witness => {
			if (witness.split('').every(ch => licensePlate.has(ch))) {
				cnt++;
			}
		})

		if (coherences[cnt]) {
			coherences[cnt].push(rest[i]);
		} else {
			coherences[cnt] = [rest[i]];
		}
	}

	for (let i = m; i >= 0; i--) {
		if (coherences[i]) return coherences[i].join('\n');
	}
}

module.exports = licensePlates;
