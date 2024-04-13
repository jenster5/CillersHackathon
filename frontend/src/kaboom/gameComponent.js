// GameComponent.jsx
import React, { useEffect, useRef } from "react";
import { initializeKaboom } from "./kaboomCtx";
import { setupGame } from "./main";

const GameComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const k = initializeKaboom(canvasRef.current);
      setupGame(k); // Pass the Kaboom instance 'k' to setupGame
    }
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} id="game"></canvas>
    </div>
  );
};

export default GameComponent;
