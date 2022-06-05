console.log("Hello, World!")

function isWinner(playerSelection, computerSelection) {
    // Determines whether the user won or not based on the selections of
    // both the user and the computer.
    if (playerSelection === computerSelection) {
        return undefined
    }
    switch (playerSelection) {
        case "Rock":
            return computerSelection === "Scissors" ? true : false
        case "Paper":
            return computerSelection === "Rock" ? true : false
        case "Scissors":
            return computerSelection === "Paper" ? true : false
    }
}

function declareWinner(playerSelection, computerSelection = computerPlay()) {
    // Outputs a message to delcare whether it's a tie or the user won or lost.
    playerSelection = playerSelection.trim();
    playerSelection = playerSelection.substring(0, 1).toUpperCase() + playerSelection.substring(1).toLowerCase();
    let userWon = isWinner(playerSelection, computerSelection)
    if (userWon === undefined) {
        return "It's a tie!"
    }
    else {
        return userWon ? `You win! ${playerSelection} beats ${computerSelection}` : `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

function computerPlay() {
    // This function randomly returns Rock, Paper, Scissors.
    switch (random1_3()) {
        case 1:
            return "Rock"
        case 2:
            return "Paper"
        case 3:
            return "Scissors"
    }

    // Nested functions =>
    function random1_3() {
        // This function randomly returns numbers from 1 to 3.
        let number = Math.floor(Math.random()*3) + 1;
        return number
    }
}