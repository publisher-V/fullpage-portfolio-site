AOS.init({
  disable: function () {
    let desktop = 1299;
    return window.innerWidth < desktop;
  }, // 1280px 이상일 때 disable
});
