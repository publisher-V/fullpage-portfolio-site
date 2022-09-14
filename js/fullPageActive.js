$(document).ready(function () {
  $("#fullpage").fullpage({
    slidesNavigation: true,
    responsiveWidth: 1300,
    anchors: ["home", "aboutme", "skills", "portfolio", "mysite", "contact"],
    onLeave: function (index, nextIndex, direction) {
      if (index == 1 && direction == "down") {
        $("header").css("display", "flex");
      } else if (index == 2 && direction == "up") {
        $("header").css("display", "none");
      }
    },
  });
});
