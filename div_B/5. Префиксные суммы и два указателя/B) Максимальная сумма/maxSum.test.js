const maxSum = require('./maxSum.js');

describe('Внутренние тесты контеста', () => {
	test('1', () => {
		expect(maxSum('4\n1 2 3 4')).toBe('10')
	});
	test('2', () => {
		expect(maxSum('4\n5 4 -10 4')).toBe('9')
	});
	test('3', () => {
		expect(maxSum('4\n-1 -2 -3 -4')).toBe('-1')
	});
	test('4', () => {
		expect(maxSum('5\n450402558 -840167367 -231820501 586187125 -627664644')).toBe('586187125')
	});
});
describe('Дополнительные тесты', () => {
	test('1', () => {
		expect(maxSum('5\n4 -8 2 2 3')).toBe('7')
	});
});