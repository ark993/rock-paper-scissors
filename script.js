function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"];
    const computerChoice = Math.floor(Math.random() * options.length); 
    let decision = options[computerChoice];
    return decision;
}

function playRound(playerSelection, computerPlay) {
    
    switch(playerSelection) {
        case "rock":
            switch(computerPlay()) {
                case "Rock":
                    console.log("nobody wins, both y'all picked rock");
                    break;
                case "Scissors": 
                    console.log("U win, rock beat scissors");
                    break;
                case "Paper":
                    console.log("U LOSE, paper beats rock!");
                    break;
            }
        break;

        case "paper":
            switch(computerPlay()) {
                case "Rock":
                    console.log("U win, paper beats rock!");
                    break;
                case "Scissors": 
                    console.log("U lose, scissor beats paper");
                    break;
                case "Paper":
                    console.log("nobody wins, both picked paper");
                    break;
            }
        break;

        case "scissors":
            switch(computerPlay()) {
                case "Rock":
                    console.log("U lose, rock beats scissors");
                    break;
                case "Scissors":
                    console.log("Nobody wins, both picked scissors")
                    break;
                case "Paper":
                    console.log("U win, scissors beat paper!")
                    break;
            }
        
        break;
        } 
       }

const playerSelection = "rock";




