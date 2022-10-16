const headerElement = document.querySelector("header");
const introSection = document.querySelector(".intro");
const scrollTextSection = document.querySelector(".scroll-text-container");

function headerBgChange() {
  if (matchMedia("(max-width:1280px)").matches) {
    let scrollHeight = introSection.offsetHeight;
    let scrollY = window.scrollY;
    if (scrollY > scrollHeight) {
      headerElement.classList.add("change");
    } else {
      headerElement.classList.remove("change");
    }
  } else {
    headerElement.classList.remove("change");
  }
}

window.addEventListener("scroll", headerBgChange);
