import React from "react";
import "./modal.scss";

export default function ModalHelp(props) {
  const closeModal = function () {
    props.displayModalHelp({ visible: 0 });
  };

  return (
    <div
      className="modalWrapper"
      style={{
        transform: props.visible ? "translateY(0vh)" : "translateY(-100vh)",
        opacity: props.visible ? "1" : "0",
      }}
    >
      <div
        className="modalHelp"
        style={{
          transform: props.visible ? "translateY(0vh)" : "translateY(-100vh)",
          opacity: props.visible ? "1" : "0",
        }}
      >
        <h2>Welcome to the dice game.</h2>

        <p>
          <b>Rules: </b>
        </p>
        <ul>
          <li>
            <b>Number of player :</b> 2 Each player has a temporary score
            (ROUND) and an overall score (GLOBAL).
          </li>
          <li>
            At each turn, the player has his ROUND initialized to 0 and can roll
            a die as many times as he wishes. The result of a throw is added to
            the ROUND.
          </li>
        </ul>
        <p> During his turn, the player can decide at any time to:</p>
        <ul>
          {" "}
          <li>
            Click on the “Hold” option, which sends the points of the ROUND to
            the GLOBAL. It will then be the other player's turn.
          </li>
          <li>
            Roll the dice. If he rolls a 1, his ROUND score is lost and his turn
            ends.
          </li>
        </ul>

        <p>
          <b>End of the game :</b> The first player to reach 100 points on
          global wins the game.
        </p>
        <div className="btn-container">
        <button type="button" id="btn-yes" onClick={closeModal}>
          OK
        </button>
        </div>
      </div>
    </div>
  );
}
