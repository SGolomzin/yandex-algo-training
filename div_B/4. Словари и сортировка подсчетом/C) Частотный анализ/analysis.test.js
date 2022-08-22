const analysis = require('./analysis.js');

describe('Внутренние тесты контеста', () => {
	test('1', () => {
		expect(analysis('hi\nhi\nwhat is your name\nmy name is bond\njames bond\nmy name is damme\nvan damme\nclaude van damme\njean claude van damme')).toBe('damme\nis\nname\nvan\nbond\nclaude\nhi\nmy\njames\njean\nwhat\nyour')
	});
	test('2', () => {
		expect(analysis('oh you touch my tralala\nmmm my ding ding dong')).toBe('ding\nmy\ndong\nmmm\noh\ntouch\ntralala\nyou')
	});
	test('3', () => {
		expect(analysis('ai ai ai ai ai ai ai ai ai ai')).toBe('ai')
	});
});