import React, { useEffect } from "react";

import ButtonNew from "../../utils/buttonsNew";
import "./newGame.scss";
import Modal from "../modal/modalNew";

function NewGame(props) {
  useEffect(() => {
    const launchGame = document.getElementById("buttonNewGame");

    launchGame.addEventListener("click", (e) => {
      props.displayModalNew({ visible: 1 });
      e.stopImmediatePropagation();
    });
  });

  return (
    <>
      <button type="button" id="buttonNewGame">
        <span className="button_icon">
          <ButtonNew />
        </span>
        <span className="button_text">NEW GAME</span>
      </button>
      <Modal
        visible={props.visible}
        displayModal={props.displayModalNew}
        updateScore={props.updateScore}
      />
    </>
  );
}

export default NewGame;
