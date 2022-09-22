const mouseFixEl = document.querySelector(".images");
const mouseFixImagesEl = document.querySelectorAll(".images img");
const listItemsEl = document.querySelectorAll(".item");
const mousePos = {
  x: 0,
  y: 0,
};
let currentScrollPos = 0;

const fadeIn = (index) => {
  const fadeInEl = mouseFixImagesEl[index];

  gsap.set(fadeInEl, {
    zIndex: 2,
  });
  gsap.to(fadeInEl, {
    duration: 0.4,
    ease: "power2.out",
    opacity: 1,
  });
};

const fadeOut = (index) => {
  const fadeOutEl = mouseFixImagesEl[index];

  gsap.set(fadeOutEl, {
    zIndex: 1,
  });
  gsap.to(fadeOutEl, {
    duration: 0.4,
    ease: "power2.out",
    opacity: 0,
  });
};

window.addEventListener("mousemove", (e) => {
  mousePos.x = e.clientX;
  mousePos.y = e.clientY;

  gsap.to(mouseFixEl, {
    duration: 0.6,
    ease: "power2.out",
    x: mousePos.x,
    y: mousePos.y,
  });
});

for (let i = 0; i < listItemsEl.length; i++) {
  listItemsEl[i].addEventListener("mouseenter", () => {
    const targetIndex = i;

    fadeIn(targetIndex);
  });
  listItemsEl[i].addEventListener("mouseleave", () => {
    const targetIndex = i;

    fadeOut(targetIndex);
  });
}

window.addEventListener("scroll", () => {
  currentScrollPos = window.pageYOffset + mousePos.y;

  for (let i = 0; i < listItemsEl.length; i++) {
    const rect = listItemsEl[i].getBoundingClientRect();
    const startX = rect.left;
    const startY = rect.top + window.pageYOffset;
    const endX = rect.right;
    const endY = startY + rect.height;
    if (
      currentScrollPos >= startY &&
      currentScrollPos <= endY &&
      mousePos.x >= startX &&
      mousePos.x <= endX
    ) {
      const targetIndex = i;

      fadeIn(targetIndex);
    } else {
      const targetIndex = i;

      fadeOut(targetIndex);
    }
  }
});
