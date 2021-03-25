let n;
let gTimer;
let gTime = 0;
let gCounter = 1;
let gLimit = 10;
const gArr = [];
let checkTimer = true;

const gStatus = document.querySelector('#status');

const slctdEl = document.querySelector('#slctd');
const statusEl = document.querySelector('#status');
document.querySelector('#pick-a-num').addEventListener('click', chooseOne);
document.querySelector("#g-data").addEventListener('submit', submitFormHandler);
document.querySelector('button[type="reset"]').addEventListener('click', removeErr);
document.querySelector('#stop-timer').addEventListener('click', stopAndAddTimer);

function removeErr() {
  const hasErr = document.querySelector('#g-number').classList.contains('input-err');

  if (hasErr) {
    document.querySelector('#g-number').classList.remove('input-err');
    document.querySelector('#g-number').nextElementSibling.classList.add('hidden');
  }
};

function submitFormHandler(e) {
	e.preventDefault();
  	removeErr();

	const gNumberEl = document.querySelector('#g-number');
	const gNumber = gNumberEl.value.trim().split(' ');
	const limit = +document.querySelector('#g-limit').value.trim();

	if (!+gNumber[0]) {
    gNumberEl.nextElementSibling.classList.remove('hidden');
    gNumberEl.classList.add('input-err');
		return false;
	};

  	gLimit = limit || gLimit;

	const gArrTest = [];

	if (gNumber.length === 1) {

		for (let i = 1; i <= gNumber[0]; i++) {
			gArrTest.push(i);
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
        		gArrTest = [];
				return false;
			};
			
			gArrTest.push(curr);
		};
		
	};

	while(gArr.length) gArr.pop();
	document.querySelector('#status').innerHTML = "";
	for (g of gArrTest) gArr.push(g);

	gNumberEl.value = "";
	document.querySelector('#g-limit').value = '';
	showGData();
};

function showGData() {
	
	for (const g of gArr) {
		const divEl = document.createElement('div');
		divEl.id = g;
		divEl.textContent = `Group No. ${g}`;

		gStatus.appendChild(divEl);
	}
}

function startTimer() {
	gTimer = setInterval(() => {
		gTime++;
	}, 1000);
};

function stopTimer() {
	clearInterval(gTimer);
	gTime = 0;
};

function pickANum(n) {
	return Math.floor(Math.random() * n)
};

function stopAndAddTimer() {
	if (!gTimer) {
		return alert("timer is not working!");
	}

	const gt = gTime;
	stopTimer();
	checkTimer = false;

	slctdEl.lastChild.textContent += `, ${gt} seconds`;
}

function chooseOne() {
	const l = gArr.length;
	if (l) {
		const n = pickANum(l);
		const gs = gStatus.childNodes;
		
		const choosed = gArr.splice(n, 1)[0];
		
		for (let g of gs) {
			if (+g.id === choosed) {
				g.remove();
				break;
			}
		};

		if (slctdEl.lastChild && checkTimer) {
			const gt = gTime;
			stopTimer();

			slctdEl.lastChild.textContent += `, ${gt} seconds!`;
		};

		startTimer();
		checkTimer = true;

		if (gCounter < 20) {

			switch(gCounter) {
				case 1:
					slctdEl.innerHTML += `<p>${gCounter++}<sup>st</sup> group: group number ${choosed}</p>`
					break;
				case 2:
					slctdEl.innerHTML += `<p>${gCounter++}<sup>nd</sup> group: group number ${choosed}</p>`
					break;
				case 3:
					slctdEl.innerHTML += `<p>${gCounter++}<sup>rd</sup> group: group number ${choosed}</p>`
					break;
				default:
					slctdEl.innerHTML += `<p>${gCounter++}<sup>th</sup> group: group number ${choosed}</p>`
					break;
			};

		} else {

			switch(gCounter % 10) {
				case 1:
					slctdEl.innerHTML += `<p>${gCounter++}<sup>st</sup> group: group number ${choosed}</p>`
					break;
				case 2:
					slctdEl.innerHTML += `<p>${gCounter++}<sup>nd</sup> group: group number ${choosed}</p>`
					break;
				case 3:
					slctdEl.innerHTML += `<p>${gCounter++}<sup>rd</sup> group: group number ${choosed}</p>`
					break;
				default:
					slctdEl.innerHTML += `<p>${gCounter++}<sup>th</sup> group: group number ${choosed}</p>`
					break;
			};
		};

	} else {

		alert('There\'s nothing to select buddy!');

	};

};
