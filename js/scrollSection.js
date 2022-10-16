/* The MIT License (MIT)

Copyright (c) 2022 by Noel Delgado (https://codepen.io/noeldelgado/pen/BaogqYy)

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

# GSAP ScrollTrigger - Demo

A Pen created on CodePen.io. Original URL: [https://codepen.io/noeldelgado/pen/BaogqYy](https://codepen.io/noeldelgado/pen/BaogqYy).

*/

gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(".common-scroll-text").forEach((scrollText, index) => {
  const w = scrollText.querySelector(".wrapper");
  const [x, xEnd] =
    index % 2
      ? ["100%", (w.scrollWidth - scrollText.offsetWidth) * -1]
      : [w.scrollWidth * -1, 0];
  gsap.fromTo(
    w,
    { x },
    {
      x: xEnd,
      scrollTrigger: {
        trigger: scrollText,
        scrub: 0.5,
      },
    }
  );
});
