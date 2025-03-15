import React, { useState, useEffect } from "react";
import useSound from "use-sound";

const CursorLines = () => {
  const [clicks, setClicks] = useState([]);
  //   const [play] = useSound(boopSfx);

  // Generate points for 4 lines at different angles
  const generateLines = (x: number, y: number) => {
    const lines = [];
    for (let i = 0; i < 4; i++) {
      const angle = (i * Math.PI) / 4;
      lines.push({
        x1: x - Math.cos(angle) * 5,
        y1: y - Math.sin(angle) * 5,
        x2: x - Math.cos(angle) * 15,
        y2: y - Math.sin(angle) * 15,
      });
    }
    return lines;
  };

  useEffect(() => {
    let isSelecting = false;

    const handleSelectStart = () => {
      isSelecting = true;
    };

    const handleSelectEnd = () => {
      isSelecting = false;
    };

    const handleMouseDown = (e) => {
      // Don't create effects during text selection
      if (e.button !== 0 || isSelecting) return;

      // Limit the number of concurrent effects
      //   setClicks((prev) => {
      //     const newClicks = [
      //       {
      //         x: e.clientX,
      //         y: e.clientY,
      //         id: Date.now(),
      //         lines: generateLines(e.clientX, e.clientY),
      //       },
      //     ];
      //     // Keep only the 5 most recent effects
      //     return [...prev.slice(-4), ...newClicks];
      //   });
    };

    // Clean up old click effects more frequently but keep fewer
    // const cleanup = setInterval(() => {
    //   setClicks((prev) => prev.filter((click) => Date.now() - click.id < 500));
    // }, 250);

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("selectstart", handleSelectStart);
    document.addEventListener("selectend", handleSelectEnd);
    document.addEventListener("mouseup", handleSelectEnd);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("selectstart", handleSelectStart);
      document.removeEventListener("selectend", handleSelectEnd);
      document.removeEventListener("mouseup", handleSelectEnd);
      //   clearInterval(cleanup);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {clicks.map((click) => (
        <svg
          key={click.id}
          className="absolute left-0 top-0 w-full h-full"
          style={{ isolation: "isolate" }}
          width="100%"
          height="100%"
        >
          {click.lines.map((line, index) => (
            <line
              key={index}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="black"
              strokeWidth="2"
              className="animate-[clickLine_500ms_ease-out_forwards]"
              style={{
                transformOrigin: `${click.x}px ${click.y}px`,
                willChange: "transform, opacity",
              }}
            />
          ))}
        </svg>
      ))}

      <style jsx global>{`
        @keyframes clickLine {
          0% {
            opacity: 1;
            transform: scale(0.5);
          }
          100% {
            opacity: 0;
            transform: scale(2);
          }
        }
      `}</style>
    </div>
  );
};

export default CursorLines;
