// PAGE NAVIGATION
document
  .querySelector(".header-nav-list")
  .addEventListener("click", function (e) {
    e.preventDefault();
    console.log("click");

    if (e.target.classList.contains("header-nav-link")) {
      const id = e.target.getAttribute("href");
      console.log(id);
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });

///////////////////////////////////////
// MENU FADE ANIMATION
const nav = document.querySelector(".nav-container");

const handleHover = function (e) {
  if (e.target.classList.contains("header-nav-link")) {
    const link = e.target;
    const siblings = link
      .closest(".nav-container")
      .querySelectorAll(".header-nav-link");
    const logo = link.closest(".nav-container").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

///////////////////////////////////////
// Sticky navigation: Intersection Observer API

const heroSection = document.querySelector(".hero");
const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) document.body.classList.add("sticky");
  else document.body.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
});

headerObserver.observe(heroSection);

///////////////////////////////////////
// Reveal sections
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
