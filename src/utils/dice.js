import React, { useEffect,useRef} from "react";

function Dice(){
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        let context = canvas.getContext("2d");
        context.restore();
        context.save();
        context.arc(25, 25, 7, 0, Math.PI * 2, true);
        context.moveTo(0, 0);
        context.arc(25, 65, 7, 0, Math.PI * 2, true);
        context.moveTo(0, 0);
        context.arc(45, 45, 7, 0, Math.PI * 2, true);
        context.moveTo(0, 0);
        context.arc(65, 25, 7, 0, Math.PI * 2, true);
        context.moveTo(95, 65);
        context.arc(65, 65, 7, 0, Math.PI * 2, true);
        context.fillStyle = 'rgba(255, 0, 0, 0.7)';
        context.fill();
      }, []);



 return(

    <canvas id="diceCanvas" height="90" width="90" ref={canvasRef}></canvas>
        
 )
}



export default Dice ;