`use strict`;
let mode = document.getElementsByClassName('set')[0];
let buttons = document.getElementsByTagName('li');
let buttonsArray = Array.from(buttons);
let sound = document.getElementsByTagName('audio');

let lower = ['first.mp3', 'second.mp3', 'third.mp3', 'fourth.mp3', 'fifth.mp3'];
let middle = ['first.mp3', 'second.mp3', 'third.mp3', 'fourth.mp3', 'fifth.mp3'];
let higher = ['first.mp3', 'second.mp3', 'third.mp3', 'fourth.mp3', 'fifth.mp3'];

function music(event) {
	if (event.shiftKey) {
		mode.classList.remove('middle');
		mode.classList.remove('higher');
		mode.classList.add('lower');

		let lowerButton = lower[buttonsArray.indexOf(this)];
		sound[buttonsArray.indexOf(this)].src = `sounds/lower/${lowerButton}`;
		sound[buttonsArray.indexOf(this)].play(); 
	} else if (event.altKey) {
		mode.classList.remove('middle');
		mode.classList.remove('lower');
		mode.classList.add('higher');

		let higherButton = higher[buttonsArray.indexOf(this)];
		sound[buttonsArray.indexOf(this)].src = `sounds/higher/${higherButton}`;
		sound[buttonsArray.indexOf(this)].play();
	} else {
		mode.classList.remove('lower');
		mode.classList.remove('higher');
		mode.classList.add('middle');

		let middleButton = middle[buttonsArray.indexOf(this)];
		sound[buttonsArray.indexOf(this)].src = `sounds/middle/${middleButton}`;
		sound[buttonsArray.indexOf(this)].play();
	};
};

for (const button of buttonsArray) {
	button.addEventListener('click', music);
};