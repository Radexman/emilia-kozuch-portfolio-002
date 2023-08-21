const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.navlinks');
const navlink = document.querySelectorAll('.navlinks__navlink');
const accordion = document.getElementsByClassName('accordion__box');
const acreditation = document.querySelector('.footer__date');
const year = new Date().getFullYear();
const finalYear = ` ${year}`;

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('hamburger--active');
	navlinks.classList.toggle('navlinks--active');
});

navlink.forEach((link) => {
	link.addEventListener('click', () => {
		hamburger.classList.toggle('hamburger--active');
		navlinks.classList.toggle('navlinks--active');
	});
});

for (let i = 0; i < accordion.length; i++) {
	accordion[i].addEventListener('click', function () {
		this.classList.toggle('active');
	});
}

acreditation.textContent += finalYear;
