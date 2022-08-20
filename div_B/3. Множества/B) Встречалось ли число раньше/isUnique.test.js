const isUnique = require('./isUnique.js');

describe('Внутренние тесты контеста', () => {
	test('1', () => {
		expect(isUnique('1 2 3 2 3 4')).toBe('NO\nNO\nNO\nYES\nYES\nNO')
	});
});