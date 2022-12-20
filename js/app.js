const mobileMenuToggle = document.querySelector(
  ".mobile__menu__home > .toggle"
);
const closeMobileMenu = document.querySelector(".mobile__menu__close");

function handleCloseMobileMenu() {
  const mobileMenu = document.querySelector(".mobile__menu");
  const mobileMenuBg = document.querySelector(".mobile__menu__bg");
  const body = document.querySelector("body");

  closeMobileMenu.style.transform = "rotate(0deg)";
  body.style.overflowY = "auto";
  mobileMenu.classList.remove("mobile__menu__visible");
  mobileMenuBg.classList.remove("mobile__menu__bg__visible");
}

function handleOpenMobileMenu() {
  const mobileMenu = document.querySelector(".mobile__menu");
  const mobileMenuBg = document.querySelector(".mobile__menu__bg");
  const body = document.querySelector("body");

  closeMobileMenu.style.transform = "rotate(180deg)";
  body.style.overflowY = "hidden";
  mobileMenu.classList.add("mobile__menu__visible");
  mobileMenuBg.classList.add("mobile__menu__bg__visible");
}

mobileMenuToggle.addEventListener("click", () => {
  mobileMenuToggle.classList.toggle("toggle__clicked");
  const toggleClicked = document.querySelector(".toggle__clicked");
  const subMenu = document.querySelector(".mobile__menu__home > .sub__menu");
  if (toggleClicked) {
  } else {
  }
});

function handleScrollTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
