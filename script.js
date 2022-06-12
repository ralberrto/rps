console.log("Hello, World!")

function game() {
    // This function creates a five-round game and scores results.
    let userScore = 0,
    computerScore = 0,
    winnerDeclaration,
    userWon;

    // Each pass in the loop is a rock, paper, scissor round.
    for (let i = 0; i < 5; i++) {
        let = playerSelection = prompt("Rock, paper or scissors?", "Rock");
        [winnerDeclaration, userWon] = declareWinner(playerSelection)
        if (userWon === undefined) {
//            userScore++; computerScore++;
        }
        else {
            userWon ? userScore++ : computerScore++
        }
        console.log(winnerDeclaration)
    }
    // Reports the winner.
    console.log(`Your score: ${userScore}, Computer's score: ${computerScore}`)
    if (userScore === computerScore) {
        console.log("It's a tie!")
    }
    else {
        userScore > computerScore ? console.log("Congratulations, you've won!")
        : console.log("You've lost!")
    }

}

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

function playRound(playerSelection, computerSelection = computerPlay()) {
    // Outputs a message to delcare whether it's a tie or the user won or lost.
    playerSelection = playerSelection.trim();
    playerSelection = playerSelection.substring(0, 1).toUpperCase() + playerSelection.substring(1).toLowerCase();
    let userWon = isWinner(playerSelection, computerSelection)
    if (userWon === undefined) {
        return ["It's a tie!", userWon]
    }
    else {
        return userWon ? [`You win! ${playerSelection} beats ${computerSelection}`, userWon]
        : [`You lose! ${computerSelection} beats ${playerSelection}`, userWon]
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