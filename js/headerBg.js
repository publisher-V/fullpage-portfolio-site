const headerElement = document.querySelector("header");
const introSection = document.querySelector(".intro");
const triggerSecton = document.querySelector(".pin-spacer");

function headerBgChange() {
  let mediaWidth = window.matchMedia("(max-width:1024px)");
  let scrollHeight =
    introSection.offsetHeight + triggerSecton.offsetHeight + 80;
  let scrollY = window.scrollY;
  if (scrollY > scrollHeight) {
    headerElement.classList.add("change");
  } else {
    headerElement.classList.remove("change");
  }

  if (mediaWidth.matches) {
    let scrollHeight = introSection.offsetHeight + triggerSecton.offsetHeight;
    if (scrollY > scrollHeight) {
      headerElement.classList.add("change");
    } else {
      headerElement.classList.remove("change");
    }
  }
}

window.addEventListener("scroll", headerBgChange);
