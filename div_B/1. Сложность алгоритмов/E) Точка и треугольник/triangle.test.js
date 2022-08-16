const triangle = require('./triangle.js');

describe('Внутренние тесты контеста', () => {
	test('1', () => {
		expect(triangle('5\n1 1')).toBe('0')
	});
	test('2', () => {
		expect(triangle('3\n-1 1')).toBe('1')
	});
	test('3', () => {
		expect(triangle('4\n4 4')).toBe('2')
	});
	test('4', () => {
		expect(triangle('4\n2 2')).toBe('0')
	});
});