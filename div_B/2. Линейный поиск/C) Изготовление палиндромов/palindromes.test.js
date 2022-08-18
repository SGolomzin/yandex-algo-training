const palindromes = require('./palindromes.js');

describe('Внутренние тесты контеста', () => {
	test('1', () => {
		expect(palindromes('a')).toBe('0')
	});
	test('2', () => {
		expect(palindromes('ab')).toBe('1')
	});
	test('3', () => {
		expect(palindromes('cognitive')).toBe('4')
	});
});