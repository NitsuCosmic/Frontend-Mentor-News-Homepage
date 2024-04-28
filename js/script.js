const nav = document.getElementById("nav");
const navList = document.getElementById("nav-list");
const openIcon = document.getElementById("open-icon");
const closeIcon = document.getElementById("close-icon");

openIcon.addEventListener("click", () => {
	openMenu();
});

closeIcon.addEventListener("click", () => {
	closeMenu();
});

function openMenu() {
	nav.classList.add("open");
	navList.classList.add("open");
	closeIcon.classList.add("open");
}

function closeMenu() {
	navList.classList.remove("open");
	closeIcon.classList.remove("open");
	setTimeout(() => {
		nav.classList.remove("open");
	}, 250);
}
