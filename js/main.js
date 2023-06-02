let upper = document.querySelector(".upper-bar");
let nav = document.querySelector(".navbar");
let slider = document.querySelector(".slider");
let carousel = document.querySelector(".carousel-inner");

(windowinnerHeight = window.innerHeight),
  (getHeight = windowinnerHeight - (upper.offsetHeight + nav.offsetHeight));
slider.style.height = `${getHeight}px`;
carousel.style.height = `${getHeight}px`;
