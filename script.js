//create a variable to store the score of computer, player, and number of rounds
let computerScore = 0;
let playerScore = 0;
let roundNum = 0;

//create an array for computer choices
//randomly pick from array using Math.floor and store it on a variable name computerSelection
function computerPlay() {
    let computerChoice = ["rock", "paper", "scissor"];
    let computerSelect = Math.floor(Math.random()*computerChoice.length);
    return computerChoice[computerSelect];
}


// Ask user to choose rock, paper, or scissor. then use .toLowerCase to make input case-insensitive.
function playerPlay() {
    playerSelection = prompt("Pick between rock, paper, or scissor");
    return playerSelection.trim().toLowerCase();
}

/* create playRound function with parameter playerSelection, and computerSelection
   create variables for each results that returns a message
        create if conditions where, in each condition, output the:
		  1. String message
		  2. The points of player, which will add 1 if player wons
		  3. The points of computer if computer won 
*/
function playRound(playerSelection, computerSelection){

    let tie = `The game is tie! || Player: ${playerSelection} and Computer: ${computerSelection}`;
    let paperBeatsRock = `You won,Paper Beats Rock! || Player: ${playerSelection} and Computer: ${computerSelection}`;
    let rockBeatsScissor = `You won,Paper Beats Rock! || Player: ${playerSelection} and Computer: ${computerSelection}`;
    let scissorBeatsPaper = `You won,Paper Beats Rock! || Player: ${playerSelection} and Computer: ${computerSelection}`;
    let rockBeatByPaper = `You lose,Paper Beats Rock! || Player: ${playerSelection} and Computer: ${computerSelection}`;
    let scissorBeatByRock = `You lose,Paper Beats Rock! || Player: ${playerSelection} and Computer: ${computerSelection}`;
    let paperBeatByScissor = `You lose,Paper Beats Rock! || Player: ${playerSelection} and Computer: ${computerSelection}`;

    if(playerSelection === computerSelection) {
        console.log(tie);
        console.log("Player: " + playerScore + "\n" + "Computer: " + computerScore);
    } else if(playerSelection === "paper" && computerSelection === "rock") {
        console.log(paperBeatsRock);
        console.log(`Player: ${playerScore+=1} \n Computer: ${computerScore}`);
    } else if(playerSelection === "rock" && computerSelection === "scissor") {
        console.log(rockBeatsScissor);
        console.log(`Player: ${playerScore+=1} \n Computer: ${computerScore}`);
    } else if(playerSelection === "scissor" && computerSelection === "paper") {
        console.log(scissorBeatsPaper);
        console.log(`Player: ${playerScore+=1} \n Computer: ${computerScore}`);
    } else if(playerSelection === "rock" && computerSelection === "paper") {
        console.log(rockBeatByPaper);
        console.log(`Player: ${playerScore} \n Computer: ${computerScore+=1}`);
    } else if(playerSelection === "scissor" && computerSelection === "rock") {
        console.log(scissorBeatByRock);
        console.log(`Player: ${playerScore} \n Computer: ${computerScore+=1}`);
    } else if(playerSelection === "paper" && computerSelection === "scissor") {
        console.log(paperBeatByScissor);
        console.log(`Player: ${playerScore} \n Computer: ${computerScore+=1}`);
    }

}

function game() {
    let score = 0;

    //add 1 on round number each iteration
    //call the playRound() in each iteration, and store the score 
    for(let round=0; round <5; round++) {
        console.log(`Round ${roundNum+=1}`);
        score += playRound(playerPlay(), computerPlay());
    }

    //Output the score of both computer and player, and who won the game after round 5
    console.log("\n===========================================\nGAME RESULT");
    if(playerScore === computerScore) {
        console.log("It's a tie game!!!");
        console.log(`Player Score: ${playerScore} || Computer Score: ${computerScore}`);
    } else if (playerScore > computerScore) {
        console.log("Congaratulations! You won the game, fair square!");
        console.log(`Player Score: ${playerScore} || Computer Score: ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log("Ohhh computer beats you!");
        console.log(`Player Score: ${playerScore} || Computer Score: ${computerScore}`);
    }
}



console.log(game());
