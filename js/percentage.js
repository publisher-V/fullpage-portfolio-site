$(document).ready(function () {
  $(window).scroll(function (e) {
    var scrollTop = $(window).scrollTop();
    var docHeight = $(document).height();
    var winHeight = $(window).height();
    var scrollPercent = scrollTop / (docHeight - winHeight);
    var scrollPercentRounded = Math.round(scrollPercent * 100);

    $("#scrollPercentLabel>span").html(scrollPercentRounded);
  });
});
