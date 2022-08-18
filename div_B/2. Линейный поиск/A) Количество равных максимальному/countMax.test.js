const countMax = require('./countMax.js');

describe('Внутренние тесты контеста', () => {
	test('1', () => {
		expect(countMax('1\n7\n9\n0')).toBe('1')
	});
	test('2', () => {
		expect(countMax('1\n3\n3\n1')).toBe('2')
	});
});