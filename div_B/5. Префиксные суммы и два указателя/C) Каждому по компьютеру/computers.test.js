const computers = require('./computers.js');

describe('Внутренние тесты контеста', () => {
	test('1', () => {
		expect(computers('1 1\n1\n2')).toBe('1\n1')
	});
	test('2', () => {
		expect(computers('1 1\n1\n1')).toBe('0\n0')
	});
	test('3', () => {
		expect(computers('2 2\n1 2\n2 3')).toBe('2\n1 2')
	});
	test('4', () => {
		expect(computers('10 10\n1 1 1 1 1 1 1 1 1 1\n2 2 2 2 2 2 2 2 2 1')).toBe('9\n1 2 3 4 5 6 7 8 9 0')
	});
});