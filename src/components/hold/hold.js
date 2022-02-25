import React, { useEffect } from "react";
import ButtonHold from "../../utils/buttonHold";
import calculScore from "../../utils/calculScore/calculScore";
import "./hold.scss";

function Hold(props) {
  useEffect(() => {
    const holdPoint = document.querySelector(".buttonHold");

    holdPoint.addEventListener("click", (e) => {
      let round = props.score[props.currentPlayer].round;
      let current = props.score[props.currentPlayer].current;

      let newScoreCurrentPLayer = calculScore(round, current);
      console.log(newScoreCurrentPLayer);

      if (props.currentPlayer === "player1") {
        props.updateScore({
          player1: {
            round: newScoreCurrentPLayer.round,
            current: newScoreCurrentPLayer.current,
          },
          player2: {
            round: props.score.player2.round,
            current: props.score.player2.current,
          },
        });
      } else if (props.currentPlayer === "player2") {
        props.updateScore({
          player1: {
            round: props.score.player1.round,
            current: props.score.player1.current,
          },
          player2: {
            round: newScoreCurrentPLayer.round,
            current: newScoreCurrentPLayer.current,
          },
        });
      }

      e.stopImmediatePropagation();
    });
  });

  return (
    <>
      <button type="button" className="buttonHold">
        <span className="button_icon">
          <ButtonHold />
        </span>
        <span className="button_text">HOLD</span>
      </button>
    </>
  );
}

export default Hold;
