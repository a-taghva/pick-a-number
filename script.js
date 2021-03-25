let n;
let gTimer;
let gTime = 0;
let gCounter = 1;
const gArr = [];

const slctdEl = document.querySelector('#slctd');
const statusEl = document.querySelector('#status');
document.querySelector('#pick-a-num').addEventListener('click', chooseOne);
document.querySelector("#g-data").addEventListener('submit', submitFormHandler);

function submitFormHandler(e) {
	e.preventDefault();
	const isValidated = validateInputs();
};

function validateInputs() {
	const gNumberEl = document.querySelector('#g-number');
	const gNumber = gNumberEl.value.trim().split(' ');
	const gLimit = +document.querySelector('#g-limit').value.trim();

	if (!gNumber || isNaN(gLimit)) {
		return false;
	};

	if (gNumber.length === 1) {

		for (let i = 1; i <= gNumber[0]; i++) {
			gArr.push(i);
		};

	} else {

		while (gNumber.length) {
			const curr = +gNumber.shift();
			if (curr === 0) {
				continue;
			};
			
			if (isNaN(curr)) {
				gNumberEl.nextElementSibling.classList.remove('hidden');
				gNumberEl.classList.add('input-err');
				return false;
			};
			
			gArr.push(curr);
		};
		
	}

	console.log(gArr);
	return true;
};

statusEl.innerText += `total number of groups: ${n}`

function startTimer() {
	gTimer = setInterval(() => {
		gTime++;
	}, 1000);
};

function stopTimer() {
	clearInterval(gTimer);
	console.log(gTime);
	gTime = 0;
};

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
