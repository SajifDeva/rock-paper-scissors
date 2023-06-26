function getComputerChoice(){

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
        case 1 :
            computer = "ROCK";
            break;
        case 2 :
            computer = "PAPER";
            break;
        case 3 :
            computer = "SCISSORS";
            break; 
    }

}


function playRound(playerSelection, computerSelection) {
    // your code here!
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));