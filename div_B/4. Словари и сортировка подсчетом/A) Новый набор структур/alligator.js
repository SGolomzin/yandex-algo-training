// Аналогичное решение с использованием встроенных методов языка
// 'map', 'reduce' - валилось по времени, успешно пройден только такой вариант
// за 2.959c. Считывание и запись производились в файл.
const alligator = (input) => {
	let [n, ...nums] = input.toString().match(/\S+/g);

	let hash = {};

	for (let i = 0; i < nums.length; i += 2) {
		let [d, a] = [nums[i], nums[i + 1]];

		hash[d] = hash[d]
			? (hash[d] + BigInt(a))
			: BigInt(a);
	}

	let result = Object.keys(hash).sort((a, b) => a - b);

	for (let i = 0; i < result.length; i++) {
		result[i] = [result[i], hash[result[i]]].join(' ');
	}

	return result.join('\n')
}

module.exports = alligator;