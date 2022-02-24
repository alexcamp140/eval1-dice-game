import React, { useEffect, useRef, useState } from "react";

import ButtonNew from "../../utils/buttonsNew";
import "./newGame.scss";
import Modal from "../modal/modal";

function NewGame(props) {


  const [gameState, launchNewGame] = useState(0);

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
        onClick={() => launchNewGame(1)}
      >
        <span className="button_icon">
          <ButtonNew />
        </span>
        <span className="button_text">NEW GAME</span>
      </button>
      <Modal visible={modal.visible} displayModal={displayModal} updateScore={props.updateScore} />
    </>

    // <div className="new">
    //   <div className="buttonNewGame">
    //     <ButtonNew />
    //     <span>NEW GAME</span>
    //   </div>
    // </div>
  );
}

export default NewGame;
