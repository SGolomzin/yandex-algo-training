const diplomas = require('./diplomas.js');

describe('Внутренние тесты контеста', () => {
	test('1', () => {
		expect(diplomas('2\n2 1')).toBe('1')
	});
});