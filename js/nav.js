const menuButton = document.querySelector("#hamburger");
const closeMenuButton = document.querySelector("#close-menu");
const menuContainer = document.querySelector(".menu-content");
const mapQuiz = document.getElementById("mapquiz");
const picQuiz = document.getElementById("picquiz");
const numQuiz = document.getElementById("numquiz");
const banner = document.querySelector(".banner");
const mainContainter = document.querySelector(".main-content");
const aboutContainer = document.querySelector(".about");

document.addEventListener('click', function(e){
    const id = e.target.id;
    e.preventDefault();
    if (id === "hamburger") {
        openMenu();
    } else if (id === "close-menu") {
        closeMenu();
    } else if (id === "scroll-num-quiz") {
        scrollToNumQuiz();
    } else if (id === "scroll-pic-quiz") {
        scrollToPicQuiz();
    } else if (id === "scroll-map-quiz") {
        scrollToMapQuiz();
    } else if (id === "go-to-about") {
        openAbout();
    } else if (id === "go-to-about-from-main") {
        openAbout();
    } else if (id === "dhq-home") {
        window.location.reload();
    }
});

function openMenu() {
    show(menuContainer);
    show(closeMenuButton);
    hide(menuButton);
};

function closeMenu() {
    hide(menuContainer);
    hide(closeMenuButton);
    show(menuButton);
};

function scrollToNumQuiz() {
    activateMainContent();
    closeMenu();
    numQuiz.scrollIntoView({behavior: "smooth"});
};

function scrollToPicQuiz() {
    activateMainContent();
    closeMenu();
    picQuiz.scrollIntoView({behavior: "smooth"});
};

function scrollToMapQuiz() {
    activateMainContent();
    closeMenu();
    mapQuiz.scrollIntoView({behavior: "smooth"});
};

function openAbout() {
    hide(banner);
    hide(mainContainter);
    show(aboutContainer);
    closeMenu();
};

function activateMainContent() {
    show(banner);
    show(mainContainter);
    hide(aboutContainer);
};

