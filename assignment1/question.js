function next1() {
    document.getElementById("q1").style.display = "none";
    document.getElementById("q2").style.display = "block";
}

function next2() {
    document.getElementById("q2").style.display = "none";
    document.getElementById("q3").style.display = "block";
}

function next3() {
    document.getElementById("q3").style.display = "none";
    document.getElementById("q4").style.display = "block";
}

function submitQuiz() {
    alert("Quiz Submitted!");
}