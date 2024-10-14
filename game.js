let playerScore = 0;
let computerScore = 0;
const ROCK = 1, PAPER = 2, SCISSORS = 3;
function computerChoice() {
    return parseInt(Math.random() * (3 - 0) + 1);
}
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
/*function playRound(humanChoice, computerChoice) {
    compare humanchoice to computerChoice, 
    if human win
        inc humanScore
        display win message
    else comp win
        inc computerScore
        display lose message

    
}*/