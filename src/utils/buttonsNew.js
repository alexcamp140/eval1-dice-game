import React, { useEffect,useRef} from "react";

function ButtonNew(){
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        let context = canvas.getContext("2d");
        context.beginPath();
        context.strokeStyle = 'rgb(248, 101, 101)';
        context.arc(14, 14,12,0, 2*Math.PI);
        context.stroke();
        context.moveTo(6,14);
        context.lineTo(22, 14);
        context.moveTo(14,6);
        context.lineTo(14, 22);
        context.stroke();
      }, []);



 return(

         <canvas width="28" height="28" ref={canvasRef}></canvas>
         

 )
}



export default ButtonNew ;