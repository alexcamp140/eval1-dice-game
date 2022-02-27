import ButtonRollDice from "../../utils/buttonRollDice";
import diceSound from "../../media/gameboard-dice.mp3";
import { Howl } from "howler";
import {updateCurrentScore} from '../../utils/calculScore/score';
import "./rollDice.scss";

function RollDice(props) {
  const sound = new Howl({
    src: [diceSound],
  });

  // variable to store our intervalID
  let nIntervId;

  let lastNumber;
  

  nIntervId = false;

  function throwDice() {
    console.log("lancé");
    lastNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    
    

    sound.play();

    // check if already an interval has been set up
    if (!nIntervId) {
      nIntervId = setInterval(() => {
        props.updateDiceNumber(Math.floor(Math.random() * (6 - 1 + 1)) + 1);
      }, 100);
    }

    setTimeout(() => {
      clearInterval(nIntervId);
      props.updateDiceNumber(lastNumber);
     let newScore = updateCurrentScore(lastNumber, props.currentPlayer, props.score)
     console.log(newScore);
      props.updateScore(newScore);
    }, 1000);
    return 1;
  }

  return (
    <>
      <button
        type="button"
        className="buttonRollDice"
        onClick={() => {
          throwDice();
        }}
      >
        <span className="button_icon">
          <ButtonRollDice />
        </span>
        <span className="button_text">ROLL DICE</span>
      </button>
    </>
  );
}

export default RollDice;
