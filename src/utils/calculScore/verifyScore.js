function checkIfWinner(score){


    for (const player in score){
    
        if (score[player].round >= 10){
            return true;
        }
        
    }
    return false;
}

function returnWinner(score){
    for (const player in score){
        if (score[player].round >= 10){
            return player;
        }
    }

}

export {checkIfWinner,returnWinner };