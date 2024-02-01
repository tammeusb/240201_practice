// get input from user 5 times
// get input from computer 5 times by calling getComputerChoice()
// each time run a playGame() function that runs a playRound() function 5 times, 
//      console.log()ing each result and returning a final win/lose comparative. 
// 

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