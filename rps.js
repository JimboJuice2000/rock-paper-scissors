let humanScore = 0;
let compScore = 0;
console.log("hello");

function getCompChoice() {
    let n = Math.floor(Math.random() * 3);
    let choice = "default";

    switch (n) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }
    return choice;
}

function getHumanChoice() {
    let humanChoice = prompt("Enter Rock, Paper or Scissors | "+ `Current score: ${humanScore}-${compScore}`);

    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
    } else {
        alert("Please select a valid option");
        return getHumanChoice();
    }
}

function playGame() {
    function playRound(humanChoice, compChoice) {
        if (humanChoice === compChoice) {
            return "It's a tie!";
        } else if (
            (humanChoice === "rock" && compChoice === "scissors") ||
            (humanChoice === "paper" && compChoice === "rock") ||
            (humanChoice === "scissors" && compChoice === "paper")
        ) {
            humanScore++;
            return "You win this round!";
        } else {
            compScore++;
            return "Computer wins this round!";
        }
    }

    for (let i = 0; i < 5; i++) {
        let compChoice = getCompChoice();
        let humanChoice = getHumanChoice();
        
        console.log("Computer choice:", compChoice);
        console.log("Your choice:", humanChoice);
        console.log(playRound(humanChoice, compChoice));
        console.log(`Scores -> Human: ${humanScore}, Computer: ${compScore}`);

    }

    console.log(`Final Scores -> Human: ${humanScore}, Computer: ${compScore}`);
}

playGame();
