const metro = require('./metro.js');

describe('Внутренние тесты контеста', () => {
	test('1', () => {
		expect(metro('100 5 6')).toBe('0')
	});
	test('2', () => {
		expect(metro('10 1 9')).toBe('1')
	});
});
describe('Дополнительные тесты', () => {
	test('Если i-ая станция имеет большее значение по сравнению с j', () => {
		expect(metro('2 2 1')).toBe('0')
	});
});

