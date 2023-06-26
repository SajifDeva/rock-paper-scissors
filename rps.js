function getComputerChoice(){

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
        case 1 :
            computer = "ROCK";
            break;
        case 2 :
            computer = "PAPER";
            break;
    }

}