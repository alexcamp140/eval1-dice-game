import ButtonRollDice from "../../utils/buttonRollDice";
import diceSound from "../../media/gameboard-dice.mp3";
import errorSound from "../../media/error-sound.mp3";
import { Howl } from "howler";
import { updateCurrentScore, resetScore } from "../../utils/calculScore/score";
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
    lastNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

    if (!props.disabled) {
      sound.play();
    }

    // check if already an interval has been set up
    if (!nIntervId) {
      nIntervId = setInterval(() => {
        props.updateDiceNumber(Math.floor(Math.random() * (6 - 1 + 1)) + 1);
      }, 100);
    }

    setTimeout(() => {
      //stop interval after 1 second to stop animate dice result et save the dice score
      clearInterval(nIntervId);

      //set the dice result
      props.updateDiceNumber(lastNumber);
      let newScore;

      //rules : chek if the dice result = 1. If it is, reinitialize current(round) score and change player
      if (lastNumber === 1) {
        newScore = resetScore(props.currentPlayer, props.score);
        props.updateScore(newScore);

        let nextPlayer =
          props.currentPlayer === "player1" ? "player2" : "player1";
        props.changeCurrentPlayer(nextPlayer);

        if (!props.disabled) {
          soundError.play();
        }
      } else {
        newScore = updateCurrentScore(
          lastNumber,
          props.currentPlayer,
          props.score
        );
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
