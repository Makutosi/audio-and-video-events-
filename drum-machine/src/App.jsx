

import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [display, setDisplay] = useState("");
  const [activePad, setActivePad] = useState(null);
  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(0.5);

  const bank = [
    { key: "Q", id: "Heater-1", src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-1.mp3" },
    { key: "W", id: "Heater-2", src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-2.mp3" },
    { key: "E", id: "Heater-3", src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-3.mp3" },
    { key: "A", id: "Heater-4", src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-4_1.mp3" },
    { key: "S", id: "Clap", src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-6.mp3" },
    { key: "D", id: "Open-HH", src: "https://cdn.freecodecamp.org/curriculum/drum/Dsc_Oh.mp3" },
    { key: "Z", id: "Kick_n_Hat", src: "https://cdn.freecodecamp.org/curriculum/drum/Kick_n_Hat.mp3" },
    { key: "X", id: "Kick", src: "https://cdn.freecodecamp.org/curriculum/drum/RP4_KICK_1.mp3" },
    { key: "C", id: "Closed-HH", src: "https://cdn.freecodecamp.org/curriculum/drum/Cev_H2.mp3" }
  ];

  const playSound = (pad) => {
    if (!power) return;

    const audio = document.getElementById(pad.key);
    audio.volume = volume;
    audio.currentTime = 0;
    audio.play();

    setDisplay(pad.id);
    setActivePad(pad.key);

    setTimeout(() => setActivePad(null), 150);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toUpperCase();
      const pad = bank.find((p) => p.key === key);
      if (pad) playSound(pad);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="app-container">

      {/* Power Switch */}
      <div
        className={`power-switch ${power ? "on" : ""}`}
        onClick={() => setPower(!power)}
      ></div>

      {/* Volume Slider */}
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => setVolume(e.target.value)}
        className="volume-slider"
      />

      {/* Display */}
      <div className="display">{display || "Ready"}</div>

      {/* Pad Grid */}
      <div className="pad-grid">
        {bank.map((pad) => (
          <button
            key={pad.key}
            id={pad.id}
            className={`drum-pad ${activePad === pad.key ? `active-${pad.key}` : ""}`}
            onClick={() => playSound(pad)}
          >
            {pad.key}
            <audio className="clip" id={pad.key} src={pad.src}></audio>
          </button>
        ))}
      </div>

    </div>
  );
}
