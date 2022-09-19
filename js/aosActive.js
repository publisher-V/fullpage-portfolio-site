AOS.init({
  disable: function () {
    const desktop = 1280;
    return window.innerWidth < desktop;
  },
});
