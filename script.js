console.log ("Hello world")

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
    
}

const computersPick = getComputerChoice();
console.log("The computer chose: " + computersPick);












