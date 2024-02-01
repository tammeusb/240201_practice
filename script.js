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

    //computerChoice === "rock"
    if (computerChoice === "rock") {
        if (playerChoice === "rock") {
            return "tie!";
        } else if (playerChoice === "paper") {
            return playerChoice + " beats " + computerChoice + ", good job!"
        } else if (playerChoice === "scissors") {
            return computerChoice + " beats " + playerChoice + ", sucks for you!"
        }
    }
    //computerChoice === "paper"
    else if (computerChoice === "paper") {
        if (playerChoice === "paper") {
            return "tie!";
        } else if (playerChoice === "scissors") {
            return playerChoice + " beats " + computerChoice + ", good job!"
        } else if (playerChoice === "rock") {
            return computerChoice + " beats " + playerChoice + ", sucks for you!"
        }
    } 
    //computerChoice === "scissors"
    else if (computerChoice === "scissors") {
        if (playerChoice === "scissors") {
            return "tie!";
        } else if (playerChoice === "rock") {
            return playerChoice + " beats " + computerChoice + ", good job!"
        } else if (playerChoice === "paper") {
            return computerChoice + " beats " + playerChoice + ", sucks for you!"
        }
    }

}

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getComputerChoice(), prompt("Rock, Paper, Scissors!", "Choose!")));
    }
}