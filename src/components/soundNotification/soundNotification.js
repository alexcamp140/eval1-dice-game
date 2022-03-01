import ButtonDisableSound from "../../utils/iconSound";
import "./soundNotification.scss";

function SoundNotification(props) {

  function update() {
    let newStatus = !props.disabled;
    props.updateSoundStatus(newStatus);
  }

  return (
    <>
      <button
        type="button"
        className="buttonSound"
        onClick={() => {
          update();
        }}
      >
        <span className="button_icon">
          <ButtonDisableSound disabled={props.disabled} />
        </span>
        <span className="button_text">SOUND</span>
      </button>
    </>
  );
}

export default SoundNotification;
