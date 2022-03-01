import React, { useEffect, useRef } from "react";

function ButtonHelp() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    let context = canvas.getContext("2d");
    context.beginPath();
    context.strokeStyle = "rgb(248, 101, 101)";

    context.arc(14, 8, 6, Math.PI, Math.PI*2.5 );
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(14,14);
    context.lineTo(14,20);
    context.moveTo(14,24);
    context.arc(14, 24, 1, 0, Math.PI*2 );

  

    context.stroke();
  }, []);

  return <canvas width="28" height="28" ref={canvasRef}></canvas>;
}

export default ButtonHelp;
