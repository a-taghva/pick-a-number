function generateNumArr(n) {
	const numArr = [];
	let i = 0;
	while (numArr.length < n) {
		numArr[i] = ++i;
	};

	return numArr;
};

function pickANum(n) {
	return Math.floor(Math.random() * n)
};

function chooseOne(n) {
	const numArr = generateNumArr(n);

	while (numArr.length) {
		const l = numArr.length;
		const num = pickANum(l);

		console.log(numArr.splice(num, 1)[0]);
	};
};
