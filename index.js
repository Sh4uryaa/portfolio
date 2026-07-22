let navbar = document.querySelector("header");
window.addEventListener("scroll", () => {
    if(window.scrollY > 608)
    {
        navbar.classList.add("scrolled");
    }else {
        navbar.classList.remove("scrolled");
    }
})