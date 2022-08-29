const prefixSum = require('./prefixSum.js');

describe('Внутренние тесты контеста', () => {
	test('1', () => {
		expect(prefixSum('4 10\n1 2 3 4\n1 1\n1 2\n1 3\n1 4\n2 2\n2 3\n2 4\n3 3\n3 4\n4 4')).toBe('1\n3\n6\n10\n2\n5\n9\n3\n7\n4')
	});
});