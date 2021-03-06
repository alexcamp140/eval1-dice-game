import React from "react";
import "./modal.scss";

export default function ModalWinner(props) {
  const initGame = function () {
    props.updateModalWinner({ visible: 0 });
    window.location.reload();
  };

  let winner = props.winner === "player1" ? "Player 1" : "Player 2";

  return (
    <div
      className="modalWrapper"
      style={{
        transform: props.visible ? "translateY(0vh)" : "translateY(-100vh)",
        opacity: props.visible ? "1" : "0",
      }}
    >
      <div
        className="modalEndGame"
        style={{
          transform: props.visible ? "translateY(0vh)" : "translateY(-100vh)",
          opacity: props.visible ? "1" : "0",
        }}
      >
        <p> {winner} win this Game.</p>
        <div className="btn-container">
        <button type="button" id="btn-yes" onClick={initGame}>
          New Game
        </button>
        </div>
      </div>
    </div>
  );
}
