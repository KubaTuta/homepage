{
const button = document.querySelector(".js-nav__button--motive");
const right = document.querySelector(".js-about__next--right");
const left = document.querySelector(".js-about__next--left");
const img = document.querySelector(".img");

const changeTheme = () => {
    const body = document.querySelector(".js-body");
    const headerElements = document.querySelector(".js-header")
    const navElements = document.querySelector(".js-nav");
    const roadmapElements = document.querySelector(".js-roadmap");
    const aboutElements = document.querySelector(".js-about");
    const footer = document.querySelector(".js-footer");
    const themeName = document.querySelector(".js-themeName");
    const buttonElements = document.querySelectorAll(".js-nav__button");
    const nextElements = document.querySelectorAll(".js-about__next");

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
};

const previousPhoto = () => {
    img.classList.toggle("nextPhoto");
    const thatsNextPhoto = img.classList.contains("nextPhoto");
    img.src = thatsNextPhoto ?
        "images/chorwacja.jpg" :
        "images/chill.jpg";

};

const furtherPhoto = () => {
    img.classList.toggle("nextPhoto");
    const thatsNextPhoto = img.classList.contains("nextPhoto");
    img.src = thatsNextPhoto ?
        "images/chorwacja.jpg" :
        "images/chill.jpg";
}

button.addEventListener("click", changeTheme);

left.addEventListener("click", previousPhoto);

right.addEventListener("click", furtherPhoto);
}