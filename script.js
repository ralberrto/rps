console.log("Hello, World!")

const buttons = Array.from(document.querySelectorAll("button"))
buttons.forEach((button => button.addEventListener("click", playRound)))

const resultsContainer = document.querySelector("#results-container");
const messageDisplayer = document.createElement("p")
resultsContainer.prepend(messageDisplayer)

function game() {
    // This function creates a five-round game and scores results.
    let userScore = 0,
    computerScore = 0,
    winnerDeclaration,
    userWon;

    // Each pass in the loop is a rock, paper, scissor round.
    for (let i = 0; i < 5; i++) {
        let = playerSelection = prompt("Rock, paper or scissors?", "Rock");
        [winnerDeclaration, userWon] = playRound(playerSelection)
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

function playRound() {
    // Outputs a message to delcare whether it's a tie or the user won or lost.
    let playerSelection = this.textContent;
    let computerSelection = computerPlay()
    let userWon = isWinner(playerSelection, computerSelection)
    if (userWon === undefined) {
        let message = "It's a tie!" 
        messageDisplayer.textContent = message
        return [message, userWon]
    }
    else {
        message = userWon ? `You win! ${playerSelection} beats ${computerSelection}`
                : `You lose! ${playerSelection} is beaten by ${computerSelection}`
        if (playerSelection === "Scissors") {
            message = message.replace(" is ", " are ")
            message = message.replace(" beats ", " beat ")
        }
        messageDisplayer.textContent = message
        return [message, userWon]
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