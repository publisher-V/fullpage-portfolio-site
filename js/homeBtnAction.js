const homeBtn = document.querySelector("#home-button");
function homeMove() {
  window.scrollTo({
    top: 0,
  });
}

homeBtn.addEventListener("click", homeMove);
