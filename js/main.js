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

navBtn.addEventListener("click", handleNav);
