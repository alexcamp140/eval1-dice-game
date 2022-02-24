import "./App.css";

import ButtonRollDice from "./utils/buttonRollDice";
import ButtonHold from "./utils/buttonHold";
import NewGame from "./components/newGame/newGame";

import React, { useState } from "react";

import Dice from "./utils/dice";

function App() {

  const [score, updateScore] = useState ({player1:10,player2:13, currentScorePlayer1:2, currentScorePlayer2:1})

  return (
    <div className="App">
      <div className="container">
        <div className="new">
          <NewGame updateScore={updateScore} />
        </div>
        <div className="player">
          <div className="player1">
            <p> PLAYER 1 </p>
          </div>
          <div className="player2">
            <p> PLAYER 2 </p>
          </div>
        </div>
        <div className="score">
          <div className="score1">
            <p>{score.player1}</p>
          </div>
          <div className="dice">
            <Dice />
          </div>
          <div className="score2">
            <p>{score.player2}</p>
          </div>
        </div>

        <div className="currentScore">
          <div className="currentScore1">
            <div className="current">
              <p>CURRENT</p>
              <p>{score.currentScorePlayer1}</p>
            </div>
          </div>
          <div className="currentScore2">
            <div className="current">
              <p>CURRENT</p>
              <p>{score.currentScorePlayer2}</p>
            </div>
          </div>
          <div className="actions">
            <div className="button">
              <ButtonRollDice />
              <span>ROLL DICE</span>
            </div>
            <div className="button">
              <ButtonHold />
              <span>HOLD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
