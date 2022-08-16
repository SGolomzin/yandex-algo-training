const interactor = require('./interactor.js');

describe('Внутренние тесты контеста', () => {
	test('1', () => {
		expect(interactor('0\n0\n0')).toBe('0')
	});
	test('2', () => {
		expect(interactor('-1\n0\n1')).toBe('3')
	});
	test('3', () => {
		expect(interactor('42\n1\n6')).toBe('6')
	});
	test('4', () => {
		expect(interactor('44\n7\n4')).toBe('1')
	});
	test('5', () => {
		expect(interactor('1\n4\n0')).toBe('3')
	});
	test('6', () => {
		expect(interactor('-3\n2\n4')).toBe('2')
	});
});