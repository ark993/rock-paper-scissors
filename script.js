let win = 0;
let loss = 0;

function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"];
    const computerChoice = Math.floor(Math.random() * options.length); 
    let decision = options[computerChoice];
    return decision;
}

function playRound(askPlayer, computerPlay) {
        switch(askPlayer()) {
        case "rock":
            switch(computerPlay()) {
                case "Rock":
                    console.log("nobody wins, both y'all picked rock. Try again!");
                    playRound(askPlayer, computerPlay);
                    break;
                case "Scissors": 
                    console.log("U win, rock beat scissors");
                    win++;
                    break;
                case "Paper":
                    console.log("U LOSE, paper beats rock!");
                    loss++;
                    break;
            }
        break;

        case "paper":
            switch(computerPlay()) {
                case "Rock":
                    console.log("U win, paper beats rock!");
                    win++;
                    break;
                case "Scissors": 
                    console.log("U lose, scissor beats paper");
                    loss++;
                    break;
                case "Paper":
                    console.log("nobody wins, both picked paper. Try again");
                    playRound(askPlayer, computerPlay);
                    break;
            }
        break;

        case "scissors":
            switch(computerPlay()) {
                case "Rock":
                    console.log("U lose, rock beats scissors");
                    loss++;
                    break;
                case "Scissors":
                    console.log("Nobody wins, both picked scissors. Try again");
                    playRound(askPlayer, computerPlay);
                    break;
                case "Paper":
                    console.log("U win, scissors beat paper!");
                    win++;
                    break;
            }
                 
        break;

        default:
            console.log("invalid option selected, try again:");
            playRound(askPlayer, computerPlay)
        } 
       }

const playerSelection = "rock";

function askPlayer() {
    let sign = prompt("pick rock papers or scissors")
    sign = sign.toLowerCase()
    return sign;
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(askPlayer, computerPlay);
     }
    if (win > loss) { alert("You win the game!") }
    else { alert("U lost the game") }
        
    
    if(1) {
        win = 0;
        loss = 0;
        draw = 0;
    }

}

