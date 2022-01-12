// variables
var timerEl = document.getElementById('timer');
var startEl = document.querySelector('#start-quiz');
var pageContentEl = document.querySelector('#page-content');

// localStorage array
var highScores = [];

var loadQuestion = function() {
    // create new Question
    var questionEl = document.createElement("h2");
    questionEl.textContent = "Commonly used data types DO NOT include:"

    var questionOneEl = document.querySelector("#question-one");
    questionOneEl.appendChild(questionEl);
};

startEl.addEventListener("click", function() {
    loadQuestion();
});


console.log(startEl);