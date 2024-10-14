let playerScore = 0;
let computerScore = 0;
const ROCK = 1, PAPER = 2, SCISSORS = 3;

// returns int 1-3 represent choices
function computerChoice() {
    return parseInt(Math.random() * (3 - 0) + 1);
}

// returns int 1-3 represent choices, receive user string input
function playerChoice(input) {
    input = input.toLowerCase();
    switch(input) {
        case 'rock':
            return ROCK
        case 'paper':
            return PAPER
        case 'scis':
            return SCISSORS
        default:
            console.log("player choice error");
            return null;
    }
}

// display score
function displayScore() {
    console.log("Player: " + playerScore + "  Computer: " + computerScore);
}

// receive 2 ints represent human/computer choices, 
// increments winner score and displays corresponding message
function playRound(humanChoice, computerChoice) {
    let humanWin = true;
    let message;
    if(humanChoice === computerChoice) { // tie
        message = "Tie, No one Won!";
    }
    else if (humanChoice === ROCK && computerChoice === SCISSORS) {
        playerScore++;
        message = "You Win! ROCK BEATS SCISSORS!!!";
    }
    else if (humanChoice === PAPER && computerChoice === ROCK) {
        playerScore++;
        message = "You Win! PAPER BEATS ROCK!!!";
    }
    else if (humanChoice === SCISSORS && computerChoice === PAPER) {
        playerScore++;
        message = "You Win! SCISSORS BEATS PAPER!!!";
    }
    else {
        computerScore++;
        message = "Youu LOSE!!! ;-;-;-;-; :( :( :( ;()))";
    }
    console.log(message);
    displayScore();
}

// receives # of rounds, 
// each round prompt input and play a round
// after rounds completed, determine winner
function playGame(num = 5) {
    let playerInput;
    for(num; num != 0; --num) {
        playerInput = prompt("Rock, Paper, or Scis? (Type one of the three)");
        playRound(playerChoice(playerInput), computerChoice());
    }

    if(playerScore > computerScore) 
        console.log("you win the RPS war!");
    else if (playerScore < computerScore)
        console.log("you losttttt the RPS warrr... to a BOT!!!");
    else // tie
        console.log("you tied against a bot. basically an L");
}

playGame();