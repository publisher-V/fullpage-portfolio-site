const headerElement = document.querySelector("header");
const introSection = document.querySelector(".intro");
const scrollTextSection = document.querySelector(".scroll-text-container");

function headerBgChange() {
  let scrollHeight =
    introSection.offsetHeight +
    scrollTextSection.offsetHeight +
    scrollTextSection.clientHeight;
  let scrollY = window.scrollY;
  if (scrollY > scrollHeight) {
    headerElement.classList.add("change");
  } else {
    headerElement.classList.remove("change");
  }
}

window.addEventListener("scroll", headerBgChange);
