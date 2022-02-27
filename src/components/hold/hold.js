import ButtonHold from "../../utils/buttonHold";
import "./hold.scss";
import {updateRoundScore} from '../../utils/calculScore/score';

function Hold(props) {

  function holdScore(){

    let newScore = updateRoundScore(props.currentPlayer, props.score)
    console.log(newScore);
     props.updateScore(newScore);


  }

  return (
    <>
      <button type="button" className="buttonHold" onClick={()=>{holdScore();}}>
        <span className="button_icon">
          <ButtonHold />
        </span>
        <span className="button_text">HOLD</span>
      </button>
    </>
  );
}

export default Hold;