/* The MIT License (MIT)

Copyright (c) 2022 by Hisami Kurita (https://codepen.io/hisamikurita/pen/PoQapVq)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

# Scroll Hover Animation

A Pen created on CodePen.io. Original URL: [https://codepen.io/hisamikurita/pen/PoQapVq](https://codepen.io/hisamikurita/pen/PoQapVq).

*/

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
