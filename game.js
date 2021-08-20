//When page loads a timer starts to countdown
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#timerDisplay');
    startTimer(fiveMinutes, display);
};

function generateQuiz(questions, quizContainer, results, submitButton) {

    function showQuestions(questions, quizContainer) {
        // code will go here
    }

    function showResults(questions, quizContainer, results) {
        // code will go here
    }

    // show the questions
    showQuestions(questions, quizContainer);

    // when user clicks submit, show results
    submitButton.onclick = function () {
        showResults(questions, quizContainer, results);
    }
}