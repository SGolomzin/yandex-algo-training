const guess = require('./guess.js');

describe('Внутренние тесты контеста', () => {
	test('1', () => {
		expect(guess('10\n1 2 3 4 5\nYES\n2 4 6 8 10\nNO\nHELP')).toBe('1 3 5')
	});
	test('2', () => {
		expect(guess('10\n1 2 3 4 5 6 7 8 9 10\nYES\n1\nNO\n2\nNO\n3\nNO\n4\nNO\n6\nNO\n7\nNO\n8\nNO\n9\nNO\n10\nNO\nHELP')).toBe('5')
	});
	test('3', () => {
		expect(guess('10\n1 2 3 4 5\nNO\n2 4 6 8 10\nNO\nHELP')).toBe('7 9')
	});
	test('4', () => {
		expect(guess('10\n1 2 3 4 5\nNO\n8 10\nNO\n6\nYES\nHELP')).toBe('6')
	});
	test('5', () => {
		expect(guess('10\n1 2 3 4\nYES\n2 3 4\nYES\n2 3\nYES\nHELP')).toBe('2 3')
	});
});