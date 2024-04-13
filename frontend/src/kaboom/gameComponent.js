// GameComponent.jsx
import React, { useEffect, useRef } from "react";
import { initializeKaboom } from "./kaboomCtx";
import { setupGame } from "./main";

const GameComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const k = initializeKaboom(canvasRef.current);
      setupGame(k);
    }
  }, []);

  return (
    <div
      className="w-full h-screen overflow-hidden flex items-center justify-center font-mono text-2xl"
      style={{ fontFamily: "monogram, monospace", overflow: "hidden" }}
    >
      <div
        id="app"
        style={{ position: "relative", width: "100%", height: "100%" }}
      >
        <p
          className="note"
          style={{
            position: "absolute",
            left: "5%",
            top: "1vh",
            color: "rgb(238, 238, 238)",
          }}
        >
          Tap/Click around to move
        </p>
        <div
          id="textbox-container"
          style={{
            display: "none",
            position: "absolute",
            left: "10%",
            right: "10%",
            bottom: "2vh",
            minHeight: "10vh",
            background: "white",
            borderRadius: "3px",
            padding: "1rem",
            filter: "drop-shadow(0 0 0.75rem rgb(112, 112, 112))",
          }}
        >
          <div id="textbox">
            <p id="dialogue" className="ui-text"></p>
            <div
              className="btn-container"
              style={{ alignSelf: "flex-end", marginTop: "1rem" }}
            >
              <button
                id="close"
                className="ui-close-btn"
                style={{ border: "none", borderRadius: "3px", padding: "1rem" }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
        <canvas
          ref={canvasRef}
          id="game"
          style={{ width: "100%", height: "100%" }}
        ></canvas>
      </div>
    </div>
  );
};

export default GameComponent;
