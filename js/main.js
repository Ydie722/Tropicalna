const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".burger-btn");
const allNavItems = document.querySelectorAll(".nav__item");

// colorki do burgerka
const navBtnBars = document.querySelector(".burger-btn__bars");
const allSections = document.querySelectorAll(".section");
const footerYear = document.querySelector(".footer__year");

// =========================================
// Funkcje do menu burgerowego i nav__items
// =========================================
const handleNav = () => {
	nav.classList.toggle("nav--active");

	navBtnBars.classList.remove("black-bars-color");

	allNavItems.forEach((item) => {
		item.addEventListener("click", () => {
			nav.classList.remove("nav--active");
		});
	});
	handleNavItemsAnimation();
};

const handleNavItemsAnimation = () => {
	let delayTime = 0;

	allNavItems.forEach((item) => {
		item.classList.toggle("nav-item-animation");
		item.style.animationDelay = "." + delayTime + "s";
		delayTime++;
	});
};

// Funkcja Roku w spanie footer
const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear(); // Wywołanie funkcji
// Funkcja Roku w spanie footer

// Obserwer
const handleObserver = () => {
	const curentSection = window.scrollY;
	allSections.forEach((section) => {
		if (
			section.classList.contains("white-section") &&
			section.offsetTop <= curentSection + 60
		) {
			navBtnBars.classList.add("black-bars-color");
		} else if (
			!section.classList.contains("white-section") &&
			section.offsetTop <= curentSection + 60
		) {
			navBtnBars.classList.remove("black-bars-color");
		}
	});
};
window.addEventListener("scroll", handleObserver); //wywoałanie funkcji

navBtn.addEventListener("click", handleNav);
