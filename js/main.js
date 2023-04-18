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

const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);
