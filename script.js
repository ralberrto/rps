console.log("Hello, World!")

function isWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return undefined
    }
    switch (playerSelection) {
        case "Rock":
            if (computerSelection === "Paper") {
                return false 
            }
            else if (computerSelection === "Scissors") {
                return true
            }
        case "Paper":
            if (computerSelection === "Scissors") {
                return false
            }
            else if (computerSelection === "Rock") {
                return true
            }
        case "Scissors":
            if (computerSelection === "Rock") {
                return false
            }
            else if (computerSelection === "Paper") {
                return true
            }
    }
}

function declareWinner(playerSelection, computerSelection = computerPlay()) {
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