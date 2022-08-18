const countMax = (input) => {
	var nums = input.toString().match(/.+/g);
	var max = -Infinity;
	var cnt = 0;

	for (let i = 0; Number(nums[i]) !== 0 && i < nums.length; i++) {
		var tmp = Math.max(max, Number(nums[i]));
		if (tmp > max) {
			max = tmp;
			cnt = 0;
		}
		if (Number(nums[i]) === max) cnt++;
	}

	return cnt.toString();
}

module.exports = countMax;
