const computerPlay = () =>{
    let choice = Math.floor(Math.random() * 3); //should be 0 - 2??

    switch(choice){
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}

const playerChoice = () =>{
    
}

const playGame = (playerChoice, computerPlay) => {
    let computerChoice = computerPlay();
    let userChoice = playerChoice();
    
}

playGame(playerChoice, computerPlay)
