import "./App.css";
import RollDice from "./components/dice/rollDice";
import Hold from "./components/hold/hold";
import NewGame from "./components/newGame/newGame";
import PictoCurrentPlayer from "./utils/pictoCurrentPlayer";
import React, { useState, useEffect } from "react";
import Dice from "./components/dice/dice";
import ModalWinner from "./components/modal/modalEndGame";
import initGame from "./components/newGame/initGame";
import { checkIfWinner, returnWinner } from "./utils/calculScore/verifyScore";
import winSound from "./media/win-sound.mp3";
import { Howl } from "howler";

const sound = new Howl({
  src: [winSound],
});

function App() {
  const [initalScore, initPlayer, initWinner, initModal] = initGame();
  const [score, updateScore] = useState(initalScore);
  const [currentPlayer, changeCurrentPlayer] = useState(initPlayer);
  const [diceNumber, updateDiceNumber] = useState(6);
  const [winner, updateWinner] = useState(initWinner);
  const [modalWinner, updateModalWinner] = useState(initModal);

  // const btn = document.getElementById("buttonNewGame");
  // btn.setAttribute('disabled', 'disabled')

  console.log("démarrage");
  console.log(winner);

  useEffect(() => {
    console.log("app");
    console.log(score);
    console.log("fin app");

    // if (score.player1.round >10){
    //   newWinner('player1');
    //   updateModalWinner({ visible: 1 })
    // }

    //Check if there is a winner
    console.log("check if winner" + checkIfWinner(score));
    if (checkIfWinner(score)) {
      console.log("il y a un winner");
      let newWinner = returnWinner(score);
      console.log("le winner est : " + newWinner);
      updateWinner(newWinner);
      updateModalWinner({ visible: 1 });
      sound.play();
      console.log("le winner est de winner  :" + winner);
    }

    //check if dice = 1 t reset round

    // if (diceNumber === 1) {
    //   console.log("j'ai un 1");

    //   let newScore = resetScore(currentPlayer, score);
    //   updateScore(newScore);
    //   console.log("j'ai reste le score");
    //   console.log(newScore);
    //   changeCurrentPlayer(
    //     currentPlayer === "player1"
    //       ? changeCurrentPlayer("player2")
    //       : changeCurrentPlayer("player1")
    //   );
    //   console.log("j'ai cnagé le player " + currentPlayer);
    // }
  }, [winner, score, currentPlayer, diceNumber,updateWinner]);

  return (
    <div className="App">
      <div className="container">
        <div className="new">
          <NewGame updateScore={updateScore} updateWinner={updateWinner} />
          {winner ? (
            <ModalWinner
              winner={winner}
              updateWinner={updateWinner}
              updateScore={updateScore}
              visible={modalWinner.visible}
              updateModalWinner={updateModalWinner}
            />
          ) : (
            ""
          )}
        </div>

        <div className="player">
          <div className="player1">
            <p> PLAYER 1 </p>
            {currentPlayer === "player1" ? <PictoCurrentPlayer /> : ""}
          </div>
          <div className="player2">
            <p> PLAYER 2 </p>
            {currentPlayer === "player2" ? <PictoCurrentPlayer /> : ""}
          </div>
        </div>
        <div className="score">
          <div className="score1">
            <p>{score.player1.round}</p>
          </div>
          <div id="dice">
            <Dice number={diceNumber} />
          </div>
          <div className="score2">
            <p>{score.player2.round}</p>
          </div>
        </div>

        <div className="currentScore">
          <div className="currentScore1">
            <div className="current">
              <p>CURRENT</p>
              <p>{score.player1.current}</p>
            </div>
          </div>
          <div className="currentScore2">
            <div className="current">
              <p>CURRENT</p>
              <p>{score.player2.current}</p>
            </div>
          </div>
          <div className="actions">
            <div className="rollDice">
              <RollDice
                diceNumber={diceNumber}
                updateDiceNumber={updateDiceNumber}
                currentPlayer={currentPlayer}
                score={score}
                updateScore={updateScore}
                changeCurrentPlayer={changeCurrentPlayer}
              />
            </div>
            <div className="hold">
              <Hold
                score={score}
                updateScore={updateScore}
                currentPlayer={currentPlayer}
                changeCurrentPlayer={changeCurrentPlayer}
                updateWinner={updateWinner}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
