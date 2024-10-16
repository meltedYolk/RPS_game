let playerScore = 0;
let computerScore = 0;
const ROCK = 1, PAPER = 2, SCISSORS = 3, 
      FINAL_SCORE = 5;

// returns int 1-3 represent choices
function computerChoice() {
    return parseInt(Math.random() * (3 - 0) + 1);
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
    checkWin();
}

// checks if player or computer has won by reaching FINAL_SCORE
function checkWin() {
    if(playerScore >= FINAL_SCORE) {
        console.log("YOU WON THE WAR CHIEF. GAME RESET.");
        playerScore = 0; computerScore = 0;
    }
    else if(computerScore >= FINAL_SCORE) {
        console.log("you lost you LOSERRRR!! GAME RESET.");
        playerScore = 0; computerScore = 0;
    }
}

// makes each button play a round on click, choice based on button
function startGame() {
    const rockBtn = document.querySelector(".rockBtn");
    const paperBtn = document.querySelector(".paperBtn");
    const scisBtn = document.querySelector(".scisBtn");

    rockBtn.addEventListener("click", () => {
        playRound(ROCK, computerChoice());
    });
    paperBtn.addEventListener("click", () => {
        playRound(PAPER, computerChoice());
    });
    scisBtn.addEventListener("click", () => {
        playRound(SCISSORS, computerChoice());
    });
}

startGame();