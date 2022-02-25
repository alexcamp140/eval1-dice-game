import React, { useEffect, useRef } from "react";

function PictoCurrentPlayer() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    let context = canvas.getContext("2d");
    context.restore();
    context.save();
    context.arc(15, 15, 7, 0, Math.PI * 2, true);
    context.fillStyle = 'rgba(255, 0, 0, 0.7)';
    context.fill();
  }, []);


  return <canvas id="pictoCurrentPlayer" width="30" height="30" ref={canvasRef}></canvas>;
}

export default PictoCurrentPlayer;

//
