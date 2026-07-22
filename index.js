const navbar = document.querySelector("header");
const phrases = ["chat :)", "talk sports.", "discuss movie theories.", "be my friend :D"]
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

let phraseIndex = 0;
let charIndex = 0;
const changingText = document.querySelector("#changing-text")


function type() {
    changingText.textContent = phrases[phraseIndex].slice(0, charIndex);
    charIndex++;

    if(charIndex <= phrases[phraseIndex].length) {
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1000);
    }
}

function erase() {
    changingText.textContent = phrases[phraseIndex].slice(0, charIndex);
    charIndex--;

    if(charIndex >= 0) {
        setTimeout(erase, 50);
    } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        charIndex = 0;
        setTimeout(type, 300);
    }
}

type();