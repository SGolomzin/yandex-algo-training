const brackets = require('./brackets.js');

describe('Внутренние тесты контеста', () => {
	test('1', () => {
		expect(brackets('(())()')).toBe('YES')
	});
	test('2', () => {
		expect(brackets('(()))()')).toBe('NO')
	});
});
describe('Дополнительные тесты', () => {
	test('1', () => {
		expect(brackets(')(')).toBe('NO')
	});
	test('1', () => {
		expect(brackets('())(')).toBe('NO')
	});
});