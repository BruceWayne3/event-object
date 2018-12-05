`use strict`;
const navigation = document.getElementsByTagName('nav')[0];
let secretWord = 'KeyY,KeyT,KeyN,KeyJ,KeyK,KeyJ,KeyU,KeyB,KeyZ'; 
const secret = document.getElementsByClassName('secret')[0];
let arrayOfLetters = [];

function menu () {
	if (event.ctrlKey && event.altKey && event.code === 'KeyT') {
		navigation.classList.toggle('visible');
	};
};

function easterEgg () {
	arrayOfLetters.push(event.code);
	if (arrayOfLetters.join().search(secretWord) != -1) {
		secret.classList.add('visible');
		return arrayOfLetters = [];
	} else {
		secret.classList.remove('visible');
	};
};

function result (event) {
	menu ();
	easterEgg ();
};

document.addEventListener('keydown', result);