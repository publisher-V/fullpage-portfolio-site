$(window).on("load", function () {
  setTimeout(function () {
    $(".page-loading").fadeOut();
    $("body").css("overflow-y", "auto");
  }, 2000);
});
