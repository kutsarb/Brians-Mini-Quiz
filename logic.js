
var currentQuestion = -1;
var score = 0;
var c = 40;
var result = document.getElementById("result");

// var startBtn = document.getElementById("start");
var result = document.getElementById("result");

function  start() {
    clock();
    next();
    c=40
    document.getElementById("myTimer").style.display="block";

};

//Load question and choices for user to select.
function next() {
    currentQuestion++

    if (currentQuestion > questions.length - 1) {
        endGame();
        return;
    };

    var quizContent = "<h2>" + questions[currentQuestion].title + "</h2>"

    for (var buttonLoop = 0; buttonLoop < questions[currentQuestion].choices.length; buttonLoop++) {
        var buttonCode = "<button onclick=\"[ANS]\">[CHOICE]</button>";
        buttonCode = buttonCode.replace("[CHOICE]", questions[currentQuestion].choices[buttonLoop]);
        if (questions[currentQuestion].choices[buttonLoop] == questions[currentQuestion].answer) {
            buttonCode = buttonCode.replace("[ANS]", "correct()");
        } else {
            buttonCode = buttonCode.replace("[ANS]", "wrong()");
        };
        quizContent += buttonCode
    }
    document.getElementById("quizBody").innerHTML = quizContent;

};


function correct() {
    score += 10;
    next();
}

//Calculate score.
function calcScore() {
    document.getElementById("result").score;
    return;
}

function wrong() {
    c -= 15;
    next();
}

//Timer
var myTimer;
function clock() {
    myTimer = setInterval(myClock, 1000);
    function myClock() {
        document.getElementById("timer").innerHTML = c--;
        if (c < 0) {
            endGame()
        }
    }
}

function clearScore() {
    localStorage.setItem("highscore", "");
    localStorage.setItem("highscoreName", "");

    resetGame();
}

function endGame() {
    clearInterval(myTimer);

document.getElementById("myTimer").style.display="none";

    var quizContent = `
    <img src="gameover.gif"></img>
    <h3>You got  ` + score + ` points!</h3>
    <h3>That means you got ` + score / 10 + ` questions correct!</h3>
    <input type="text" id="name" placeholder="Name"> 
    <button onclick="setScore()">Set your score!</button>`;

    document.getElementById("quizBody").innerHTML = quizContent;
}

function setScore() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("highscoreName", document.getElementById('name').value);

}


function resetGame() {
    clearInterval(timer);
    score = 0;
    currentQuestion = -1;
    timer = 0;

    document.getElementById("timer").innerHTML= timer;

    var quizContent = 
    `<h1 class ="title">  JavaScript Quiz! </h1>
    <h3>Click start to play!</h3>
    <button onclick="start()">Start!</button>`;

    document.getElementById("quizBody").innerHTML = quizContent;
    
};


