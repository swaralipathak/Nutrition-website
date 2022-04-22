const quizDB = [
    {
        question: "Q1:Why could it be dangerous to eat raw cookie dough?",
        a: "It's Corrosive",
        b: "It has too much Sugar",
        c: "It may contin ain Raw Eggs",
        d: "It expands in your stomach",
        ans: "a4"
    },
    {
        question: "Q2: Citrus fruits are a great source of which vitamin?",
        a: "Vitamin A",
        b: "Vitamin C",
        c: "Vitamin B12",
        d: "Vitamin D",
        ans: "a2"
    },
    {
        question: "Q3: A calorie is a unit of measurement used to measure what?",
        a: "Amount of Energy in Food",
        b: "Amount of Fat in Food",
        c: "Amount of Protein in Food",
        d: "Amount of Water in Food",
        ans: "a1",
    },
    {
        question: "Q4: What is the body's main source of energy?",
        a: "Minerals",
        b: "Carbohydrates",
        c: "Vitamins",
        d: "Water",
        ans: "a2"
    },

    {
        question: "Q5: Which of the following are needed to build, repair and maintain body tissue?",
        a: "Minerals",
        b: "Proteins",
        c: "Vitamins",
        d: "Fats",
        ans: "a2"
    },
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount= 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
    
    
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll = ()=> {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', ()=> {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer == quizDB[questionCount].ans) {
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length) {
        loadQuestion();
    }

    else {
        showScore.innerHTML = `
        <h3> You Scored ${score}/${quizDB.length} !!!!</h3>
            <button class= "btn" onclick="location.reload()"> Play Again </button>

        `;
        showScore.classList.remove('scoreArea');

    }
});

