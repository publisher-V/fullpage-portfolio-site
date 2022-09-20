const goToTopButton = document.querySelector(".gototop");
const commonIntro = document.querySelector(".area");

function scrollShow() {
  let windowscrollY = window.scrollY;
  let documentHeight = commonIntro.offsetHeight + 34;
  if (windowscrollY > documentHeight) {
    goToTopButton.classList.add("show");
  } else {
    goToTopButton.classList.remove("show");
  }
}

function goToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

window.addEventListener("scroll", scrollShow);
goToTopButton.addEventListener("click", goToTop);
