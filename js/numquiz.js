const numQuizData = [
    { 
        id: "numq1",
        question: "What year did the Battle of Clontarf take place?", 
        answer: "1014",
        fact: "xxxx",
    },
    { 
        id: "numq2",
        question: "How many Cathedrals are there in Dublin?", 
        answer: "2",
        fact: "xxxx",
    },
    { 
        id: "numq3",
        question: "What year did the Act of Union come into force?", 
        answer: "1801",
        fact: "xxxx",
    },
    { 
        id: "numq4",
        question: "What year did the Easter Rising take place?", 
        answer: "1916",
        fact: "xxxx",
    },
    { 
        id: "numq5",
        question: "How tall (in metres) is the Spire?", 
        answer: "120",
        fact: "At 120 metres tall, the Spire is taller than the Statue of Liberty in New York.",
    },
];

let numCurrentQuestionIndex = 0;
let numQuizCorrect = 0;

const formContainer = document.querySelector(".numquiz-form");
const formContent = document.querySelector("#numquiz-form-content");
const numResultsContainer = document.querySelector(".numresults");
const numRestartButton = document.querySelector("#numrestart");
const numTotalSpan = document.querySelector("#numtotal");
const numCorrectSpan = document.querySelector("#numcorrect");

window.addEventListener("load", generateForm());

function generateForm() {
    let newFormContent = "";
    numQuizData.forEach(currentQuestion => {
        newFormContent += `
        <label for="${currentQuestion.id}">${currentQuestion.question}</label>
        <input type="number" id="${currentQuestion.id}">
        <br>`;
    });
    formContent.innerHTML = newFormContent;
}

// function attachFormSubmitListener() {
//     let formElem = document.getElementById("numquiz-form");
//     formElem.addEventListener('submit', event => {
//       event.preventDefault();  
//     });
//     checkAnswer();
//     formContainer.classList.add("inactive");
//     numResultsContainer.classList.remove("inactive");
//     numTotalSpan.textContent = numQuizData.length;
//     numCorrectSpan.textContent = numQuizCorrect;
// }

function checkNumAnswer() {
    let formElem = document.getElementById("numquiz-form");
    formElem.addEventListener('submit', event => {
      event.preventDefault();  
    });
    numQuizData.forEach(numCurrentQuestion => {
        let answerField = document.getElementById(`${numCurrentQuestion.id}`);
        let answerValue = answerField.value;
        if (numCurrentQuestion.answer === answerValue) {
            numQuizCorrect++;
        };
    }
    );
    formContainer.classList.add("inactive");
    numResultsContainer.classList.remove("inactive");
    numTotalSpan.textContent = numQuizData.length;
    numCorrectSpan.textContent = numQuizCorrect; 
};

document.addEventListener('click', function(e){
    const id = e.target.id;
    if (id === "numrestart") {
        formContainer.classList.remove("inactive");
        numResultsContainer.classList.add("inactive");
        numQuizCorrect = 0;
        formContainer.reset();
    } else if (id === "guess") {
        checkNumAnswer();
    }
});
