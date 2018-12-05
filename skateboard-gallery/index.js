`use strict`;
const chosenPicture = document.getElementById('view');
const miniPicture = document.getElementsByTagName('a');

function choosePicture(event) {
	event.preventDefault();
	chosenPicture.src = this.href;

	if (this.classList.contains('gallery-current')) {
		return;
	};

	for (const link of miniPicture) {
		link.classList.remove('gallery-current');
	};

	this.classList.add('gallery-current'); 
};

Array.from(miniPicture).forEach(link => link.addEventListener('click', choosePicture));