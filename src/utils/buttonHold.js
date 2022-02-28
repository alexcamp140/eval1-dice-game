import React, { useEffect, useRef } from "react";

function ButtonHold() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    let context = canvas.getContext("2d");
    context.beginPath();
    context.strokeStyle = "rgb(248, 101, 101)";
    context.moveTo(4, 6);
    context.lineTo(11, 6);
    context.moveTo(17, 6);
    context.lineTo(24, 6);
    context.moveTo(4, 6);
    context.lineTo(4, 26);
    context.lineTo(24, 26);
    context.lineTo(24, 6);
    context.moveTo(14, 2);
    context.lineTo(14, 19);
    context.moveTo(11, 16);
    context.lineTo(14, 19);
    context.lineTo(17, 16);

    context.stroke();
  }, []);

  return <canvas width="28" height="28" ref={canvasRef}></canvas>;
}

export default ButtonHold;

//
