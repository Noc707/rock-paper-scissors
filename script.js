console.log ("Hello world")

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
    
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors?").toLowerCase();
    if ((humanChoice == "rock" || "paper" || "scissors"));
    return humanChoice;

}

function playGame() {
   var humanScore = 0;
   var computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Its a tie!")
    }
    else if (humanChoice === "rock" && computerChoice == "paper") {
        computerScore++;
        console.log("You loose!")
    }
    else if (humanChoice === "rock" && computerChoice == "scissors") {
        humanScore++;
        console.log("Winner!")
    }
    else if (humanChoice === "paper" && computerChoice == "rock") {
        humanScore++;
        console.log("Winner!")
    }
    else if (humanChoice === "paper" && computerChoice == "scissors") {
        computerScore++;
        console.log("You loose!")
    }
    else if (humanChoice === "scissors" && computerChoice == "rock") {
        computerScore++;
        console.log("You loose!")
    }
    else if (humanChoice === "scissors" && computerChoice == "paper") {
        humanScore++;
        console.log("Winner!")
    }

    console.log( " Human Score: ${humanScore} || Computer Score: ${computerScore} ")
}

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    console.log(humanSelection);
    console.log(computerSelection);
    playRound(humanSelection, computerSelection);

    if (computerScore > humanScore) {
    console.log("You loose! Better luck next time!");
    }
    else if (humanScore > computerScore); {
    console.log("You Win! Congradulations!");
    }
}

playGame();
playGame();
playGame();
playGame();
playGame();