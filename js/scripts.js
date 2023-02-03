const body = document.querySelector("body");
const nav = body.querySelector("#header-container > div:nth-child(2)");
const menuButton = body.querySelector("#menu-button");
const overlay = body.querySelector("#menu-overlay");
const closeMenu = body.querySelector("#close-menu");

menuButton.addEventListener(
  "click",
  () => {
    menuButton.style.display = "none";
    closeMenu.style.display = "block";
    nav.style.display = "block";
    nav.classList.add("slidein");
    overlay.classList.add("fadein");
    overlay.style.display = "block";
    body.style.overflow = "hidden";
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
    menuButton.removeAttribute("style");
    closeMenu.removeAttribute("style");
    setTimeout(function () {
      nav.removeAttribute("class");
      nav.removeAttribute("style");
      overlay.removeAttribute("class");
      overlay.removeAttribute("style");
    }, 1000);
    body.removeAttribute("style");
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
