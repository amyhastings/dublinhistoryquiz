const menuButton = document.querySelector("#hamburger");
const closeMenuButton = document.querySelector(".close-menu");
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
    } else if (id === "close") {
        closeMenu();
    } else if (id === "scrollNumQuiz") {
        scrollToNumQuiz();
    } else if (id === "scrollPicQuiz") {
        scrollToPicQuiz();
    } else if (id === "scrollMapQuiz") {
        scrollToMapQuiz();
    } else if (id === "goToAbout") {
        openAbout();
    } else if (id === "goToAboutFromMain") {
        openAbout();
    } else if (id === "dhq-home") {
        window.location.reload();
    }
});

function openMenu() {
    menuContainer.classList.remove("inactive");
    closeMenuButton.classList.remove("inactive");
    menuButton.classList.add("inactive");
};

function closeMenu() {
    menuContainer.classList.add("inactive");
    closeMenuButton.classList.add("inactive");
    menuButton.classList.remove("inactive");
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
    banner.classList.add("inactive");
    mainContainter.classList.add("inactive");
    aboutContainer.classList.remove("inactive");
    closeMenu();
};



