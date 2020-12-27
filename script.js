'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}
const displaySecretNumber = function(secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
}
const displayBodyColour = function(bodyColour) {
    document.querySelector('body').style.backgroundColor = bodyColour;
}
const displayNumberStyle = function(numberStyle) {
    document.querySelector('.number').style.width = numberStyle;
}
const displayScore = function(score) {
    document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    //console.log(guess, typeof guess);

    if (!guess)
        displayMessage('No number!');
    else if (guess === secretNumber) {
        displayMessage('Correct Number - You Win!');
        displaySecretNumber(secretNumber);
        displayNumberStyle('30rem');
        displayBodyColour('#60b347')
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
            score--;
            displayScore(score);
        } else {
            displayMessage('You Lose!');
            displayScore(0);
        }
    }
});
//restart(play again)
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayBodyColour('#222');
    displayMessage('Start guessing...');
    displayScore(score);
    document.querySelector('.guess').value = '';
    displaySecretNumber('?');
    displayNumberStyle('15rem');
})