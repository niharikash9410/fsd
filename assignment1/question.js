
let score = 0;
let selected = {};

function startQuiz() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("quiz").style.display = "block";
}


function checkAnswer(option, correct, questionNumber) {

    // Remove selection from previous option
    let buttons = document.querySelectorAll("#question" + questionNumber + " button");

    for (let i = 0; i < buttons.length; i++) {
        if (!buttons[i].classList.contains("next-btn")) {
            buttons[i].style.backgroundColor = "white";
            buttons[i].style.color = "black";
        }
    }

    // Select clicked option
    if (correct) {
        option.style.backgroundColor = "green";
        option.style.color = "white";
    }
    else {
        option.style.backgroundColor = "red";
        option.style.color = "white";
    }

    selected[questionNumber] = correct;
}


function nextQuestion(questionNumber) {

    document.getElementById("question" + questionNumber).style.display = "none";

    document.getElementById("question" + (questionNumber + 1)).style.display = "block";
}


function submitQuiz() {

    document.getElementById("question4").style.display = "none";

    document.getElementById("result").style.display = "block";

    score = 0;

    for (let i = 1; i <= 4; i++) {
        if (selected[i] === true) {
            score++;
        }
    }

    document.getElementById("score").innerHTML =
        "Your Score: " + score + " / 4";
}
