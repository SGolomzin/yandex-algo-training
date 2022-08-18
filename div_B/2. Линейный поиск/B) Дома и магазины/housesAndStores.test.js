const housesAndStores = require('./housesAndStores.js');

describe('Внутренние тесты контеста', () => {
	test('1', () => {
		expect(housesAndStores('2 0 1 1 0 1 0 2 1 2')).toBe('3')
	});
	test('2', () => {
		expect(housesAndStores('2 0 0 0 0 0 0 0 0 1')).toBe('9')
	});
	test('3', () => {
		expect(housesAndStores('0 1 0 0 1 2 2 1 0 2')).toBe('4')
	});
});