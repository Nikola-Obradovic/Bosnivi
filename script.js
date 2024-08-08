const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.ticker.lagSmoothing(0);

const navButton = document.querySelector(".navigation__button");
console.log(navButton);

const navLinks = Array.from(
  document.getElementsByClassName("navigation__item")
);
console.log(navLinks);

navLinks.forEach((link) => {
  console.log(link);
  link.addEventListener("click", () => {
    navButton.click();
  });
});
