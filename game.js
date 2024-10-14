function computerChoice() {
    let num = parseInt(Math.random() * (3 - 0) + 1);   //random * (max-min) + 1
    switch(num) {
        case 1:
            return "ROCK";
        case 2:
            return "PAPER";
        case 3:
            return "SCISSORS";
        default:
            console.log("error in comp choice");
            return null;
    }
}
function playerChoice(input) {
    switch(input) {
        case 'R':
            return "ROCK";
        case 'P':
            return "PAPER";
        case 'S':
            return "SCISSORS";
    }
}

console.log(playerChoice);