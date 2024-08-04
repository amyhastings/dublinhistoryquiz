const mapStartContainer = document.querySelector(".mapquiz-start");
const mapContainer = document.querySelector(".mapquiz-content");
const mapQuizContainer = document.getElementById("mapquiz-content");
const mapInstructions = document.querySelector(".map-instructions");
const mapResultsContainer = document.querySelector(".mapresults");
const mapTotalSpan = document.querySelector("#maptotal");
const mapCorrectSpan = document.querySelector("#mapcorrect");
const mapAnswer1 = document.querySelector(".mapanswer1");
const mapAnswer2 = document.querySelector(".mapanswer2");
const mapAnswer3 = document.querySelector(".mapanswer3");
const giveUpButton = document.querySelector("#giveup");
const mapRestartButton = document.querySelector(".map-restart");
const learnMoreButton = document.querySelector("#learn-more");
const resultsCommentText = document.querySelector(".results-comment-text");
const mapLearnMore = document.querySelector(".map-learn-more");
const mapLearnContainer = document.getElementById("map-learn-container");
const mapModal = document.querySelector("#map-modal");
let wrongPlaceNum = 0;

function startMapQuiz() {
    hide(mapStartContainer);
    show(mapContainer);
    show(mapInstructions);
    show(giveUpButton);
    hide(mapRestartButton);
    hide(learnMoreButton);
    mapQuizContainer.scrollIntoView({behavior: "smooth"});
};

function markAsCorrect(answer) {
    answer.classList.add("correct");
};

function allAnswersCorrect() {
    let correctAnswers = document.querySelectorAll(".correct");
    return (correctAnswers.length >= 3);
};

function resetAnswers() {
    let correctAnswers = document.querySelectorAll(".correct");
    correctAnswers.forEach(a => {
        a.classList.remove("correct");
    });
}

function wrongAnswers() {
    if (wrongPlaceNum === 3) {
        mapModal.style.display = "block";
        wrongPlaceNum = 0;
    };
};

function allFound() {
    show(resultsCommentText);
    resultsCommentText.innerHTML = `<h4>You did it!</h4>`;
    hide(giveUpButton);
    hide(mapInstructions);
    show(mapRestartButton);
    show(learnMoreButton);
};

function giveUp() {
    mapModal.style.display = "none";
    show(mapAnswer1);
    show(mapAnswer2);
    show(mapAnswer3);
    hide(mapInstructions);
    hide(giveUpButton);
    show(mapRestartButton);
    show(learnMoreButton);
    resultsCommentText.innerHTML = `<h4>Good effort!</h4>`;
};

function learnMore() {
    show(mapLearnMore);
    hide(mapContainer);
    mapLearnContainer.scrollIntoView({behavior: "smooth"});
};

function restartMapQuiz() {
    show(mapStartContainer);
    show(mapInstructions);
    hide(mapContainer);
    hide(mapLearnMore);
    hide(mapAnswer1);
    hide(mapAnswer2);
    hide(mapAnswer3);
    hide(resultsCommentText);
    resetAnswers();
};

document.addEventListener('click', function(e){
    const id = e.target.id;
    mapModal.style.display = "none";
    e.preventDefault();
    if (id === "mapstart") {
        startMapQuiz();
    } else if (id === "mapanswer1") {
        show(mapAnswer1);
        markAsCorrect(mapAnswer1);
        if (allAnswersCorrect()) {
            allFound();
            wrongPlaceNum = 0;
        }
    } else if (id === "mapanswer2") {
        show(mapAnswer2);
        markAsCorrect(mapAnswer2);
        if (allAnswersCorrect()) {
            allFound();
            wrongPlaceNum = 0;
        }
    } else if (id === "mapanswer3") {
        show(mapAnswer3);
        markAsCorrect(mapAnswer3);
        if (allAnswersCorrect()) {
            allFound();
            wrongPlaceNum = 0;
        }
    } else if (id === "backmap") {
        wrongPlaceNum++;
        wrongAnswers();
    } else if (id === "keep-trying") {
        mapModal.style.display = "none";
    } else if (id === "giveup") {
        giveUp();
    } else if (id === "giveup2") {
        giveUp();
    } else if (id === "map-restart") {
        restartMapQuiz();
    } else if (id === "map-restart2") {
        restartMapQuiz();
    } else if (id === "learn-more") {
        learnMore();
    } else if (id === "close-map-modal") {
        mapModal.style.display = "none";
    }
});