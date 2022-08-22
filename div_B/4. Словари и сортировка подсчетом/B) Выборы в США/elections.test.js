const elections = require('./elections.js');

describe('Внутренние тесты контеста', () => {
	test('1', () => {
		expect(elections('McCain 10\nMcCain 5\nObama 9\nObama 8\nMcCain 1')).toBe('McCain 16\nObama 17')
	});
	test('2', () => {
		expect(elections('ivanov 100\nivanov 500\nivanov 300\npetr 70\ntourist 1\ntourist 2')).toBe('ivanov 900\npetr 70\ntourist 3')
	});
	test('3', () => {
		expect(elections('bur 1')).toBe('bur 1')
	});
	test('4', () => {
		expect(elections('ivan 2\ngena 1\nsergey 100000\nivan 1\nivan 1\nivan 0\ngena 100')).toBe('gena 101\nivan 4\nsergey 100000')
	});
});