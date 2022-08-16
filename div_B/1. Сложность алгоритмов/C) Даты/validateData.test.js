const validateDate = require('./validateDate.js');

describe('Внутренние тесты контеста', () => {
	test('1', () => {
		expect(validateDate('1 2 2003')).toBe('0')
	});
	test('2', () => {
		expect(validateDate('2 29 2008')).toBe('1')
	});
});