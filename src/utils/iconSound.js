import React, { useEffect, useRef } from "react";

function ButtonDisableSound(props) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    let context = canvas.getContext("2d");

    if (props.disabled) {
      context.beginPath();
        context.moveTo(0, 0);
        context.fillStyle = "rgb(247, 247, 247)";
        context.globalCompositeOperation = "source-over";
        context.fillRect(0, 0, 30, 30);
      context.closePath();
      context.beginPath();
        context.strokeStyle = "rgb(248, 101, 101)";
        context.moveTo(4, 10);
        context.lineTo(4, 18);
        context.moveTo(4, 10);
        context.lineTo(10, 10);
        context.moveTo(4, 18);
        context.lineTo(10, 18);
        context.lineTo(18, 26);
        context.lineTo(18, 2);
        context.lineTo(10, 10);
        context.moveTo(26, 2);
        context.lineTo(2, 26);
        context.stroke();
      context.closePath();
    } else {
      context.beginPath();
        context.moveTo(0, 0);
        context.fillStyle = "rgb(247, 247, 247)";
        context.globalCompositeOperation = "source-over";
        context.fillRect(0, 0, 30, 30);
      context.closePath();
      context.beginPath();
        context.strokeStyle = "rgb(248, 101, 101)";
        context.moveTo(4, 10);
        context.lineTo(4, 18);
        context.moveTo(4, 10);
        context.lineTo(10, 10);
        context.moveTo(4, 18);
        context.lineTo(10, 18);
        context.lineTo(18, 26);
        context.lineTo(18, 2);
        context.lineTo(10, 10);
        context.moveTo(20, 8);
        context.lineTo(26, 2);
        context.moveTo(20, 14);
        context.lineTo(26, 14);
        context.moveTo(20, 20);
        context.lineTo(26, 26);
        context.stroke();
      context.closePath();
    }
  }, [props.disabled]);

  return <canvas width="28" height="28" ref={canvasRef}></canvas>;
}

export default ButtonDisableSound;
