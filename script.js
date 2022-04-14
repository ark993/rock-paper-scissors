let computerSelection = computerPlay();
let playerSelection = "Rock";


function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"];
    const computerChoice = Math.floor(Math.random() * options.length); 
    let decision = options[computerChoice];
    return decision;
}

function playRound(playerSelection, computerPlay()) {
    if(playerSelection == "Rock" && computerSelection == "Scisss") {
        console.log("You win, Rock beats Scissors")
    }
    else com
    console.log("Testing");
    }



