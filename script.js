const numArr = generateNumArr(15);

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

function chooseOne() {
	const l = numArr.length;

	if (l) {
		const n = pickANum(l);
		console.log(numArr.splice(n, 1)[0]);
	} else {
		alert('There\'s nothing to select buddy!');
	};

};
