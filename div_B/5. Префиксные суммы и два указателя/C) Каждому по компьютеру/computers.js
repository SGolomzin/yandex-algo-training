// TODO: переделать это задание, т.к. код нечитаемый
const computers = (input) => {
	var [N, M, ...rest] = input.toString().match(/\d+/g);
	N = Number(N);
	M = Number(M);

	var groups = [];
	var classrooms = [];

	for (let i = 0; i < rest.length; i++) {
		if (i < N) {
			groups.push([Number(rest[i]), i]);
		} else {
			classrooms.push([Number(rest[i]), i - N]);
		}
	}

	groups.sort((a, b) => a[0] - b[0]);
	classrooms.sort((a, b) => a[0] - b[0]);

	var P = 0;
	var distribution = Array(N);
	var j = 0;

	for (let [numOfStudents, groupId] of groups) {
		if (!classrooms[j]) {
			distribution[groupId] = 0;
			continue;
		}
		var [numOfComputers, classroomId] = classrooms[j];

		while (numOfStudents + 1 > numOfComputers && j < M - 1) {
			j++;
			[numOfComputers, classroomId] = classrooms[j];
		}

		if (numOfStudents + 1 <= numOfComputers) {
			distribution[groupId] = classroomId + 1;
			P++;
			j++;
		} else {
			distribution[groupId] = 0;
		}
	}

	return `${P}\n${distribution.join(' ')}`;
}

module.exports = computers;
