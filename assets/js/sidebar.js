const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const navigationLink = document.querySelector(".navigation-links");

openMenuBtn.addEventListener("click", (openMenuBtnEvent) => {
  openMenuBtnEvent.stopPropagation();
  navigationLink.classList.add("show");
});

closeMenuBtn.addEventListener("click", (closeMenuBtnEvent) => {
  navigationLink.classList.remove("show");
});

navigationLink.addEventListener("click", (navSideBarEvent) => {
  navSideBarEvent.stopPropagation();
});

document.body.addEventListener("click", () => {
  navigationLink.classList.remove("show");
});
