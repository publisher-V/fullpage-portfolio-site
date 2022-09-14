const skillsImage = document.querySelectorAll(".skills-can-image");
const imageDes = document.querySelector(".skills-can-des");

function mouseHoverHide() {
  imageDes.style.cssText = `opacity:0;
  visibility: hidden;`;
}

function mouseHoverShow() {
  imageDes.style.cssText = `opacity:1;
  visibility: visible;`;
}

for (let i = 0; i < skillsImage.length; i++) {
  skillsImage[i].addEventListener("mouseover", mouseHoverHide);
}

for (let i = 0; i < skillsImage.length; i++) {
  skillsImage[i].addEventListener("mouseout", mouseHoverShow);
}
