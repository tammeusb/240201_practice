// UI

const buttonRock = document.querySelector(".rock");
const buttonPaper = document.querySelector(".paper");
const buttonScissors = document.querySelector(".scissors");

const result = document.querySelector(".result");
const winnerMessage = document.createElement('div');

buttonRock.addEventListener('click', () => {
    playRound(getComputerChoice(), "rock");
    result.textContent = "score: " + playerScore + " " + computerScore;
    if (computerScore === 5) {
        document.body.appendChild(winnerMessage);
        winnerMessage.textContent = "Computer wins!";
    } else if (playerScore === 5) {
        document.body.appendChild(winnerMessage);
        winnerMessage.textContent = "player wins!";
    }
});

buttonPaper.addEventListener('click', () => {
    playRound(getComputerChoice(), "paper");
    result.textContent = "score: " + playerScore + " " + computerScore;
    if (computerScore === 5) {
        document.body.appendChild(winnerMessage);
        winnerMessage.textContent = "Computer wins!";
    } else if (playerScore === 5) {
        document.body.appendChild(winnerMessage);
        winnerMessage.textContent = "player wins!";
    }
});

buttonScissors.addEventListener('click', () => {
    playRound(getComputerChoice(), "scissors");
    result.textContent = "score: " + playerScore + " " + computerScore;
    if (computerScore === 5) {
        document.body.appendChild(winnerMessage);
        winnerMessage.textContent = "Computer wins!";
    } else if (playerScore === 5) {
        document.body.appendChild(winnerMessage);
        winnerMessage.textContent = "player wins!";
    }
});

// GAME

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {

    let num = Math.random();

    if (num < (1 / 3)) {
        return "rock";
    } else if (num <= (2 / 3) && num >= (1 /3)) {
        return "paper";
    } else if (num > (2 / 3)) {
        return "scissors";
    }

}

function playRound(computerChoice, playerChoice) {

    if (computerChoice === "rock") {
        if (playerChoice === "rock") {
            return "tie"
        } else if (playerChoice === "paper") {
            ++playerScore;
            return "player"
        } else if (playerChoice === "scissors") {
            ++computerScore;
            return "computer"
        }
    }
 
    else if (computerChoice === "paper") {
        if (playerChoice === "paper") {
            return "tie"
        } else if (playerChoice === "scissors") {
            ++playerScore;
            return "player"
        } else if (playerChoice === "rock") {
            ++computerScore;
            return "computer"
        }
    } 

    else if (computerChoice === "scissors") {
        if (playerChoice === "scissors") {
            return "tie"
        } else if (playerChoice === "rock") {
            ++playerScore;
            return "player"
        } else if (playerChoice === "paper") {
            ++computerScore;
            return "computer"
        }
    } else {
        return "ERROR";
    }

}