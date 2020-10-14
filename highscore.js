
var name = localStorage.getItem("highscoreName");
var score = localStorage.getItem("highscore");

function getScore() {
var hScore = document.getElementById("hScore");
hScore.innerText = score;

var myName = document.getElementById("myName");
myName.innerText = name + "'s highscore is:";
}

getScore()