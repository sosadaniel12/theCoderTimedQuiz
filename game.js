
let question = document.querySelector('#question');
let choices = document.querySelectorAll('.choice-text');


let currentQuestion = {};
let rightAnswers = true;
let questionCounter = 0;
let availableQuestions = [];

function countdownTimer() {
    const parts = {
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    }
    remaining = Object.keys(parts).map(part => {
        if (!parts[part]) return;
        return `${parts[part]} ${part}`;
    }).join("");
    document.getElementById('#timerDisplay')
}

let questions = [
    {
        question: 'What is ECMA6?',
        choice1: 'Version of JavaScript',
        choice2: 'Version of HTML',
        choice3: 'Version of CSS',
        choice4: 'Version of BootStrap',
        answer: 1,
    },
    {
        question: 'Arrays can be used to store?',
        choice1: 'Variables',
        choice2: 'Numbers',
        choice3: 'Strings',
        choice4: 'Booleans',
        answer: 3,
    },
    {
        question: 'What is a function?',
        choice1: ' set of statements that performs a task',
        choice2: 'different types of variables',
        choice3: 'a set of arrays in a variable',
        choice4: 'undefined',
        answer: 1,
    },
    {
        question: 'What is a boolean?',
        choice1: 'True or False',
        choice2: 'Numbers',
        choice3: 'A dataset',
        choice4: 'a type of method',
        answer: 1,
    },
    {
        question: 'What is pseudo coding?',
        choice1: 'a cool way to code',
        choice2: 'writing codes in comment',
        choice3: 'hacking using coding',
        choice4: 'all the above',
        answer: 2,
    },
    {
        question: 'What case is JavaScript?',
        choice1: 'snake case',
        choice2: 'lower case',
        choice3: 'pipe case',
        choice4: 'camel case',
        answer: 4,
    },
    {
        question: 'What type of language is JavaScript?',
        choice1: 'static',
        choice2: 'dynamic',
        choice3: 'parallel',
        choice4: 'role-oriented',
        answer: 2,
    },
    {
        question: 'What is CSS used for?',
        choice1: 'to style HTML content',
        choice2: 'to style JavaScript content',
        choice3: 'to use math',
        choice4: 'to logically use',
        answer: 2,
    },
    {
        question: 'When was HTML created?',
        choice1: '1999',
        choice2: '1975',
        choice3: '1950',
        choice4: '1989',
        answer: 4,
    },
    {
        question: 'What is JSON used for',
        choice1: 'representing structured dat based on JS object syntax',
        choice2: 'to help push files in GitHub',
        choice3: 'a library for JavaScript',
        choice4: 'to structure code easier',
        answer: 2,
    },
]

jsonQuestions = JSON.stringify(questions);
console.log(jsonQuestions)

const maxQuestions = 10;

function startGame() {
    questionCounter = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

function getNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter > maxQuestions) {
        localStorage.setItem('mostRecentGame')
        return window.location.assign('end.html');
    }

    let questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        let number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionsIndex, 1);

    rightAnswers = true;
}

choices.forEach(choices => {
    choices.addEventListener('click', e => {
        if (!rightAnswers)
            return;

        let selectedChoice = e.target;
        let selectedAnswer = selectedChoice.dataset['number'];
        setTimeout(() => {
            getNewQuestion();
        }, 1000);
    });

});

startGame()

//end.html//
