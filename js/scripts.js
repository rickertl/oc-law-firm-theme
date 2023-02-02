const body = document.querySelector("body");
const nav = body.querySelector("#header-container > div:nth-child(2)");
const menuButton = body.querySelector("#menu-button");
const overlay = body.querySelector("#menu-overlay");
const closeMenu = body.querySelector("#close-menu");

menuButton.addEventListener(
  "click",
  () => {
    nav.classList.remove("hidden");
    nav.classList.add("slidein");
    overlay.classList.add("fadein");
    overlay.classList.remove("hidden");
    body.classList.add("overflow-hidden");
  },
  false
);

closeMenu.addEventListener(
  "click",
  () => {
    nav.classList.remove("slidein");
    nav.classList.add("slideout");
    overlay.classList.remove("fadein");
    overlay.classList.add("fadeout");
    setTimeout(function () {
      nav.classList.add("hidden");
      nav.classList.remove("slideout");
      overlay.classList.remove("fadeout");
      overlay.classList.add("hidden");
    }, 1000);
    body.classList.remove("overflow-hidden");
  },
  false
);

// homepage headline slidein on scroll
// https://www.youtube.com/watch?v=T33NN_pPeNI
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("translate-x-full", "-translate-x-full");
      observer.unobserve(entry.target);
    }
  });
});

const headlines = document.querySelectorAll(".headline");

headlines.forEach((element) => {
  observer.observe(element);
});
