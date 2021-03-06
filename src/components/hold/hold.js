import ButtonHold from "../../utils/iconHold";
import "./hold.scss";
import { updateRoundScore } from "../../utils/calculScore/score";

function Hold(props) {
  function holdScore() {
    let newScore = updateRoundScore(props.currentPlayer, props.score);
    props.updateScore(newScore);
    let nextPlayer = props.currentPlayer === "player1" ? "player2" : "player1";
    props.changeCurrentPlayer(nextPlayer);
  }

  return (
    <>
      <button
        type="button"
        className="buttonHold"
        onClick={() => {
          holdScore();
        }}
      >
        <span className="button_icon">
          <ButtonHold />
        </span>
        <span className="button_text">HOLD</span>
      </button>
    </>
  );
}

export default Hold;
