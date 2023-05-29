const quizData = [
    {
        question: "Which lanugage runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "Javascript",
        corect: "d",
    },

    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        corect: "b",
    },

    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloob Machine Language",
        d: "Helicopters Terminals Motoboats Lamborginis",
        corect: "a",
    },

    {
        question: "What year was Javascript Launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        corect: "b",
    },

    {
        question: "What Language can be used to make games?",
        a: "C++",
        b: "Python",
        c: "Javascript",
        d: "all of the above",
        corect: "d",
    },

    {
        question: "Which part of the computer is considered as Brain of the Computer?",
        a: "Random Access Memory",
        b: "Central Process Unit",
        c: "Read Only Memory",
        d: "Hard Disk",
        corect: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    console.log(answer)
})

