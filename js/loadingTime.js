const loadingPage = document.querySelector(".page-loading");

function loadingPageOut() {
  setTimeout(function () {
    loadingPage.classList.add("hide");
  }, 3000);
}

loadingPageOut();
