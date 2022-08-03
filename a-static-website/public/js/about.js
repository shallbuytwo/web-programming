"use strict";
(function() {
	// initial default values
	const picEl = document.querySelector('#pic__from__remote');
	renderDefault();

	// addEventListener for the button
	const buttonEl = document.querySelector('#request__button');
	buttonEl.addEventListener('click', () => {
		fetchFromRemote();
	});

	function getRandomInteger(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function renderDefault() {
		picEl.src = "pic/paopao.png";
	}

	function fetchFromRemote() {
		const pxSize = getRandomInteger(1, 10) * 100;
		fetch(`https://placekitten.com/${pxSize}/${pxSize}`)
			.catch(() => {
				renderDefault();
				Promise.reject("Error fetching from placekitten.com");
			})
			.then(response => response.blob())
			.then(blob => {
				picEl.src = URL.createObjectURL(blob);
			});
	}
})();