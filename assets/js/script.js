// variables
var timerEl = document.getElementById('timer');
var startEl = document.querySelector('#start-quiz');
var pageContentEl = document.querySelector('#page-content');
var questionsEl = document.querySelector("#questions");
// localStorage array
var highScores = [];

// create first question
var loadQuestionOne = function() {
    // create new Question
    var questionEl = document.createElement("h2");
    var answersOneEl = document.createElement("button");
    var answersTwoEl = document.createElement("button");
    var answersThreeEl = document.createElement("button");
    var answersFourEl = document.createElement("button");
    // add class name for css here

    // put in text
    questionEl.textContent = "Commonly used data types DO NOT include:";
    answersOneEl.textContent = "1. strings";
    answersTwoEl.textContent = "2. booleans";
    answersThreeEl.textContent = "3. alerts";
    answersFourEl.textContent = "4. numbers";
    
    // append child to generate questions/answers
    questionsEl.appendChild(questionEl);
    questionsEl.appendChild(answersOneEl);
    questionsEl.appendChild(answersTwoEl);
    questionsEl.appendChild(answersThreeEl);
    questionsEl.appendChild(answersFourEl);
};


startEl.addEventListener("click", loadQuestionOne);


// console.log(startEl);