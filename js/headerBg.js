const headerElement = document.querySelector("header");
const introSection = document.querySelector(".intro");

function headerBgChange() {
  let scrollHeight = introSection.offsetHeight - 45;
  let scrollY = window.scrollY;
  if (scrollY > scrollHeight) {
    headerElement.classList.add("change");
  } else {
    headerElement.classList.remove("change");
  }
}

window.addEventListener("scroll", headerBgChange);
