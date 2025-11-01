console.log ("Hello world")

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
    
}

    const computersPick = getComputerChoice();
console.log("The computer chose: " + computersPick);

function getHumanChoice() {
    let option = prompt("Rock, paper, or scissors?");
    let fixed = option.toLowerCase().trim();
    if (fixed == "rock") {
        console.log("Rock");
        return fixed;
    }
    else if (fixed == "Paper") {
        console.log("Paper");
        return fixed;
    }
    else if (fixed == "scissors") {
        console.log("Scissors");
        return fixed;
    }

}

console.log("humanChoice");

    let humanChoice = 0;
    let computerChoice = 0;

function playGame() {

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("Its a tie!")
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        computerChoice++;
        console.log("You loose!")
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanChoice++;
        console.log("Winner!")
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        humanChoice++;
        console.log("Winner!")
    }
    else if (humanChoice == "Paper" && computerChoice == "scissors") {
        computerChoice++;
        console.log("You loose!")
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerChoice++;
        console.log("You loose!")
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanChoice++;
        console.log("Winner!")
    }

}
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

}


