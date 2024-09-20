let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.random();

    if (computerChoice <= .33){
        return "rock";
    }
    else if (computerChoice > .33 && computerChoice <= .66){
        return "scissors"; 
    }
    else{
        return "paper";
    }       
}

function getHumanChoice(){
    let humanChoice = prompt("Ingresa una opción: ");
    return humanChoice;
}

function playRound (humanChoice, computerChoice){

    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice().toLowerCase();

    console.log("Computer: ", computerChoice);
    console.log("You:", humanChoice);
    
    if ((humanChoice === "rock" && computerChoice === "paper") || 
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")) {
        computerScore++;
        console.log("You Lose");
    }
    else if (humanChoice == computerChoice){
        console.log("Draw")
    }
    else{
        console.log("You Win")
    }

}

for (let i = 0; i<3; i++){
    playRound();
}

if (humanScore > computerScore){
    console.log("Winner");
}
else{
    console.log("Looser");
}
