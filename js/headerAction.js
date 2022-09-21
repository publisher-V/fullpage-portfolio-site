const body = document.querySelector("body");
const html = document.querySelector("html");
const headerElm = document.querySelector("header");
const drawerOpen = document.querySelector(".drawer-open");
const drawerClose = document.querySelector(".drawer-close");
const menuClick = document.querySelectorAll(".gnb-container ul li a");
const gnb = document.querySelector(".gnb");
const progress = document.querySelector(".progress-bar-box");

function headerOpen() {
  gnb.classList.add("show");
  progress.classList.add("hide");
  body.style.overflow = "hidden";
  html.style.overflow = "hidden";
}

function headerClose() {
  gnb.classList.remove("show");
  progress.classList.remove("hide");
  body.style.overflowY = "auto";
  html.style.overflowY = "auto";
}

function menuClickClose() {
  gnb.classList.remove("show");
  progress.classList.remove("hide");
  body.style.overflowY = "auto";
  html.style.overflowY = "auto";
}

for (let i = 0; i < menuClick.length; i++) {
  menuClick[i].addEventListener("click", menuClickClose);
}
drawerOpen.addEventListener("click", headerOpen);
drawerClose.addEventListener("click", headerClose);
