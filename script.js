console.log("Hello, World!")

let gameCounter = 0;
let userScore = 0,
    computerScore = 0;
const buttons = Array.from(document.querySelectorAll("button"))
buttons.forEach(button => button.addEventListener("click", game))

const resultsContainer = document.querySelector("#results-container");
const messageDisplayer = document.querySelector("#results-container p")
const [userMarker, computerMarker] = [document.querySelector("#results-container .marker.user"),
    document.querySelector("#results-container .marker.computer")]
const markers = [userMarker, computerMarker];
markers.forEach(marker => marker.textContent = "0")
resultsContainer.prepend(messageDisplayer)

function game() {
    if (gameCounter++ === 0) {
        markers.forEach(marker => marker.textContent = 0)
    }
    // This function creates a five-round game and scores results.
    let userWon = playRound(this.textContent);

    if (userWon === undefined) {

    }
    else {
        userWon ? userScore++ : computerScore++;
        userMarker.textContent = userScore
        computerMarker.textContent = computerScore
    }

    if (userScore === 5 || computerScore === 5) {
        userScore === 5 ? messageDisplayer.textContent = "You won, but you're a loser!" :
           messageDisplayer.textContent = "You're a loser!";
        messageDisplayer.setAttribute("style", "font-size: 28px;" +
            "font-weight: bolder; color:  #9e0910")
        userScore = 0;
        computerScore = 0;
        gameCounter = 0;
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

function playRound(playerSelection) {
    // Outputs a message to delcare whether it's a tie or the user won or lost.
    messageDisplayer.setAttribute("style", "font-size: large;" +
        "font-weight: normal;")
    let computerSelection = computerPlay()
    let userWon = isWinner(playerSelection, computerSelection)
    if (userWon === undefined) {
        let message = "It's a tie!" 
        messageDisplayer.textContent = message
        return userWon
    }
    else {
        message = userWon ? `You win! ${playerSelection} beats ${computerSelection}`
                : `You lose! ${playerSelection} is beaten by ${computerSelection}`
        if (playerSelection === "Scissors") {
            message = message.replace(" is ", " are ")
            message = message.replace(" beats ", " beat ")
        }
        messageDisplayer.textContent = message
        return userWon
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