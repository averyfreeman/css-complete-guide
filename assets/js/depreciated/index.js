import { proverbs } from './proverbs.js';

let funnyText = document.createElement('li');

const randGet = array => {
	const rand = Math.floor(Math.random() * array.length);
	return array[rand];
};

const attachmentArea = document.getElementById('funnyList');

const attachRand = () => {
	funnyText.innerText = randGet(proverbs);
	attachmentArea.append(funnyText);
};

// const buttonClicker = document.getElementById('clicker');
// buttonClicker.addEventListener('click', attachRand);
