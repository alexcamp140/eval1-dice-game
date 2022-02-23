import React, { useEffect,useRef} from "react";

function Dice(){
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        let context = canvas.getContext("2d");
        context.restore();
        context.save();
        context.arc(13, 13, 4, 0, Math.PI * 2, true);
        context.moveTo(0, 0);
        context.arc(13, 37, 4, 0, Math.PI * 2, true);
        context.moveTo(0, 0);
        context.arc(37, 37, 4, 0, Math.PI * 2, true);
        context.moveTo(0, 0);
        context.arc(37, 13, 4, 0, Math.PI * 2, true);
        context.moveTo(95, 65);
        context.arc(25, 25, 4, 0, Math.PI * 2, true);
        context.fillStyle = 'rgba(255, 0, 0, 0.7)';
        context.fill();
      }, []);



 return(

    <canvas id="diceCanvas" height="50" width="50" ref={canvasRef}></canvas>
        
 )
}



export default Dice ;