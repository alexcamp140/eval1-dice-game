import "./App.css";

import ButtonRollDice from "./utils/buttonRollDice";
import Hold from "./components/hold/hold";
import NewGame from "./components/newGame/newGame";

import React, { useState } from "react";

import Dice from "./utils/dice";
import firstPlayer from "./utils/firstPlayer/firstplayer";

function App() {

  const [score, updateScore] = useState ({player1:{round:10, current:5},player2:{round:25, current:17}})
const [currentPlayer, changeCurrentPlayer]= useState(firstPlayer()) ;

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
            <p>{score.player1.round}</p>
          </div>
          <div className="dice">
            <Dice />
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
            <div className="button">
              <ButtonRollDice />
              <span>ROLL DICE</span>
            </div>
            <div className="hold">
              <Hold score={score} updateScore={updateScore} currentPlayer={currentPlayer} changeCurrentPlayer={changeCurrentPlayer} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
