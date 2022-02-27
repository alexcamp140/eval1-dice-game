import ButtonRollDice from "../../utils/buttonRollDice";
import diceSound from "../../media/gameboard-dice.mp3";
import errorSound from "../../media/error-sound.mp3";
import { Howl } from "howler";
import {updateCurrentScore, resetScore} from '../../utils/calculScore/score';
import "./rollDice.scss";

function RollDice(props) {
  const sound = new Howl({
    src: [diceSound],
  });
  const soundError = new Howl({
    src: [errorSound],
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
      let newScore;
      if (lastNumber===1){
          console.log ("j'ai un 1");

        newScore = resetScore(props.currentPlayer, props.score);
        props.updateScore(newScore);
        console.log("j'ai reste le score")
        console.log(newScore)
        let nextPlayer= props.currentPlayer==="player1"?"player2":"player1"
        props.changeCurrentPlayer(nextPlayer);
        soundError.play();
        console.log("j'ai cnagé le player " + props.currentPlayer);

      } else {
        newScore = updateCurrentScore(lastNumber, props.currentPlayer, props.score)
         props.updateScore(newScore);
      }
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
