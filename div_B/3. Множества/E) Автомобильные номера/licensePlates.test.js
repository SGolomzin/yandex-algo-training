const licensePlates = require('./licensePlates.js');

describe('Внутренние тесты контеста', () => {
	test('1', () => {
		expect(licensePlates('3\nABC\nA37\nBCDA\n2\nA317BD\nB137AC')).toBe('B137AC')
	});
	test('2', () => {
		expect(licensePlates('2\n1ABC\n3A4B\n3\nA143BC\nC143AB\nAAABC1')).toBe('A143BC\nC143AB')
	});
});