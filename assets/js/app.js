const slide = document.querySelectorAll(".slide");
const dot = document.querySelectorAll(".dot");
const next = document.querySelector(".next");
const auto = true; // Auto scroll
const intervalTime = 5000;
let slideInterval;

//Carousel ---
const nextSlide = () => {
  const current = document.querySelector(".current");

  current.classList.remove("current");

  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    slide[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

// Button events
next.addEventListener("click", (e) => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});
// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}

// Product ---

const productPath = {
  // curviness: 0.1,
  autoRotate: true,
  values: [
    // { x: 100, y: 0 },
    { x: 400, y: 0 },
  ],
};

const tween = new TimelineLite();

tween.add(
  TweenLite.to(".animate", 1, {
    bezier: productPath,
    ease: Power1.easeInOut,
  })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: ".scroll",
  duration: 1200,
  triggerHook: 0.8,
})
  .setTween(tween)
  // .addIndicators()
  // .setPin(".scroll-wrapper")
  .addTo(controller);

// ---------- Hamburger ----------------
const mobilenav = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav");
  const links = document.querySelectorAll(".navigation > li > a");
  const langs = document.querySelectorAll(".lang > .icon");

  //toggle nav
  burger.addEventListener("click", () => {
    //burger animation
    burger.classList.toggle("toggle");

    //nav animation
    nav.classList.toggle("active");

    // animate link
    links.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navfade 0.3s ease forwards ${index / 7 + 0.3}s`;
      }
    });

    //lang animate
    langs.forEach((lang, index) => {
      if (lang.style.animation) {
        lang.style.animation = "";
      } else {
        lang.style.animation = `navfade 0.3s ease forwards ${index / 7 + 0.3}s`;
      }
    });
  });
};

mobilenav();
