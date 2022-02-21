let playerScore = 0;
let computerScore = 0;

const computerChoice = () =>{
    let choice = Math.floor(Math.random() * 3); //should be 0 - 2??

    switch(choice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

const playerChoice = () =>{
    let endInput = true;
    let userChoice;

    while(endInput){
        userChoice = prompt("Enter Rock, Paper or Scissors").toLowerCase();

        if(userChoice === "rock" || userChoice === "paper" || userChoice === "scissors"){
            break;
        } else{
            alert("Please enter only rock, paper or scissors");
        }
    }
    return userChoice;
}

const playRound = () => {
    let computerChoose = computerChoice();
    let userChoice = playerChoice();

    alert(`Player has chosen ${userChoice} and computer has chosen ${computerChoose}`);

    return userChoice === "rock" && computerChoose === "scissors" ? "player"
        : userChoice === "scissors" && computerChoose === "paper" ? "player"
        : userChoice === "paper" && computerChoose === "rock" ? "player"
        : userChoice === computerChoose ? "Draw"
        : "computer";

}

const game = (playerScore, computerScore) => {

    for(let i = 0; i < 5; i++){
        let roundWinner = playRound();
        console.log(roundWinner);

        if(roundWinner === "player"){
            alert("Player wins");
            playerScore++;
        }
        else if(roundWinner === "computer"){
            alert("Computer wins");
            computerScore++;
        }
        else{
            alert("Draw");
        }
    }

    if(computerScore > playerScore){
        alert(`Computer wins with a score of ${computerScore}`);
    } else if(playerScore > computerScore){
        alert(`Player wins with a score of ${playerScore}`);
    } else{
        alert(`Both players scored ${playerScore}! The game is a draw`);
    }
}

game(playerScore, computerScore);
