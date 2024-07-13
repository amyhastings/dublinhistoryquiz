const quizData = [
    { 
        question_url: "images/question1.jpg",
        alt_text: "Black and white engraving of nineteenth century street scene",
        question: "Which famous Dublin building can you see in this 1835 engraving by G. Petrie?", 
        answers: [
        { text: "Leinster House", correct: false },
        { text: "The Rotunda Hospital", correct: true },
        { text: "Trinity College", correct: false },
        { text: "The National Gallery", correct: false },
        ],
        answer_url: "images/answer1.jpg",
        ans_alt_text: "Black and white engraving of nineteenth century street scene",
        fact: "The correct answer is: The Rotunda Hospital. The Rotunda opened at its current location in 1757 and is the longest continuously operating maternity hospital in the world.",
    },
    { 
        question_url: "images/question2.jpg",
        alt_text: "Historic library stacks",
        question: "Dublin is home to Ireland's oldest public library. Where is it?", 
        answers: [
        { text: "Marsh's Library", correct: true },
        { text: "Old Library, Trinity College", correct: false },
        { text: "The National Library of Ireland", correct: false },
        { text: "Military Archives, Cathal Brugha Barracks", correct: false },
        ],
        answer_url: "images/answer2.jpg",
        ans_alt_text: "Reading cage in Marsh's Library",
        fact: "The correct answer is: Marsh's Library. First opened in 1707, Marsh's Library is said to be haunted by the ghost of Archbishop Narcissus Marsh, who searches the thousands of books for a note hidden by his favourite niece before she ran away to elope with a sea captain, never to return.",
    },
    { 
        question_url: "images/question3.jpg",
        alt_text: "Upper courtyard of Dublin Castle",
        question: "Which famous author of detective stories offered to help solve the mystery of the theft of the Irish Crown Jewels from Dublin Castle?", 
        answers: [
        { text: "Agatha Christie", correct: false },
        { text: "Edgar Allan Poe", correct: false },
        { text: "Gaston Leroux", correct: false },
        { text: "Sir Arthur Conan Doyle", correct: true },
        ],
        answer_url: "images/answer3.jpg",
        ans_alt_text: "The Chapel Royal and the Record Tower at Dublin Castle",
        fact: "The correct answer is: Sir Arthur Conan Doyle. Unfortunately, Sir Arthur Conan Doyle did not get a chance to solve the mystery of the missing Crown Jewels, but he did base his Sherlock Holmes story 'The Bruce-Patrington Plans' on the theft. The Irish Crown Jewels were never recovered."
    },
    { 
        question_url: "images/question4.jpg",
        alt_text: "Rotunda ceiling with stained glass oculus",
        question: "This stunning Rotunda is located in which Dublin building designed by 29-year-old Thomas Cooley?", 
        answers: [
        { text: "The Museum of History and Science, Kildare Street", correct: false },
        { text: "Dublin City Hall", correct: true },
        { text: "The Rotunda Hospital", correct: false },
        { text: "Heuston Station", correct: false },
        ],
        answer_url: "images/answer4.jpg",
        ans_alt_text: "Dublin City Hall",
        fact: "The correct answer is: Dublin City Hall. Originally constructed as the Royal Exchange between 1769 and 1779, the Rotunda was intended to be left open, like the Pantheon in Rome, but, given the wet Irish weather, it was thought better to close the dome with stained glass instead.",
    },
    { 
        question_url: "images/question5.jpg",
        alt_text: "Nineteenth century street scene showing pillar in the centre of the street",
        question: "This view by Samuel Brocas shows which Dublin street in 1820?", 
        answers: [
        { text: "Kildare Street", correct: false },
        { text: "Grafton Street", correct: false },
        { text: "O'Connell Street", correct: true },
        { text: "College Green", correct: false },
        ],
        answer_url: "images/answer5.jpg",
        ans_alt_text: "Mid-twentieth century, black and white photograph of O'Connell Street and Nelson's Pillar",
        fact: "The correct answer is: O'Connell Street. O'Connell Street was known as Drogheda Street in the seventeenth century and then Sackville Street before being renamed O'Connell Street in 1924. Nelson's Pillar (built in 1809) was destroyed after a dissident Republican bombing in 1966. The Spire was constructed on the spot in 2003.",
    },
];

const questionContainer = document.querySelector(".questions");
const resultsContainer = document.querySelector(".results");
const restartButton = document.querySelector("#restart");
const totalSpan = document.querySelector("#total");
const correctSpan = document.querySelector("#correct");
const startContainer = document.querySelector(".quizstart");


document.addEventListener('click', function(e){
    const id = e.target.id;
    if (id === "start") {
        startContainer.classList.add("inactive");
        questionContainer.classList.remove("inactive");
        showQuestion();
    } else if (id === "next") {
        showQuestion();
    } else if (id === "last") {
        showResults();
    } else if (id === "restart") {
        startContainer.classList.remove("inactive");
        resultsContainer.classList.add("inactive");
    }
}
);

let currentQuestionIndex = 0;
let numCorrect = 0;

function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionContainer.innerHTML = `
        <div><img src="${currentQuestion.question_url}" alt-text="${currentQuestion.alt_text}"/></div>
        <p>${currentQuestion.question}</p>
        <ul>
            ${currentQuestion.answers.map(answer => `
                <li>
                    <button class="answer-btn">${answer.text}</button>
                </li>
            `).join("")}
        </ul>
    `;
    const answerButtons = document.querySelectorAll(".answer-btn");
    answerButtons.forEach(button => {
        button.addEventListener("click", checkAnswer);
    }); 
}
function checkAnswer(e) {
    const selectedButton = e.target;
    const currentQuestion = quizData[currentQuestionIndex];
    const isCorrect = quizData[currentQuestionIndex].answers.find(answer => answer.text === selectedButton.textContent).correct;
    let resultText = "";
    resultText += `<div><img src="${currentQuestion.answer_url}" alt-text="${currentQuestion.ans_alt_text}"/></div>`;
    if (currentQuestionIndex < quizData.length - 1) {
    if (isCorrect) {
        numCorrect++;
        resultText += "You are correct!";
    } else {
        resultText += "Not quite!";
    }
    resultText += `<p>${currentQuestion.fact}</p><break><button type="button" id="next">Next Question</button>`;
    questionContainer.innerHTML = `${resultText}`;
    currentQuestionIndex++;
    } else {
        if (isCorrect) {
            numCorrect++;
            resultText += "You are correct!";
        } else {
            resultText += "Not quite!";
        }
            resultText += `<p>${currentQuestion.fact}</p><break><button type="button" id="last">Show My Results!</button>`;
            questionContainer.innerHTML = `${resultText}`;
}
}

function showResults() {
    questionContainer.classList.add("inactive");
    resultsContainer.classList.remove("inactive");
    totalSpan.textContent = quizData.length;
    correctSpan.textContent = numCorrect;
}
