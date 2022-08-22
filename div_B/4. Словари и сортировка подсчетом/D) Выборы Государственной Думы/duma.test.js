const duma = require('./duma.js');

describe('Внутренние тесты контеста', () => {
	test('1', () => {
		expect(duma('Party One 100000\nParty Two 200000\nParty Three 400000')).toBe('Party One 64\nParty Two 129\nParty Three 257')
	});
	test('2', () => {
		expect(duma('Party number one 100\nPartytwo 100')).toBe('Party number one 225\nPartytwo 225')
	});
	test('3', () => {
		expect(duma('Party number one 449\nPartytwo 1')).toBe('Party number one 449\nPartytwo 1')
	});
	test('7', () => {
		expect(duma('Party 1 34523\nParty 2 65434\nParty 3 453\nParty 4 65784\nParty 5 5253\nParty 6 3568\nParty 7 0\nParty 8 1\nParty 9 4592\nParty 10 90389')).toBe('Party 1 57\nParty 2 109\nParty 3 1\nParty 4 109\nParty 5 9\nParty 6 6\nParty 7 0\nParty 8 0\nParty 9 8\nParty 10 151')
	});
});