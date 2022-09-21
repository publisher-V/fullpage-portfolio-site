const loadingPage = document.querySelector(".page-loading");
const bodyScrollY = document.querySelector("body");

function loadingPageOut() {
  setTimeout(function () {
    loadingPage.classList.add("hide");
    bodyScrollY.classList.add("scroll");
  }, 3000);
}

loadingPageOut();
