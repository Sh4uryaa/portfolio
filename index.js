const navbar = document.querySelector("header");
window.addEventListener("scroll", () => {
    if(window.scrollY > 608)
    {
        navbar.classList.add("scrolled");
    }else {
        navbar.classList.remove("scrolled");
    }
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector("header ul");

hamburger.addEventListener("click", () => navLinks.classList.toggle("nav-open"));

navLinks.addEventListener("click", () => navLinks.classList.remove("nav-open"));

