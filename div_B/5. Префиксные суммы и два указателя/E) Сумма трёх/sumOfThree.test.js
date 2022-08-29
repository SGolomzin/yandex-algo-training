const sumOfThree = require('./sumOfThree.js');

describe('Внутренние тесты контеста', () => {
	test('1', () => {
		expect(sumOfThree('3\n2 1 2\n2 3 1\n2 3 1')).toBe('0 1 1')
	});
	test('2', () => {
		expect(sumOfThree('10\n1 5\n1 4\n1 3')).toBe('-1')
	});
	test('3', () => {
		expect(sumOfThree('5\n4 1 2 3 4\n3 5 2 1\n4 5 3 2 2')).toBe('0 1 2')
	});
	test('7', () => {
		expect(sumOfThree('8\n3 2 5 2\n2 3 2\n3 5 4 3')).toBe('0 0 2')
	});
	test('8', () => {
		expect(sumOfThree('9\n2 3 2\n1 4\n5 1 2 3 4 5')).toBe('0 0 1')
	});
	test('14', () => {
		expect(sumOfThree('24\n15 7 9 5 11 16 10 14 13 11 8 11 20 4 14 18\n16 17 8 4 3 9 9 9 15 14 2 6 12 20 9 11 1\n15 20 13 7 17 10 7 11 15 14 10 14 15 1 14 12')).toBe('0 2 1')
	});
});