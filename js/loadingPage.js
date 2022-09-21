const loadingPage = document.querySelector(".page-loading");
const bodyScrollY = document.querySelector("body");
const htmlScrollY = document.querySelector("html");

function loadingPageOut() {
  setTimeout(function () {
    loadingPage.classList.add("hide");
    bodyScrollY.classList.add("scroll");
    htmlScrollY.classList.add("scroll");
  }, 3000);
}

loadingPageOut();
