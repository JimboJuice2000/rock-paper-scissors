const pImgsDiv = document.querySelector(".playerImgs");
const playerChoiceElement = document.querySelector(".playerChoice");
const computerChoiceElement = document.querySelector(".computerChoice");
const winnerElement = document.querySelector(".winner");
const playerScoreElement = document.querySelector(".playerScore");
const computerScoreElement = document.querySelector(".computerScore");
const tiesElement = document.querySelector(".ties");

let playerScore = 0;
let computerScore = 0;
let ties = 0;

pImgsDiv.addEventListener("click", event => {
    const target = event.target;
    if (target.classList.contains("pImg")) {
        const playerChoice = target.id;
        const computerChoice = getComputerChoice();
        const winner = determineWinner(playerChoice, computerChoice);

        playerChoiceElement.textContent = `Player Choice: ${playerChoice}`;
        computerChoiceElement.textContent = `Computer Choice: ${computerChoice}`;

        if (winner === "player") {
            playerScore++;
            winnerElement.textContent = "Player Wins!";
        } else if (winner === "computer") {
            computerScore++;
            winnerElement.textContent = "Computer Wins!";
        } else {
            ties++;
            winnerElement.textContent = "It's a Tie!";
        }

        playerScoreElement.textContent = `Score: ${playerScore}`;
        computerScoreElement.textContent = `Score: ${computerScore}`;
        tiesElement.textContent = `Ties: ${ties}`;
    }
});

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "tie";
    }
    if ((playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")) {
        return "player";
    } else {
        return "computer";
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    ties = 0;
    playerChoiceElement.textContent = "Player Choice: ";
    computerChoiceElement.textContent = "Computer Choice: ";
    winnerElement.textContent = "";
    playerScoreElement.textContent = `Score: ${playerScore}`;
    computerScoreElement.textContent = `Score: ${computerScore}`;
    tiesElement.textContent = `Ties: ${ties}`;
}


