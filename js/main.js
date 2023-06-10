let upper = document.querySelector(".upper-bar");
let nav = document.querySelector(".navbar");
let slider = document.querySelector(".slider");
let carousel = document.querySelector(".carousel-inner");
let gallery = document.querySelector(".gallery");
let links = document.querySelectorAll(".links ul li");

(windowinnerHeight = window.innerHeight),
  (getHeight = windowinnerHeight - (upper.offsetHeight + nav.offsetHeight));
slider.style.height = `${getHeight}px`;
carousel.style.height = `${getHeight}px`;

