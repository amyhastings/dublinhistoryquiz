const numQuizData = [
    { 
        id: "numq1",
        question: "Q1. What year did the Battle of Clontarf take place?", 
        answer: "1014",
        answertype: "year",
        errormsg: "For Question 1, please input a valid year. This event took place after 0 AD/CE.",
        fact: "xxxx",
    },
    { 
        id: "numq2",
        question: "Q2. How many Cathedrals are there in Dublin?", 
        answer: "2",
        answertype: "quantity",
        errormsg: "For Question 2, please enter a valid quantity (e.g. 0 or greater).",
        fact: "xxxx",
    },
    { 
        id: "numq3",
        question: "Q3. What year did the Act of Union come into force?", 
        answer: "1801",
        answertype: "year",
        errormsg: "For Question 3, please input a valid year. This event took place after 0 AD/CE.",
        fact: "xxxx",
    },
    { 
        id: "numq4",
        question: "Q4. What year did the Easter Rising take place?", 
        answer: "1916",
        answertype: "year",
        errormsg: "For Question 4, please input a valid year. This event took place after 0 AD/CE.",
        fact: "xxxx",
    },
    { 
        id: "numq5",
        question: "Q5. How tall (in metres) is the Spire?", 
        answer: "120",
        answertype: "quantity",
        errormsg: "For Question 5, please enter a valid quantity (e.g. 0 or greater).",
        fact: "At 120 metres tall, the Spire is taller than the Statue of Liberty in New York.",
    },
];

let modal = document.getElementById("errorModal");
let span = document.getElementsByClassName("close")[0];


const formContainer = document.querySelector(".numquestions");
const formContent = document.querySelector("#numquiz-form-content");
const numResultsContainer = document.querySelector(".numresults");
const numRestartButton = document.querySelector("#numrestart");
const numTotalSpan = document.querySelector("#numtotal");
const numCorrectSpan = document.querySelector("#numcorrect");
const numStartContainer = document.querySelector(".numquizstart");

window.addEventListener("load", generateForm());

function generateForm() {
    let newFormContent = "";
    numQuizData.forEach(currentQuestion => {
        newFormContent += `
        <label for="${currentQuestion.id}">${currentQuestion.question}</label>
        <br>
        <input type="number" id="${currentQuestion.id}">
        <br>`;
    });
    formContent.innerHTML = newFormContent;
}

function checkNumAnswer() {
    let numQuizCorrect = 0;
    let formElem = document.getElementById("numquiz-form");
    let formIncomplete = false;
    let formInvalidYear = false;
    let formInvalidQuantity = false;
    let errormsgText = "";
    let modalTextContainer = document.getElementById("modal-text");
    formElem.addEventListener('submit', event => {
      event.preventDefault();  
    });
    numQuizData.forEach(currentQuestion => {
        let answerField = document.getElementById(`${currentQuestion.id}`);
        let answerValue = answerField.value;
        let numCurrentQuestion = numQuizData[currentQuestionIndex];
        if (answerValue === "") { 
            formIncomplete = true;
        } 
        if (numCurrentQuestion.answertype === "year" && answerValue < 0 || numCurrentQuestion.answertype === "year" && answerValue > 2024) { 
            formInvalidYear = true;
            errormsgText += `<p>${currentQuestion.errormsg}</p>`;
        } 
        if (numCurrentQuestion.answertype === "quantity" && answerValue < 0) {
            formInvalidQuantity = true;
            errormsgText += `<p>${currentQuestion.errormsg}</p>`;
        }
        if (numCurrentQuestion.answer === answerValue) {
            numQuizCorrect++;
        }
    });
    if (formIncomplete) {
        errormsgText += "Please fill in all fields. If you are not sure of an answer, take a guess!";
    }
    if (formIncomplete === true  || formInvalidYear === true || formInvalidQuantity === true) {
        modal.style.display = "block";
        modalTextContainer.innerHTML = `${errormsgText}`;
    } else {
        modal.style.display = "none";       
        formContainer.classList.add("inactive");
        numResultsContainer.classList.remove("inactive");
        numTotalSpan.textContent = numQuizData.length;
        numCorrectSpan.textContent = numQuizCorrect;
    }
};


document.addEventListener('click', function(e){
    const id = e.target.id;
    if (id === "numstart") {
        numStartContainer.classList.add("inactive");
        formContainer.classList.remove("inactive");
    } else if (id === "guess") {
        checkNumAnswer();
    } else if (id === "closemodal") {
        modal.style.display = "none";
    } else if (id === "numrestart") {
        formContainer.classList.remove("inactive");
        numResultsContainer.classList.add("inactive");
        formContainer.reset();
    }
});


window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }