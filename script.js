console.log ("Hello world")

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
    
}

    const computersPick = getComputerChoice();
console.log("The computer chose: " + computersPick);

function getHumanChoice() {
    return prompt("Rock, paper, or scissors?").toLowerCase();
}

console.log("humanChoice");

    let humanChoice = 0;
    let computerChoice = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("Its a tie!")
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You loose!")
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("Winner!")
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("Winner!")
    }
    else if (humanChoice == "Paper" && computerChoice == "scissors") {
        console.log("You loose!")
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You loose!")
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("Winner!")
    }
}
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);


