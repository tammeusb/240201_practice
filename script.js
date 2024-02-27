// UI

const buttonRock = document.querySelector(".rock");
const buttonPaper = document.querySelector(".paper");
const buttonScissors = document.querySelector(".scissors");

const result = document.querySelector(".result");

buttonRock.addEventListener('click', () => {
    playRound(getComputerChoice(), "rock");
    result.textContent = playerScore + " " + computerScore;
});

buttonPaper.addEventListener('click', () => {
    playRound(getComputerChoice(), "paper");
    result.textContent = playerScore + " " + computerScore;
});

buttonScissors.addEventListener('click', () => {
    playRound(getComputerChoice(), "scissors");
    result.textContent = playerScore + " " + computerScore;
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

function playGame() {

        let result = playRound(getComputerChoice(), );

        if (result === -1) {
            console.log("sucks for you!");
            log.textContent = "sucks for you!";
            score = score - 1;
        } else if (result === 0) {
            console.log("tie!");
            log.textContent = "tie!";
            score = score;
        } else if (result === 1) {
            console.log("good job!");
            log.textContent = "good job!";
            score = score + 1;
        }


    if (score > 0) {
        alert("You win!");
    } else {
        alert("You loose...");
    }

}

//playRound returns a value: -1, 0 (tie) or 1

//playGame gets value from playRound and adds, subtracts, or does nothing to a score variable
//logs the result (instead of playRound) and returns a win/lose value depending on final score