const calcSchoolCoords = require('./calcSchoolCoords.js');

describe('Внутренние тесты контеста', () => {
	test('1', () => {
		var input = '4\n1 2 3 4';
		expect(
			calcSchoolCoords(input) === '2'
			|| calcSchoolCoords(input) === '3'
		).toBe(true)
	});
	test('2', () => {
		expect(calcSchoolCoords('3\n-1 0 1')).toBe('0')
	});
	test('3', () => {
		expect(calcSchoolCoords('5\n-9 -1 8 9 10')).toBe('8')
	});
});