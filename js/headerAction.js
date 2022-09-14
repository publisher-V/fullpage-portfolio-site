const headerElm = document.querySelector("header");
const drawerOpen = document.querySelector(".drawer-open");
const drawerClose = document.querySelector(".drawer-close");
const menuClick = document.querySelectorAll(".gnb-container ul li a");
const drawerHidden = document.querySelector("#home-button");
const gnb = document.querySelector(".gnb");
const modal = document.querySelector(".modal-background");

function headerOpen() {
  gnb.classList.add("show");
  modal.classList.add("show");
}

function headerClose() {
  gnb.classList.remove("show");
  modal.classList.remove("show");
}

function modalClick() {
  gnb.classList.remove("show");
  modal.classList.remove("show");
}

function menuClickClose() {
  gnb.classList.remove("show");
  modal.classList.remove("show");
}

function drawerHiddenClick() {
  headerElm.style.display = "none";
}

for (let i = 0; i < menuClick.length; i++) {
  menuClick[i].addEventListener("click", menuClickClose);
}
drawerOpen.addEventListener("click", headerOpen);
drawerClose.addEventListener("click", headerClose);
modal.addEventListener("click", modalClick);
drawerHidden.addEventListener("click", drawerHiddenClick);
