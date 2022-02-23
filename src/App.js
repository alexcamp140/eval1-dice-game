import "./App.css";
import ButtonNew from "./utils/buttonsNew";
import ButtonRollDice from "./utils/buttonRollDice";
import ButtonHold from "./utils/buttonHold";

import Dice from './utils/dice';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="new">
          <div className="buttonNewGame">
            <ButtonNew />
            <span>NEW GAME</span>
          </div>
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
            <p>71</p>
          </div>
          <div className="dice">
           <Dice/>
          </div>
          <div className="score2">
            <p>50</p>
          </div>
        </div>

        <div className="currentScore">
          <div className="currentScore1">
            <div className="current">
              <p>CURRENT</p>
              <p>6</p>
            </div>
          </div>
          <div className="currentScore2">
            <div className="current">
              <p>CURRENT</p>
              <p>6</p>
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
