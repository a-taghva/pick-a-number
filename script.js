const numArr = generateNumArr(15);

const slctdEl = document.querySelector('#slctd');
document.querySelector('#pick-a-num').addEventListener('click', chooseOne);

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
		const choosed = numArr.splice(n, 1)[0];

		slctdEl.innerText += choosed + ', ';
	} else {
		alert('There\'s nothing to select buddy!');
	};

};
