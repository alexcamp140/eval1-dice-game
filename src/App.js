import "./App.scss";
import RollDice from "./components/dice/rollDice";
import Hold from "./components/hold/hold";
import Help from "./components/help/help";
import NewGame from "./components/newGame/newGame";
import PictoCurrentPlayer from "./utils/pictoCurrentPlayer";
import React, { useState, useEffect } from "react";
import Dice from "./components/dice/dice";
import ModalWinner from "./components/modal/modalEndGame";
import initGame from "./components/newGame/initGame";
import { checkIfWinner, returnWinner } from "./utils/calculScore/verifyScore";
import winSound from "./media/win-sound.mp3";
import { Howl } from "howler";
import SoundNotification from "./components/soundNotification/soundNotification";
import ModalHelp from "./components/modal/modalHelp";
import ModalNew from "./components/modal/modalNew";

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
  const [disabled, updateSoundStatus] = useState(false);
  const [modalHelp, displayModalHelp] = useState(initModal);
  const [modalNew, displayModalNew] = useState(initModal);

  useEffect(() => {
    //Check if there is a winner
    if (checkIfWinner(score)) {
      let newWinner = returnWinner(score);
      updateWinner(newWinner);
      updateModalWinner({ visible: 1 });

      //activate or desactivate sound if disabled is update
      if (!disabled) {
        sound.play();
      }
    }
  }, [winner, score, currentPlayer, diceNumber, disabled]);

  return (
    <div className="App">
      <ModalHelp
        visible={modalHelp.visible}
        displayModalHelp={displayModalHelp}
      />
      <ModalNew
        visible={modalNew.visible}
        displayModalNew={displayModalNew}
        updateScore={updateScore}
      />
      <ModalWinner
        winner={winner}
        updateWinner={updateWinner}
        updateScore={updateScore}
        visible={modalWinner.visible}
        updateModalWinner={updateModalWinner}
      />
      <div className="container">
        <div className="new">
          <NewGame
            updateScore={updateScore}
            updateWinner={updateWinner}
            displayModalNew={displayModalNew}
          />
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
                disabled={disabled}
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
      <div className="footer">
        <SoundNotification
          disabled={disabled}
          updateSoundStatus={updateSoundStatus}
        />
        <Help modal={modalHelp} displayModalHelp={displayModalHelp} />
      </div>
    </div>
  );
}

export default App;
