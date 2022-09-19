AOS.init();

function AOS_MOBILE() {
  if (matchMedia("screen and (max-width: 1299px)").matches) {
    $(
      ".index-box-content, .aboutme-right, .aboutme-left, .common-skills-image, .mysite-content, .contact-content-left, .contact-content-right"
    ).attr("data-aos", "fade-up");
  }
}
AOS_MOBILE();
