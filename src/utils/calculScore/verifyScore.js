function checkIfWinner(score){


    for (const player in score){
    
        if (score[player].round >= 100){
            return true;
        }
        
    }
    return false;
}

function returnWinner(score){
    for (const player in score){
        if (score[player].round >= 100){
            return player;
        }
    }

}

export {checkIfWinner,returnWinner };