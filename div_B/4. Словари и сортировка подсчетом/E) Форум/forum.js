const forum = (input) => {
	let [n, ...data] = input.toString().match(/.+/g);

	let messages = Array(Number(n) + 1);
	let topics = {};
	let maxMessages = -1;

	for (let i = 0, j = 1; i < data.length; data[i] === '0' ? i += 3 : i += 2, j++) {
		let topicName;
		if (data[i] === '0') {
			topicName = data[i + 1];
			messages[j] = topicName;
		} else {
			topicName = messages[Number(data[i])]
			messages[j] = topicName;
		}
		topics[topicName] = topics[topicName] ? ++topics[topicName] : 1;
		maxMessages = Math.max(topics[topicName], maxMessages);
	}

	let hotTopics = Object.entries(topics).filter(([topic, n]) => n === maxMessages);

	hotTopics.map(([topic, n]) => [topic, messages.indexOf(topic)])
		.sort((a, b) => a[1] - b[1])

	return hotTopics[0][0];
}

module.exports = forum;