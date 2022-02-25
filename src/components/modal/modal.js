import React from 'react';
import "./modal.scss";

export default function Modal(props) {



   const closeModal = function(){
        props.displayModal({visible:0})
    }  

    const initGame = function(){  
        props.updateScore({
            player1: {round:0, current:0},
            player2: {round:0, current:0}
         });
         closeModal();
    
    };

  return (
    <div className='modal'
    style={{
        transform: props.visible ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity:props.visible ? '1' : '0'
    }}>
        <p >Would you like Launch a new game ?</p>
        <button type='button' id="btn-yes" onClick={initGame}>Yes</button>
        <button type='button' id="btn-no" onClick={closeModal}>No</button>
    </div>
  )
}
