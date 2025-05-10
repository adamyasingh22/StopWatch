import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 100);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleStartFrom = () => {
    const parsed = parseInt(inputValue);
    if (!isNaN(parsed)) {
      setTime(parsed);
      setIsRunning(true);
    }
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      {time}
      <div>
        <button onClick={handleStart}>START</button>
        <button onClick={handlePause}>PAUSE</button>
        <button onClick={handleReset}>RESET</button>
      </div>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Start from (tenths)"
        />
        <button onClick={handleStartFrom}>START FROM</button>
      </div>
    </div>
  );
}
