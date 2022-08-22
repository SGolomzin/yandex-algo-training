const elections = (input) => {
	let data = input.toString().match(/.+/g);

	return Object.entries(data.reduce((acc, state) => {
		let [name, votes] = state.split(' ');
		acc[name] = acc[name] ? (acc[name] + Number(votes)) : Number(votes);
		return acc;
	}, {}))
		.map(e => e.join(' '))
		.sort()
		.join('\n');
}

module.exports = elections;
