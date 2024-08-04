const numQuizData = [
    { 
        id: "numq1",
        question: "Q1. What year did the Battle of Clontarf take place?", 
        answer: "1014",
        answertype: "year",
        errormsg: "For Question 1, please input a valid year. This event took place after 0 AD/CE.",
        fact: "The correct answer is 1014. A Norse-Irish alliance between the Irish Kingdom of Leinster, the Hiberno-Scandinanvian kingdom of Dublin, and Vikings from Orkney and Mann fought an Irish army, led by the High King of Ireland, Brian Boru at Clontarf on 23rd April, 1014.",
    },
    { 
        id: "numq2",
        question: "Q2. How many Cathedrals are there in Dublin?", 
        answer: "2",
        answertype: "quantity",
        errormsg: "For Question 2, please enter a valid quantity (e.g. 0 or greater).",
        fact: "The correct answer is 2. Dublin's two cathedrals are St. Patrick's Cathedral and Christ Church Cathedral.",
    },
    { 
        id: "numq3",
        question: "Q3. What year did the Act of Union come into force?", 
        answer: "1801",
        answertype: "year",
        errormsg: "For Question 3, please input a valid year. This event took place after 0 AD/CE.",
        fact: "The correct answer is 1801. After the 1798 Rebellion, the passage of the Act of Union led to the abolition of the short-lived Parliament of Ireland and the return of political power to London.",
    },
    { 
        id: "numq4",
        question: "Q4. What year did the Easter Rising take place?", 
        answer: "1916",
        answertype: "year",
        errormsg: "For Question 4, please input a valid year. This event took place after 0 AD/CE.",
        fact: "The correct answer is 1916. The Easter Rising was an armed rebellion by Irish republicans against British rule in Ireland and took place in April 1916.",
    },
    { 
        id: "numq5",
        question: "Q5. How tall (in metres) is the Spire?", 
        answer: "120",
        answertype: "quantity",
        errormsg: "For Question 5, please enter a valid quantity (e.g. 0 or greater).",
        fact: "The correct answer is 120. At 120 metres tall, the Spire is taller than the Statue of Liberty in New York.",
    },
];

let modal = document.getElementById("errorModal");
let span = document.getElementsByClassName("close")[0];
let errormsgText = "";


const formContainer = document.querySelector(".numquestions");
const formObject = document.querySelector(".numquiz-form");
const formContent = document.querySelector("#numquiz-form-content");
const numResultsContainer = document.querySelector(".numresults");
const numRestartButton = document.querySelector("#numrestart");
const numTotalSpan = document.querySelector("#numtotal");
const numCorrectSpan = document.querySelector("#numcorrect");
const numStartContainer = document.querySelector(".numquizstart");
const numCorrectResultsText = document.querySelector(".correct-results")

function generateForm() {
    let newFormContent = "";
    numQuizData.forEach(currentQuestion => {
        newFormContent += `
        <label for="${currentQuestion.id}">${currentQuestion.question}</label>
        <br><br>
        <input type="number" id="${currentQuestion.id}">
        <br><br>`;
    });
    formContent.innerHTML = newFormContent;
}

function startNumQuiz() {
    numStartContainer.classList.add("inactive");
    formContainer.classList.remove("inactive");
};

function checkFormComplete() {
    let formIncomplete = false;
    numQuizData.forEach(currentQuestion => {
        let answerField = document.getElementById(`${currentQuestion.id}`);
        let answerValue = answerField.value;
        if (answerValue === "") { 
            formIncomplete = true;
        } 
        });
    if (formIncomplete) {
        errormsgText += "Please fill in all fields. If you are not sure of an answer, take a guess!";
    }
    return formIncomplete;
};

function checkValidYear() {
    let formInvalidYear = false;
    numQuizData.forEach(currentQuestion => {
        let answerField = document.getElementById(`${currentQuestion.id}`);
        let answerValue = answerField.value;
        if (currentQuestion.answertype === "year" && answerValue < 0 || currentQuestion.answertype === "year" && answerValue > 2024) { 
            formInvalidYear = true;
            errormsgText += `<p>${currentQuestion.errormsg}</p>`;
        } 
    });
    return formInvalidYear;
};

function checkValidQuantity() {
    let formInvalidQuantity = false;
    numQuizData.forEach(currentQuestion => {
        let answerField = document.getElementById(`${currentQuestion.id}`);
        let answerValue = answerField.value;
        if (currentQuestion.answertype === "quantity" && answerValue < 0) {
            formInvalidQuantity = true;
            errormsgText += `<p>${currentQuestion.errormsg}</p>`;
        }
    });
    return formInvalidQuantity;
};

function countCorrectAnswers() {
    let numQuizCorrect = 0;
    numQuizData.forEach(currentQuestion => {
        let answerField = document.getElementById(`${currentQuestion.id}`);
        let answerValue = answerField.value;
        if (currentQuestion.answer === answerValue) {
            numQuizCorrect++;
        }
    });
    return numQuizCorrect;
};

function checkForm() {
    errormsgText = "";
    numQuizCorrect = 0;
    let formElem = document.getElementById("numquiz-form");
    let modalTextContainer = document.getElementById("modal-text");
    formElem.addEventListener('submit', event => {
      event.preventDefault();  
    });
    if (checkFormComplete() | checkValidYear() | checkValidQuantity()) {
        modal.style.display = "block";
        modalTextContainer.innerHTML = `${errormsgText}`;
    } else {
        modal.style.display = "none";       
        formContainer.classList.add("inactive");
        numResultsContainer.classList.remove("inactive");
        numTotalSpan.textContent = numQuizData.length;
        numCorrectSpan.textContent = countCorrectAnswers();
        showCorrectAnswers();
    }
};

function showCorrectAnswers() {
    let correctAnswers = `<p>The correct answers are:</p>`;
    numQuizData.forEach(currentQuestion => {
        correctAnswers += `<ul class="results-list">
        <li for="${currentQuestion.id}">${currentQuestion.fact}</li>
        </ul>`;
    });
    numCorrectResultsText.innerHTML = correctAnswers;
};

function restartNumQuiz() {
    numStartContainer.classList.remove("inactive");
    numResultsContainer.classList.add("inactive");
    formObject.reset();
};

window.addEventListener("load", generateForm());

document.addEventListener('click', function(e){
    const id = e.target.id;
    modal.style.display = "none";
    if (id === "numstart") {
        startNumQuiz();
    } else if (id === "guess") {
        checkForm();
    } else if (id === "closemodal") {
        modal.style.display = "none";
    } else if (id === "numrestart") {
        restartNumQuiz();
    }
});