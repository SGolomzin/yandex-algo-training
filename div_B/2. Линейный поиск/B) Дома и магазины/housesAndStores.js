const housesAndStores = (input) => {
	var street = input.toString().match(/[012]/g);

	var dists = Array(10);

	for (let i = 0, d = 0, fl = false; i < street.length; i++) {
		var currentBuilding = Number(street[i]);

		if (currentBuilding === 2) {
			fl = true;
			d = 0;
		}

		if (fl && currentBuilding === 1) {
			dists[i] = d;
		}

		if (fl) d++;
	}

	for (let i = street.length - 1, d = 0, fl = false; i >= 0; i--) {
		var currentBuilding = Number(street[i]);

		if (currentBuilding === 2) {
			fl = true;
			d = 0;
		}

		if (fl && currentBuilding === 1) {
			dists[i] = dists[i] ? Math.min(dists[i], d) : d;
		}

		if (fl) d++;
	}

	let max = 0;

	for (let i = 0; i < dists.length; i++) {
		if (dists[i]) max = Math.max(max, dists[i]);
	}

	return max.toString();
}

module.exports = housesAndStores;
