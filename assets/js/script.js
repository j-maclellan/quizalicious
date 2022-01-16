// variables
var questionIdCounter = 0;
var countdown = 50;
var timerEl = document.getElementById('timer');
var startEl = document.querySelector('#start-quiz');
var firstPageEl = document.querySelector('#page-first');
var quizPageEl = document.querySelector('#page-quiz');
var endPageEL = document.querySelector("#page-end");
var pageScoresEl = document.querySelector("#page-scores");
var popupEl = document.getElementById("alert");

// questions
var questionsArr = [
    { // question 1
        question: "Commonly used data types DO NOT include:",
        choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "3. alerts"
    },
    { // question 2
        question: "The condition in an if/else statement is enclosed with _____.",
        choices: ["1.quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
        answer: "3. parenthesis"
    },
    { // question 3
        question: "Arrays in Javascript can be used to store _____.",
        choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        answer: "4. all of the above"
    },
    { // question 4
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        answer: "3. quotes"
    },
    { // question 5
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        choices: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console log"],
        answer: "4. console log"
    },
]

var nextQuestion = []
// Scores
var savedScores = JSON.parse(localStorage.getItem("userScore"));
// localStorage array
var highScores = [];

// Quiz timer
var timer = function() {
    

    var timeLimit = setInterval(function () {
        timerEl.textContent = "Time Remaining: " + countdown
        countdown--;
    }, 1000);
}


var startQuiz = function() {
    if (savedScores !== null) {
        highScores = savedScores;
    }
    firstPageEl.style.display = "none";
    nextQuestion = questionsArr[questionIdCounter]
    console.log(nextQuestion.question); 
    loadQuiz(nextQuestion)
    timer();
}

var stopQuiz = function() {
    timerEl.style.display = "none";
    quizPageEl.style.display = "none";
    endPageEL.style.display = "block";



    
    endPageEL.innerHTML = "<p> Your final score is: " + countdown + "</p></br>" +
    "<span> Enter your Name:" + "<input type='text' id='user-input' placeholder='Name here'>";
    + "<button id='save-score'>Submit</button</span"
    var submitBtn = document.createElement("button");
    submitBtn.className = "btn";
    submitBtn.textContent = "Submit"
    endPageEL.appendChild(submitBtn);

    submitBtn.addEventListener("click", getScore);
}
// create question elements and fill them
var loadQuiz = function(curQuestion) {
    
    if (quizPageEl.style.display === "none") {
        quizPageEl.style.display === "block";
    }

     
    var questionDivEl = document.createElement("div");
    // give class name
    questionDivEl.className = "question-div";
    // give id 
    questionDivEl.setAttribute("data-question-id", questionIdCounter);
     
    // create question card
    var quizQuestion = document.createElement("h2")
    quizQuestion.className = "question-style";
    quizQuestion.textContent = curQuestion.question;
    questionDivEl.appendChild(quizQuestion);

    // create answer buttons
    var answerOneBtn = document.createElement("button");
    answerOneBtn.className = "btn";
    answerOneBtn.textContent = curQuestion.choices[0];
    questionDivEl.appendChild(answerOneBtn);

    var answerTwoBtn = document.createElement("button");
    answerTwoBtn.className = "btn";
    answerTwoBtn.textContent = curQuestion.choices[1];
    questionDivEl.appendChild(answerTwoBtn);

    var answerThreeBtn = document.createElement("button");
    answerThreeBtn.className = "btn";
    answerThreeBtn.textContent = curQuestion.choices[2];
    questionDivEl.appendChild(answerThreeBtn);

    var answerFourBtn = document.createElement("button");
    answerFourBtn.className = "btn";
    answerFourBtn.textContent = curQuestion.choices[3];
    questionDivEl.appendChild(answerFourBtn);
    
    
    // append to page
    quizPageEl.appendChild(questionDivEl);
    
    answerOneBtn.addEventListener("click", loadNext);
    answerTwoBtn.addEventListener("click", loadNext);
    answerThreeBtn.addEventListener("click", loadNext);
    answerFourBtn.addEventListener("click", loadNext);
        
}


// load question
var loadNext = function(e) {
    questionIdCounter++;
    if (questionIdCounter < questionsArr.length) {
        clickButton(e.target.textContent == nextQuestion.answer)
        quizPageEl.innerHTML = ""
        if (questionIdCounter < questionsArr.length) {
            nextQuestion = questionsArr[questionIdCounter]
            loadQuiz(nextQuestion)
        } else {
            questionIdCounter = 0;
            loadQuiz(nextQuestion);
        }
    } else {
        alert("game over");
        stopQuiz();
    }
}

var clickButton = function(input) {

    if(input) {
        popupEl.textContent = "Correct!"
        console.log("correct");
    }
    else {
        popupEl.textContent = "Incorrect"
        console.log("incorrect");
        countdown = countdown - 10
    }
    setTimeout(function(){
        popupEl.textContent = ""
    }, 1000);
};


var getScore = function() {
    var name = document.getElementById("user-input").value;
    saveScores(name, countdown);
};

var saveScores = function(name, countdown) {

    var userScore = {
        name: name,
        score: countdown
    };
    highScores.push(userScore);
    
    localStorage.setItem("userScore", JSON.stringify(highScores));
    
    endPageEL.style.display = "none";
    pageScoresEl.style.display = "block";
    
    showScores();

}

var showScores = function() {
    if (savedScores !== null) {
        // make score list 
        var scoreList = document.createElement("ul");
        scoreList.className = "score-list";
        
        for (var i = 0; i < savedScores.length; i++) {
            var name = savedScores[i].name
            var score = savedScores[i].score
            var listitem = document.createElement("li");
            listitem.innerHTML = name + " " + score;
            scoreList.appendChild(listitem);
        }
        pageScoresEl.appendChild(scoreList);
    // make buttons
    var backBtn = document.createElement("button");
    backBtn.className = "btn";
    backBtn.textContent = "Go Back";
    pageScoresEl.appendChild(backBtn);

    var ClrBtn = document.createElement("button");
    ClrBtn.className = "btn"
    ClrBtn.textContent = "Clear Highscores";
    pageScoresEl.appendChild(ClrBtn);

    }
    backBtn.addEventListener("click", function() {
        pageScoresEl.style.display = "none";
        firstPageEl.style.display = "block";
        questionIdCounter = 0;
        nextQuestion = []
    });
    ClrBtn.addEventListener("click", function() {
        scoreList.innerHTML = "";
        window.localStorage.clear();
    })
}

// event listeners

startEl.addEventListener("click", startQuiz);


