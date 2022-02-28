import React, { useEffect,useRef} from "react";

function ButtonRollDice(){
    const canvasRef = useRef(null);

    useEffect(() => {
       
        const canvas = canvasRef.current;
        let context = canvas.getContext("2d");
        context.beginPath();
        context.strokeStyle = 'rgb(248, 101, 101)';
       

        context.arc(14, 14, 10, (Math.PI/180)*30 , (Math.PI/180)*180)
        context.stroke();
        context.beginPath();
        context.strokeStyle = 'rgb(248, 101, 101)';

        context.arc(14, 14, 10, (Math.PI/180)*210, (Math.PI/180)*360)

        context.stroke();

        context.beginPath();

        context.moveTo(26,10);
        context.lineTo(24,15);

        context.moveTo(20,11);
        context.lineTo(24,15);

        context.moveTo(1,18);
        context.lineTo(4,13);

        context.moveTo(8,17);
        context.lineTo(4,13);

        context.stroke();


      }, []);


 return(

         <canvas width="28" height="28" ref={canvasRef}></canvas>
         

 )
}

export default ButtonRollDice;
