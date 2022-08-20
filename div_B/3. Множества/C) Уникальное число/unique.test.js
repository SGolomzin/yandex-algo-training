const unique = require('./unique.js');

describe('Внутренние тесты контеста', () => {
	test('1', () => {
		expect(unique('1 2 2 3 3 3')).toBe('1')
	});
	test('2', () => {
		expect(unique('4 3 5 2 5 1 3 5')).toBe('4 2 1')
	});
});