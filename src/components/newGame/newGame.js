import React, { useEffect, useState } from "react";

import ButtonNew from "../../utils/buttonsNew";
import "./newGame.scss";
import Modal from "../modal/modal";

function NewGame(props) {

  const [modal, displayModal] = useState({ visible: 0 });


  useEffect(() => {

    const launchGame = document.querySelector(".buttonNewGame");

    launchGame.addEventListener("click", (e) => {


        displayModal({ visible: 1 });
        e.stopImmediatePropagation();

    });
  });

  return (
    <>
      <button
        type="button"
        className="buttonNewGame"
      >
        <span className="button_icon">
          <ButtonNew />
        </span>
        <span className="button_text">NEW GAME</span>
      </button>
      <Modal visible={modal.visible} displayModal={displayModal} updateScore={props.updateScore} />
    </>

  );
}

export default NewGame;
