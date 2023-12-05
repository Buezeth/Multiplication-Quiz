const score = document.getElementById('score');
const q1 = document.getElementById('q1');
const q2 = document.getElementById('q2');

let q1Value = 0;
let q2Value = 0;

let scoreValue = JSON.parse(localStorage.getItem("score"));
if(!scoreValue) {
    scoreValue = 0;
}

// document.getElementById('btn').addEventListener('click', submitAnswer);

function randomNumber() {
    return Math.floor(Math.random() * 11);
}

function displayQuestion() {
    q1Value = randomNumber();
    q2Value = randomNumber();

    q1.innerText = q1Value;
    q2.innerText = q2Value;

    score.innerText = scoreValue;
}

displayQuestion();
let correctAnswer = q1Value * q2Value;
console.log(correctAnswer);


document.getElementById('form').addEventListener("submit", () => {
    
    const answer = document.getElementById('answer');
    console.log(answer.value);

    if(correctAnswer == answer.value) {
        scoreValue++;
        console.log("correct");
        updateLocalStore();
    } else {
        scoreValue--;
        console.log("incorrect");
        updateLocalStore();
    }
});

function updateLocalStore() {
    localStorage.setItem("score", JSON.stringify(scoreValue));
}