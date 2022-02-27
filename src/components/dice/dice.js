import React, { useEffect, useRef } from "react";
let number;
function Dice(props) {
    const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    let context = canvas.getContext("2d");

    switch (props.number) {
      case 1:
        context.beginPath();
            context.moveTo(0, 0);
            context.fillStyle='white';
            context.globalCompositeOperation="source-over";
            context.fillRect(0,0,90,90);
        context.closePath();
        context.beginPath();
            context.moveTo(45, 45);
            context.arc(45, 45, 7, 0, Math.PI * 2, true);
            context.fillStyle = "rgba(255, 0, 0, 0.7)";
            context.globalCompositeOperation="source-over";
            context.fill();
        context.closePath();
        break;
      case 2:
        context.beginPath();
            context.moveTo(0, 0);
            context.fillStyle='white';
            context.globalCompositeOperation="source-over";
            context.fillRect(0,0,90,90);
        context.closePath(); 
        context.beginPath();

            context.moveTo(25, 25);
            context.arc(25, 25, 7, 0, Math.PI * 2, true);
            context.moveTo(65, 65);
            context.arc(65, 65, 7, 0, Math.PI * 2, true);
            context.fillStyle = "rgba(255, 0, 0, 0.7)";
            context.globalCompositeOperation="source-over";
            context.fill();
        context.closePath();    
        break;
      case 3:
        context.beginPath();  
            context.moveTo(0, 0);
            context.fillStyle='white';
            context.globalCompositeOperation="source-over";
            context.fillRect(0,0,90,90);
        context.closePath(); 
        context.beginPath();    
            context.moveTo(25, 25);
            context.arc(25, 25, 7, 0, Math.PI * 2, true);
            context.moveTo(45, 45);
            context.arc(45, 45, 7, 0, Math.PI * 2, true);
            context.moveTo(65, 65);
            context.arc(65, 65, 7, 0, Math.PI * 2, true);
            context.fillStyle = "rgba(255, 0, 0, 0.7)";
            context.globalCompositeOperation="source-over";
            context.fill();
        context.closePath(); 
        break;
      case 4:
        context.beginPath();  
            context.moveTo(0, 0);
            context.fillStyle='white';
            context.globalCompositeOperation="source-over";
            context.fillRect(0,0,90,90);
        context.closePath();     
        context.beginPath();
            context.moveTo(25, 25);
            context.arc(25, 25, 7, 0, Math.PI * 2, true);
            context.moveTo(25, 65);
            context.arc(25, 65, 7, 0, Math.PI * 2, true);
            context.moveTo(65, 25);
            context.arc(65, 25, 7, 0, Math.PI * 2, true);
            context.moveTo(65, 65);
            context.arc(65, 65, 7, 0, Math.PI * 2, true);
            context.fillStyle = "rgba(255, 0, 0, 0.7)";
            context.globalCompositeOperation="source-over";
            context.fill();
        context.closePath();     
        break;
      case 5:
        context.beginPath();  
            context.moveTo(0, 0);
            context.fillStyle='white';
            context.globalCompositeOperation="source-over";
            context.fillRect(0,0,90,90);
        context.closePath();             
        context.beginPath();
            context.moveTo(25, 25);
            context.arc(25, 25, 7, 0, Math.PI * 2, true);
            context.moveTo(25, 65);
            context.arc(25, 65, 7, 0, Math.PI * 2, true);
            context.moveTo(45, 45);
            context.arc(45, 45, 7, 0, Math.PI * 2, true);
            context.moveTo(65, 25);
            context.arc(65, 25, 7, 0, Math.PI * 2, true);
            context.moveTo(65, 65);
            context.arc(65, 65, 7, 0, Math.PI * 2, true);
            context.fillStyle = "rgba(255, 0, 0, 0.7)";
            context.globalCompositeOperation="source-over";
            context.fill();
        context.closePath();             
        break;
      case 6:
        context.beginPath();  
            context.moveTo(0, 0);
            context.fillStyle='white';
            context.globalCompositeOperation="source-over";
            context.fillRect(0,0,90,90);
        context.closePath();             
        context.beginPath();
            context.moveTo(25, 25);
            context.arc(25, 25, 7, 0, Math.PI * 2, true);
            context.moveTo(25, 65);
            context.arc(25, 65, 7, 0, Math.PI * 2, true);
            context.moveTo(25, 45);
            context.arc(25, 45, 7, 0, Math.PI * 2, true);
            context.moveTo(65, 45);
            context.arc(65, 45, 7, 0, Math.PI * 2, true);
            context.moveTo(65, 25);
            context.arc(65, 25, 7, 0, Math.PI * 2, true);
            context.moveTo(65, 65);
            context.arc(65, 65, 7, 0, Math.PI * 2, true);
            context.fillStyle = "rgba(255, 0, 0, 0.7)";
            context.globalCompositeOperation="source-over";
            context.fill();
        context.closePath(); 
        break;
      default:
        console.log(`Sorry, we are out of ${number}.`);
    }
  });

  return (
    <canvas id="diceCanvas" height="90" width="90" ref={canvasRef}></canvas>
  );
}

export default Dice;
