const body = document.querySelector("body");
const headerElm = document.querySelector("header");
const drawerOpen = document.querySelector(".drawer-open");
const drawerClose = document.querySelector(".drawer-close");
const menuClick = document.querySelectorAll(".gnb-container ul li a");
const gnb = document.querySelector(".gnb");
const modal = document.querySelector(".modal-background");

function headerOpen() {
  gnb.classList.add("show");
  modal.classList.add("show");
  body.style.overflow = "hidden";
}

function headerClose() {
  gnb.classList.remove("show");
  modal.classList.remove("show");
  body.style.overflowY = "auto";
}

function modalClick() {
  gnb.classList.remove("show");
  modal.classList.remove("show");
  body.style.overflowY = "auto";
}

function menuClickClose() {
  gnb.classList.remove("show");
  modal.classList.remove("show");
  body.style.overflowY = "auto";
}

for (let i = 0; i < menuClick.length; i++) {
  menuClick[i].addEventListener("click", menuClickClose);
}
drawerOpen.addEventListener("click", headerOpen);
drawerClose.addEventListener("click", headerClose);
modal.addEventListener("click", modalClick);
