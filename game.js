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
let playerChoice = prompt("PLAY ROCK PAPER SCISSORS: /nINPUT ANY CHOICE[R P S]", 0);
console.log(playerChoice);