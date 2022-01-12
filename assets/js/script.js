// variables
var countdown = 50;
var questionIdCounter = 0;
var timerEl = document.getElementById('timer');
var startEl = document.querySelector('#start-quiz');
var pageContentEl = document.querySelector('#page-content');
var questionsEl = document.querySelector("#questions");
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
// localStorage array
var highScores = [];

// create first question
var loadQuestion = function() {
    // create new Question
    var questionEl = document.createElement("h2");
    var answersOneEl = document.createElement("button");
    var answersTwoEl = document.createElement("button");
    var answersThreeEl = document.createElement("button");
    var answersFourEl = document.createElement("button");
    // add class name for css here

    // add question Id as attribute
    questionEl.setAttribute("data-question-id", questionIdCounter);
    answersOneEl.setAttribute("data-answers-id", questionIdCounter);
    answersTwoEl.setAttribute("data-answers-id", questionIdCounter);
    answersThreeEl.setAttribute("data-answers-id", questionIdCounter);
    answersFourEl.setAttribute("data-answers-id", questionIdCounter);
    

    // put in text
    questionEl.textContent = questionOneObj.question;
    answersOneEl.textContent = questionOneObj.answerOne;
    answersTwoEl.textContent = questionOneObj.answerTwo;
    answersThreeEl.textContent = questionOneObj.answerThree;
    answersFourEl.textContent = questionOneObj.answerFour;
    
    // append child to generate questions/answers
    questionsEl.appendChild(questionEl);
    questionsEl.appendChild(answersOneEl);
    questionsEl.appendChild(answersTwoEl);
    questionsEl.appendChild(answersThreeEl);
    questionsEl.appendChild(answersFourEl);

    //
    
};

// question cycle function
var cycleQuestions = function() {
    for (var i = 0; i < 5; i++) {
        loadQuestion(questionsArr);
        questionIdCounter++;
    }
}
// event listeners
startEl.addEventListener("click", cycleQuestions);

console.log(questionsArr);