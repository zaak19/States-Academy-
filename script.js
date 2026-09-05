/* =====================================
   STATES ACADEMY
   Main JavaScript
===================================== */


/* LOADER */

window.addEventListener("load", function () {

  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 700);

});


/* MOBILE MENU */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {

  nav.classList.toggle("active");

  if (nav.classList.contains("active")) {
    menuBtn.textContent = "×";
  } else {
    menuBtn.textContent = "☰";
  }

});


/* CLOSE MOBILE MENU */

document.querySelectorAll(".nav a").forEach(link => {

  link.addEventListener("click", () => {

    nav.classList.remove("active");

    menuBtn.textContent = "☰";

  });

});


/* LANGUAGE SYSTEM */

let currentLanguage = localStorage.getItem("statesLanguage") || "en";

const languageBtn = document.getElementById("languageBtn");


function updateLanguage() {

  document.documentElement.lang = currentLanguage;

  const elements = document.querySelectorAll("[data-en][data-fr]");

  elements.forEach(element => {

    element.textContent =
      element.getAttribute(`data-${currentLanguage}`);

  });

  languageBtn.textContent =
    currentLanguage === "en" ? "FR" : "EN";

}


languageBtn.addEventListener("click", () => {

  currentLanguage =
    currentLanguage === "en" ? "fr" : "en";

  localStorage.setItem(
    "statesLanguage",
    currentLanguage
  );

  updateLanguage();

});


updateLanguage();


/* HEADER EFFECT */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    header.style.background =
      "rgba(0,0,0,0.92)";

  } else {

    header.style.background =
      "rgba(0,0,0,0.72)";

  }

});


/* REVEAL ANIMATION */

const revealElements = document.querySelectorAll(
  ".product-card, .intro-grid, .split-content, .coaching-box, .about-grid"
);

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

      }

    });

  },
  {
    threshold: 0.1
  }
);


revealElements.forEach(element => {

  element.style.opacity = "0";
  element.style.transform = "translateY(30px)";
  element.style.transition = "opacity 0.8s ease, transform 0.8s ease";

  observer.observe(element);

});