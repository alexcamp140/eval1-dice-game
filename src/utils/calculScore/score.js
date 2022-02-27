function updateCurrentScore(currentDice, player, score) {
  console.log(score);

  if (player === "player1") {
    return{
      player1: {
        round: score.player1.round,
        current: currentDice + score.player1.current ,
      },
      player2: {
        round: score.player2.round,
        current: score.player2.current,
      },
    };
  } else if (player === "player2") {
    return{
      player1: {
        round: score.player1.round,
        current: score.player1.current,
      },
      player2: {
        round: score.player2.round,
        current: currentDice + score.player2.current,
      },
    };
  }
}


function updateRoundScore(player, score) {
  console.log(score);

  if (player === "player1") {
    return{
      player1: {
        round: score.player1.round + score.player1.current,
        current: 0 ,
      },
      player2: {
        round: score.player2.round,
        current: score.player2.current,
      },
    };
  } else if (player === "player2") {
    return{
      player1: {
        round: score.player1.round,
        current: score.player1.current,
      },
      player2: {
        round: score.player2.round + score.player2.current ,
        current: 0,
      },
    };
  }
}



export  {updateCurrentScore, updateRoundScore};
