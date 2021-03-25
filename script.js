let n;
let gCounter = 1;

do {
	n = +prompt('How many Groups?');
} while (!n);

const numArr = generateNumArr(n);

const slctdEl = document.querySelector('#slctd');
const statusEl = document.querySelector('#status');
document.querySelector('#pick-a-num').addEventListener('click', chooseOne);

statusEl.innerText += `total number of groups: ${n}`

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

		if (gCounter < 20) {

			switch(gCounter) {
				case 1:
					slctdEl.innerHTML += `${gCounter++}<sup>st</sup> group: group number ${choosed}<br />`
					break;
				case 2:
					slctdEl.innerHTML += `${gCounter++}<sup>nd</sup> group: group number ${choosed}<br />`
					break;
				case 3:
					slctdEl.innerHTML += `${gCounter++}<sup>rd</sup> group: group number ${choosed}<br />`
					break;
				default:
					slctdEl.innerHTML += `${gCounter++}<sup>th</sup> group: group number ${choosed}<br />`
					break;
			};

		} else {

			switch(gCounter % 10) {
				case 1:
					slctdEl.innerHTML += `${gCounter++}<sup>st</sup> group: group number ${choosed}<br />`
					break;
				case 2:
					slctdEl.innerHTML += `${gCounter++}<sup>nd</sup> group: group number ${choosed}<br />`
					break;
				case 3:
					slctdEl.innerHTML += `${gCounter++}<sup>rd</sup> group: group number ${choosed}<br />`
					break;
				default:
					slctdEl.innerHTML += `${gCounter++}<sup>th</sup> group: group number ${choosed}<br />`
					break;
			};
		};

	} else {
		alert('There\'s nothing to select buddy!');
	};

};
