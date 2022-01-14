// variables
var questionIdCounter = 0;
var countdown = 50;
var timerEl = document.getElementById('timer');
var startEl = document.querySelector('#start-quiz');
var pageContentEl = document.querySelector('.main-page');
var questionsEl = document.querySelector('#questions');
var buttonEl = document.querySelector(".btn");

// question variables
var questionOneObj = {
    question: "Commonly used data types DO NOT include:",
    answerOne: "1. strings",
    answerTwo: "2. booleans",
    answerThree: "3. alerts",
    answerFour: "4. numbers"
};

var questionTwoObj = {
    question: "The condition in an if/else statement is enclosed with _______.",

    // make an array

    answerOne: "1. quotes",
    answerTwo: "2. curly brackets",
    answerThree: "3. parenthesis",
    answerFour: "4. square brackets"
};

var questionThreeObj = {
    question: "Arrays in Javascript can be used to store ______.",
    answerOne: "1. numbers and strings",
    answerTwo: "2. other arrays",
    answerThree: "3. booleans",
    answerFour: "4. all of the above"
};

var questionFourObj = {
    question: "String values must be enclosed within _____ when being assigned to variables.",
    answerOne: "1. commas",
    answerTwo: "2. curly brackets",
    answerThree: "3. quotes",
    answerFour: "4. parenthesis"
};

var questionFiveObj = {
    question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
    answerOne: "1. Javascript",
    answerTwo: "2. terminal/bash",
    answerThree: "3. for loops",
    answerFour: "4. console log"
};

var questionsArr = [questionOneObj, questionTwoObj, questionThreeObj, questionFourObj, questionFiveObj];
var currentQuestion = [];
// localStorage array
var highScores = [];

// Quiz timer
var timeLimit = function() {
    

    var timeInterval = setInterval(function () {
        if (countdown > 0) {
            timerEl.textContent = "Time: " + countdown;
            countdown--;
        } 
        else {
            timerEl.textContent = '';

            clearInterval(timeInterval);

            alert("the time is up!");
        }

    }, 1000);
}

// create question elements and fill them
var loadQuestion = function(curQuestion) {
    
    var questionDivEl = document.createElement("div");
    // give class name
    questionDivEl.className = "question-div";
    // give id 
    questionDivEl.setAttribute("data-question-id", questionIdCounter);

    // add text to elements
    questionDivEl.innerHTML = 
    "<h2 class='question-style'>" + curQuestion.question 
    + "</h2><button class='btn' id='correct-btn'>" + curQuestion.answerOne
    + "</button><button class='btn' id='wrong-btn'>" + curQuestion.answerTwo
    + "</button><button class='btn' id='wrong-btn'>" + curQuestion.answerThree
    + "</button><button class='btn' id='wrong-btn'>" + curQuestion.answerFour;

    pageContentEl.replaceWith(questionDivEl);
    console.log(curQuestion);
}

// question cycle function
var cycleQuestions = function() {
    for (var i = 0; i < 5; i++) {
        currentQuestion = loadQuestion(questionsArr[i]);
        questionIdCounter++;
        console.log(currentQuestion);
    }    
};

// recieve user clicks 
var clickButtons = function(event) {
    // get target element
    var targetEl = event.target;
    // correct answer was clicked
    if (targetEl.matches("#correct-btn")) {
        console.log("correct"); 
        
    }
    // wrong answer was clicked
    else if (event.target.matches("#wrong-btn")) {
        console.log("incorrect");
        countdown - 10;
    }
    console.log(event);
};

// function to run through quiz

var quizFunction = function() {
    timeLimit();
    cycleQuestions();

    clickButtons();
}
// event listeners

startEl.addEventListener("click", cycleQuestions);

console.log(questionsArr.length);

cycleQuestions();
