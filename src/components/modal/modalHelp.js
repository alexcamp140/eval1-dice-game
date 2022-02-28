import React from "react";
import "./modal.scss";

export default function ModalHelp(props) {
  const initGame = function () {
    props.updateModalWinner({ visible: 0 });
    window.location.reload();
  };

  let winner = props.winner === "player1" ? "Player 1" : "Player 2";

  return (
    <div
      className="modalHelp"
      style={{
        transform: props.visible ? "translateY(0vh)" : "translateY(-100vh)",
        opacity: props.visible ? "1" : "0",
      }}
    >
      <p> </p>
      <button type="button" id="btn-yes" onClick={initGame}>
        Launch New Game
      </button>
    </div>
  );
}
