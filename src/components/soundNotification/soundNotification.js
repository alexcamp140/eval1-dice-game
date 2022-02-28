import ButtonDisableSound from "../../utils/buttonSound";
import "./soundNotification.scss";

function SoundNotification(props) {


    function update(){
        let newStatus=!props.disabled;
        props.updateSoundStatus(newStatus);
        console.log(props.disabled);
    }

  return (
    <>
      <button type="button" className="buttonSound" onClick={()=>{update()}}>
        <span className="button_icon">
          <ButtonDisableSound disabled={props.disabled}/>
        </span>
        <span className="button_text">Sound</span>
      </button>
    </>
  );
}

export default SoundNotification;