
const mapStartContainer = document.querySelector(".mapquizstart");
const mapContainer = document.querySelector(".mapquizcontent");
const mapQuizContainer = document.getElementById("mapquizcontent");
const mapInstructions = document.querySelector(".mapinstructions");
const mapResultsContainer = document.querySelector(".mapresults");
const mapTotalSpan = document.querySelector("#maptotal");
const mapCorrectSpan = document.querySelector("#mapcorrect");
const mapAnswer1 = document.querySelector(".mapanswer1");
const mapAnswer2 = document.querySelector(".mapanswer2");
const mapAnswer3 = document.querySelector(".mapanswer3");
const giveUpButton = document.querySelector("#giveup");
const mapRestartButton = document.querySelector(".maprestart");
const learnMoreButton = document.querySelector("#learnMore");
const resultsCommentText = document.querySelector(".results-comment-text");
const mapLearnMore = document.querySelector(".mapLearnMore");
const mapLearnContainer = document.getElementById("mapLearnContainer");
const mapModal = document.querySelector("#mapModal");
let wrongPlaceNum = 0;



document.addEventListener('click', function(e){
    const id = e.target.id;
    e.preventDefault();
    if (id === "mapstart") {
        startMapQuiz();
    } else if (id === "mapanswer1") {
        mapAnswer1.classList.remove("inactive");
        markAsCorrect(mapAnswer1);
        if (allAnswersCorrect()) {
            allFound();
            wrongPlaceNum = 0;
        }
    } else if (id === "mapanswer2") {
        mapAnswer2.classList.remove("inactive");
        markAsCorrect(mapAnswer2);
        if (allAnswersCorrect()) {
            allFound();
            wrongPlaceNum = 0;
        }
    } else if (id === "mapanswer3") {
        mapAnswer3.classList.remove("inactive");
        markAsCorrect(mapAnswer3);
        if (allAnswersCorrect()) {
            allFound();
            wrongPlaceNum = 0;
        }
    } else if (id === "backmap") {
        wrongPlaceNum++;
        wrongAnswers();
    } else if (id === "keeptrying") {
        modal.style.display = "none";
    } else if (id === "giveup") {
        giveUp();
    } else if (id === "giveup2") {
        giveUp();
    } else if (id === "maprestart") {
        restartMapQuiz();
    } else if (id === "maprestart2") {
        restartMapQuiz();
    } else if (id === "learnMore") {
        learnMore();
    } else if (id === "closemapmodal") {
        mapModal.style.display = "none";
    }
});

function startMapQuiz() {
    mapStartContainer.classList.add("inactive");
    mapContainer.classList.remove("inactive");
    mapInstructions.classList.remove("inactive");
    giveUpButton.classList.remove("inactive");
    mapRestartButton.classList.add("inactive");
    learnMoreButton.classList.add("inactive");
    mapQuizContainer.scrollIntoView({behavior: "smooth"});
};

function markAsCorrect(answer) {
    answer.classList.add("correct");
};

function allAnswersCorrect() {
    let correctAnswers = document.querySelectorAll(".correct");
    return (correctAnswers.length >= 3);
};

function wrongAnswers() {
    if (wrongPlaceNum === 3) {
        mapModal.style.display = "block";
    };
};


function allFound() {
    resultsCommentText.innerHTML = `<h4>You did it!</h4>`;
    giveUpButton.classList.add("inactive");
    mapRestartButton.classList.remove("inactive");
    learnMoreButton.classList.remove("inactive");
};

function giveUp() {
    mapModal.style.display = "none";
    mapAnswer1.classList.remove("inactive");
    mapAnswer2.classList.remove("inactive");
    mapAnswer3.classList.remove("inactive");
    mapInstructions.classList.add("inactive");
    giveUpButton.classList.add("inactive");
    mapRestartButton.classList.remove("inactive");
    learnMoreButton.classList.remove("inactive");
    resultsCommentText.innerHTML = `<h4>Good effort!</h4>`;
};

function learnMore() {
    mapLearnMore.classList.remove("inactive");
    mapContainer.classList.add("inactive");
    mapLearnContainer.scrollIntoView({behavior: "smooth"});
};

function restartMapQuiz() {
    mapStartContainer.classList.remove("inactive");
    mapInstructions.classList.remove("inactive");
    mapContainer.classList.add("inactive");
    mapLearnMore.classList.add("inactive");
    mapAnswer1.classList.add("inactive");
    mapAnswer2.classList.add("inactive");
    mapAnswer3.classList.add("inactive");
    resultsCommentText.classList.add("inactive");
}

window.onclick = function(event) {
    if (event.target == modal) {
      mapModal.style.display = "none";
    }
  }