let button = document.querySelector(".js-nav__button--motive");
let body = document.querySelector(".js-body");
let headerElements = document.querySelector(".js-header")
let navElements = document.querySelector(".js-nav");
let roadmapElements = document.querySelector(".js-roadmap");
let aboutElements = document.querySelector(".js-about");
let themeName = document.querySelector(".js-themeName");
let footer = document.querySelector(".js-footer");
let buttonElements = document.querySelectorAll(".js-nav__button");
let nextElements = document.querySelectorAll(".js-about__next");
let right = document.querySelector(".js-about__next--right");
let left = document.querySelector(".js-about__next--left");
let img = document.querySelector(".img");

button.addEventListener("click", () => {
    body.classList.toggle("bodyLight");
    navElements.classList.toggle("navLight");
    headerElements.classList.toggle("headerLight");
    roadmapElements.classList.toggle("roadmapLight");
    aboutElements.classList.toggle("aboutLight");
    footer.classList.toggle("footerLight");
    buttonElements.forEach((button) => {
        button.classList.toggle("nav__buttonLight");
    });
    nextElements.forEach((next) => {
        next.classList.toggle("about__nextLight");
    });
    themeName.innerText = body.classList.contains("bodyLight") ? themeName.innerText = "Ciemny" : "Jasny";
});
left.addEventListener("click", () => {
    img.classList.toggle("nextPhoto");
    const thatsNextPhoto = img.classList.contains("nextPhoto");
    img.src = thatsNextPhoto ?
        "https://i.postimg.cc/LX7x64Zf/chorwacja.jpg" :
        "https://i.postimg.cc/zDVMm6RK/chill.jpg";
});
right.addEventListener("click", () => {
    img.classList.toggle("nextPhoto");
    const thatsNextPhoto = img.classList.contains("nextPhoto");
    img.src = thatsNextPhoto ?
        "https://i.postimg.cc/LX7x64Zf/chorwacja.jpg" :
        "https://i.postimg.cc/zDVMm6RK/chill.jpg";
});