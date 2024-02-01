// get input from computer with a function called getComputerChoice()

// make function called playRound() that takes parameters computerChoice and playerChoice
// to play a single round via if/else conditional and logical operators

// Make a playGame() function that runs playRound() 5 times, asking for input via prompt,
// console.log()ing each result and returning a final win/lose comparative. 


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

    playerChoice = playerChoice.toLowerCase();
    let score = 0;

    //computerChoice === "rock"
    if (computerChoice === "rock") {
        if (playerChoice === "rock") {
            return 0;
        } else if (playerChoice === "paper") {
            return 1;
        } else if (playerChoice === "scissors") {
            return -1;
        }
    }
    //computerChoice === "paper"
    else if (computerChoice === "paper") {
        if (playerChoice === "paper") {
            return 0;
        } else if (playerChoice === "scissors") {
            score = ++score;
            return 1;
        } else if (playerChoice === "rock") {
            return -1;
        }
    } 
    //computerChoice === "scissors"
    else if (computerChoice === "scissors") {
        if (playerChoice === "scissors") {
            return 0;
        } else if (playerChoice === "rock") {
            score = ++score;
            return 1;
        } else if (playerChoice === "paper") {
            return -1;
        }
    } else {
        return -1;
    }

}

const log = document.querySelector(".log");
const button = document.querySelector(".play");
button.addEventListener("click", playGame);

function playGame() {

    let score = 0;

    for (let i = 0; i < 5; i++) {

        let result = playRound(getComputerChoice(), prompt("Rock, Paper, Scissors!", "Choose!"));

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