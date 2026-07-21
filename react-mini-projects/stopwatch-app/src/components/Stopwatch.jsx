import { useEffect, useState } from "react";
import "./Stopwatch.css";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = () => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}:${String(milliseconds).padStart(2, "0")}`;
  };

  return (
    <div className="container">
      <div className="stopwatch-card">
        <h1>Stopwatch</h1>

        <h2>{formatTime()}</h2>

        <div className="buttons">
          <button onClick={() => setIsRunning(true)}>Start</button>

          <button onClick={() => setIsRunning(false)}>Stop</button>

          <button
            onClick={() => {
              setTime(0);
              setIsRunning(false);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;