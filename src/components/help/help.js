import React, { useEffect } from "react";

import ButtonHelp from "../../utils/iconHelp";
import "./help.scss";

function Help(props) {
  useEffect(() => {
    const displayHelp = document.getElementById("buttonHelp");

    displayHelp.addEventListener("click", (e) => {
      props.displayModalHelp({ visible: 1 });
    });
  });

  return (
    <>
      <button type="button" id="buttonHelp">
        <span className="button_icon">
          <ButtonHelp />
        </span>
        <span className="button_text">HELP</span>
      </button>
    </>
  );
}

export default Help;
