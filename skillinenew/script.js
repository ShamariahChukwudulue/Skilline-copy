const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-menu");

function setMenu(open) {
  menu.classList.toggle("open", open);
  toggle.classList.toggle("open", open);
  toggle.setAttribute("aria-expanded", open);
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

toggle.addEventListener("click", () =>
  setMenu(!menu.classList.contains("open")),
);
menu
  .querySelectorAll("a")
  .forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMenu(false);
});
window.matchMedia("(min-width: 993px)").addEventListener("change", (e) => {
  if (e.matches) setMenu(false);
});
