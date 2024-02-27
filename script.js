// UI

const buttonRock = document.querySelector(".rock");
const buttonPaper = document.querySelector(".paper");
const buttonScissors = document.querySelector(".scissors");

const result = document.querySelector(".result");
const winnerMessage = document.querySelector(".message");

buttonRock.addEventListener('click', () => {
    clickChoice("rock");
});

buttonPaper.addEventListener('click', () => {
    clickChoice("paper");
});

buttonScissors.addEventListener('click', () => {
    clickChoice("scissors");
});

// GAME

function clickChoice(playerChoice) {
    playRound(getComputerChoice(), playerChoice);
    result.textContent = "score: " + playerScore + " " + computerScore;
    endGame()
}

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

function endGame() {
    if (computerScore === 5) {
        winnerMessage.textContent = "Computer wins!";
    } else if (playerScore === 5) {
        winnerMessage.textContent = "player wins!";
    }
}