const duma = (input) => {
	let parties = input.toString().match(/.+/g);

	let hashMap = new Map();
	let valueSum = 0;
	const target = 450;

	for (let party of parties) {
		let partyName = party.split(' ').slice(0, -1).join(' ');
		let partyValue = Number(party.split(' ').reverse()[0]);

		valueSum += partyValue;
		hashMap.set(partyName, partyValue);
	}

	for (let [partyName, partyValue] of hashMap) {
		hashMap.set(partyName, partyValue * target / valueSum);
	}

	let sortedHashMap = [...hashMap]
		.sort((a, b) => b[1] % 1 - a[1] % 1);

	let seatsLeft = target - sortedHashMap.reduce((acc, hm) => acc += Math.trunc(hm[1]), 0);

	for (let i = 0; i < seatsLeft; i++) {
		let partyName = sortedHashMap[i][0];
		let partyValue = Math.trunc(sortedHashMap[i][1]);
		partyValue++;
		hashMap.set(partyName, partyValue)
	}

	return [...hashMap].map(([partyName, partyValue]) => `${partyName} ${~~partyValue}`).join('\n');
}

module.exports = duma;