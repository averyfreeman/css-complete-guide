// render copyright year element for footer
document.getElementById('copy-date').innerText = new Date().getFullYear();

// init variables for DOM elements
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalYesButton = document.querySelector('.modal__action');
const modalNoButton = document.querySelector('.modal__action--negative');
const sideBarButton = document.querySelector('.toggle-button');
const sideBar = document.querySelector('.mobile-nav');
const selectPlanButtons = document.querySelectorAll('.plan button');
const selectSideBarAnchors = document.querySelectorAll('#sidebar a');
const agreeCheck = document.getElementById('agree-terms');
const ctaButton = document.querySelector('.main-nav__item--cta');
const planHref = document.querySelector("[href='start-hosting']");

const showBackdrop = () => {
	backdrop.style.display = 'block';
	setTimeout(() => backdrop.classList.add('open'), 10);
};

const hideBackdrop = () => {
	backdrop.classList.remove('open');
	setTimeout(() => (backdrop.style.display = 'none'), 600);
};

const showSideBar = () => {
	sideBar.style.display = 'block';
	showBackdrop();
	setTimeout(() => sideBar.classList.add('open'), 10);
};

const hideSideBar = () => {
	sideBar.classList.remove('open');
	hideBackdrop();
	setTimeout(() => (sideBar.style.display = 'none'), 300);
};

const delayFunc = (func, ms = 2000) => {
	clearTimeout(delayFunc);
	setTimeout(() => func(), ms);
};

// create functions for interacting with DOM
const showModal = () => {
	modal.classList.add('open');
	showBackdrop();
	// delayFunc(hideOverlays, 3000);
};

const hideOverlays = () => {
	if (modal) {
		modal.classList.remove('open');
	}
	if (backdrop) {
		hideBackdrop();
	}
	if (sideBar) {
		hideSideBar();
	}
};

const goToPage = (item, index) => {
	hideOverlays();
	window.location(item[index], '_self');
};

// create event listeners to wait for user interaction
sideBarButton.addEventListener('click', showSideBar);
backdrop.addEventListener('click', hideOverlays);

if (modal) {
	modalYesButton.addEventListener('click', () =>
		window.open('../../start-hosting/index.html', '_self')
	);
	modalNoButton.addEventListener('click', hideOverlays);
}

const addClickListenersToArray = (array, callback) => {
	array.forEach((item, index) => {
		item.addEventListener('click', callback);
	});
};

addClickListenersToArray(selectPlanButtons, showModal);
addClickListenersToArray(selectSideBarAnchors, goToPage);

// logs triggered by animation lifecycles (use these for figuring out when to coordinate behaviors with animations)
// ctaButton.addEventListener('animationstart', event =>
// 	console.log('Animation started', event)
// );

// ctaButton.addEventListener('animationiteration', event =>
// 	console.log('Animation iterated', event)
// );

// ctaButton.addEventListener('animationend', event =>
// 	console.log('Animation ended', event)
// );

// signup form stuff:
// This is for toggling the icon over the checkbox in the signup form
const toggleCheckmark = () => {
	if (!agreeCheck.classList.contains('fas', 'fa-check-square', 'fa-2x')) {
		agreeCheck.classList.add('fas', 'fa-check', 'fa-lg');
		agreeCheck.classList.remove('invalid');
	} else {
		agreeCheck.classList.remove('fas', 'fa-check', 'fa-lg');
		agreeCheck.classList.add('invalid');
	}
};

// and event listener for checkbox in form
if (agreeCheck) {
	agreeCheck.addEventListener('click', toggleCheckmark);
}

// was going to use this to dynamically go to different hosting package descriptions, but we never made any of those
// const planName = 'dummytext';
// planHref.setAttribute('href', `start-hosting/${planName}.html`);
// console.log(planHref);
