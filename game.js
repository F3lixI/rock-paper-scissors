let humanScore = 0;
let computerScore = 0;
let rounds = 3;

const div = document.querySelector("#text");
const container = document.createElement("ul");
const result = document.createElement("span");

div.appendChild(container);

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


function playRound(humanChoice, computerChoice){

    const resultsByRound = document.createElement("li");

    console.log("Computer: ", computerChoice);
    console.log("You:", humanChoice);
    
    if ((humanChoice === "rock" && computerChoice === "paper") || 
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")) {
        computerScore++;
        resultsByRound.textContent = "Computer Wins";
    }
    else if (humanChoice == computerChoice){
        console.log("draw");
        resultsByRound.textContent = "Draw";
    }
    else{
        humanScore++;
        resultsByRound.textContent = "You Win";
    }
    
    container.appendChild(resultsByRound);

    rounds--;

    if (rounds == 0){
        if (humanScore > computerScore){
            result.textContent = "Winner";
        }
        else{ 
            result.textContent = "Looser";
        }

        div.appendChild(result);
    }
    
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});


