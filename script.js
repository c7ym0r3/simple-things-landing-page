const menu = document.querySelector("#mobile-menu");
const menuToggle = document.querySelector(".menu-toggle");
const menuClose = document.querySelector(".menu-close");

function setMenuOpen(isOpen) {
  menu.hidden = !isOpen;
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", "Открыть меню");
  document.body.classList.toggle("menu-open", isOpen);
}

menuToggle.addEventListener("click", () => setMenuOpen(true));
menuClose.addEventListener("click", () => setMenuOpen(false));
menu.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    setMenuOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !menu.hidden) {
    setMenuOpen(false);
    menuToggle.focus();
  }
});
