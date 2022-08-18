const benches = require('./benches.js');

describe('Внутренние тесты контеста', () => {
	test('1', () => {
		expect(benches('5 2\n0 2')).toBe('2')
	});
	test('2', () => {
		expect(benches('13 4\n1 4 8 11')).toBe('4 8')
	});
	test('3', () => {
		expect(benches('14 6\n1 6 8 11 12 13')).toBe('6 8')
	});
	test('4', () => {
		expect(benches('4 4\n0 1 2 3')).toBe('1 2')
	});
});