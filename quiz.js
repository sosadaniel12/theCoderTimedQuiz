const quizDiv = document.getElementById("quiz");
const resultsDiv = document.getElementById("results");
const submitButn = document.getElementById("submit");

function quizStructure() {

}

function showResults() {

}

quizStructure();

submitButn.addEventListener("click", showResults);

const myQuestions = [
    {
        question: "Who invented JavaScript",
        answers: {
            a: "Douglas Crockford",
            b: "Sheryl Sandbeg",
            c: "Bredan Eich",
        },
        correctAnswer: "c"
    },
    {
        question: "Which one of these is a JavaScript package manager?",
        answers: {
            a: "Angular",
            b: "jQuery",
            c: "RequireJS",
            c: "RequireJS",
            d: "ESLint",
        },
        correctAnswer: "d"
    }
];

function quizStructure() {
    const output = [];
    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (letter in currentQuestion.answers) {
            answer.push(
                `<label>
                    <input type = "radio" name = "questions${questionNumber}" value = "${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        output.push(
            `<div class = "question"> ${currentQuestion.question} </div>
            <div class = "answers"> ${answers.join('')} </div>`
        );
    }
    );

    quizDiv.innerHTML = output.join('');
}

myQuestions.forEach((currentQuestion, questionNumber) => {

});

function showResults() {

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {

        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
            // add to the number of correct answers
            numCorrect++;

            // color the answers green
            answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else {
            // color the answers red
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

