'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
const showSecretNumber = document.querySelector('.number');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const body = document.querySelector('body');
let actualScore = Number(score.textContent);
let isWin = false;
const userInput = document.querySelector('.guess');

const checkUserInput = () => {

    if (Number(userInput.value) < 21 && Number(userInput.value) > 0) {
        if (!Number(userInput.value) && !isWin) {
            message.textContent = '❌ No number!';
        } else if (Number(userInput.value) > secretNumber && actualScore > 0 && !isWin) {
            message.textContent = '↗ Too hight';
            actualScore--;
            score.textContent = actualScore;
        } else if (Number(userInput.value) < secretNumber && actualScore >= 0 && !isWin) {
            message.textContent = '↙ Too low';
            actualScore--;
            score.textContent = actualScore;
        } else if (Number(userInput.value) === secretNumber && actualScore >= 0 && !isWin) {
            message.textContent = '🎉 Win!'
            actualScore++;
            score.textContent = actualScore;
            body.style.backgroundColor = "#60b347";
            (Number(highScore.textContent) < Number(score.textContent)) ? highScore.textContent = score.textContent : '';
            showSecretNumber.textContent = secretNumber;
            isWin = true;
        } else {
            message.textContent = 'Restart Game';
        }
    } else {
        message.textContent = 'You must enter a value between 1 and 20';
    }
}

const resetGame = () => {
    showSecretNumber.textContent = '?';
    score.textContent = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    body.style.backgroundColor = "#222";
    isWin = false;
    message.textContent = 'Start guessing...';
    userInput.value = '';
}

document.querySelector('.check').addEventListener('click', checkUserInput);
document.querySelector('.guess').addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
        checkUserInput;
    } else if (e.key === 'Esc') {
        resetGame;
    }
});

document.querySelector('.again').addEventListener('click', resetGame);
