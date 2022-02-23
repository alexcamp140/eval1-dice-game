import React, { useEffect,useRef} from "react";

function ButtonHold(){
    const canvasRef = useRef(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      let context = canvas.getContext("2d");
      context.beginPath();
      context.strokeStyle = 'rgba(255, 0, 0, 0.6)';
      context.moveTo(4,4);
      context.lineTo(11, 4);
      context.moveTo(17,4);
      context.lineTo(24, 4);
      context.moveTo(4,4);
      context.lineTo(4, 24);
      context.lineTo(24, 24);
      context.lineTo(24, 4);
      context.moveTo(14,0);
      context.lineTo(14, 17);
      context.moveTo(11,14);
      context.lineTo(14, 17);
      context.lineTo(17, 14);


      context.stroke();
    }, []);



 return(

         <canvas width="28" height="28" ref={canvasRef}></canvas>
         

 )
}

export default ButtonHold;

// 