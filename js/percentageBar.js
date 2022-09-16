(function () {
  const barElem = document.querySelector(".progress-bar");

  function percent() {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    barElem.style.width = scrolled + "%";
  }
  window.addEventListener("scroll", percent);
})();
