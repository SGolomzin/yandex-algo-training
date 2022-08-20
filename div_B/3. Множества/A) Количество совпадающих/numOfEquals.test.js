const numOfEquals = require('./numOfEquals.js');

describe('Внутренние тесты контеста', () => {
	test('1', () => {
		expect(numOfEquals('1 3 2\n4 3 2')).toBe('2')
	});
	test('2', () => {
		expect(numOfEquals('1 2 6 4 5 7\n10 2 3 4 8')).toBe('2')
	});
	test('3', () => {
		expect(numOfEquals('1 7 3 8 10 2 5\n6 5 2 8 4 3 7')).toBe('5')
	});
});