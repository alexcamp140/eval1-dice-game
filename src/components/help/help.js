import React from "react";

import ButtonHelp from "../../utils/buttonsHelp";
import "./help.scss";


function Help(props) {



  // useEffect(() => {

  //   const launchGame = document.getElementById("buttonNewGame");

  //   launchGame.addEventListener("click", (e) => {

  //       displayModal({ visible: 1 });
  //       e.stopImmediatePropagation();

  //   });
  // });

  return (
    <>
      <button
        type="button"
        className="buttonHelp"
      >
        <span className="button_icon">
          <ButtonHelp />
        </span>
        <span className="button_text">Help</span>
      </button>
      {/* <Modal visible={modal.visible} displayModal={displayModal} updateScore={props.updateScore} /> */}
    </>

  );
}

export default Help;
