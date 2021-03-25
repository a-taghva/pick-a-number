let n;
let gCounter = 1;

do {
	n = +prompt('How many Groups?');
} while (!n);

const numArr = generateNumArr(n);

const slctdEl = document.querySelector('#slctd');
const statusEl = document.querySelector('#status');
document.querySelector('#pick-a-num').addEventListener('click', chooseOne);

statusEl.innerText = `total number of groups: ${n}`

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

		slctdEl.innerHTML += `${gCounter++}: group number: ${choosed}<br />`
	} else {
		alert('There\'s nothing to select buddy!');
	};

};
