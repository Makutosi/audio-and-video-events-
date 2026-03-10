

import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [display, setDisplay] = useState("");
  const [activePad, setActivePad] = useState(null);
  const [power, setPower] = useState(true);   // 電源 ON/OFF
  const [volume, setVolume] = useState(0.5);  // ボリューム

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

  // 音を鳴らす共通関数（クリックもキーボードもここを使う）
  const playSound = (pad) => {
    const audio = document.getElementById(pad.key);
    audio.volume = volume;
    audio.currentTime = 0;
    audio.play();

    setDisplay(pad.id);
    setActivePad(pad.key);

    setTimeout(() => setActivePad(null), 150);
  };

  // キーボード → 電源 OFF のときだけ鳴る
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (power) return; // 電源 ON のときはキーボード無効

      const key = e.key.toUpperCase();
      const pad = bank.find((p) => p.key === key);
      if (pad) playSound(pad);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [power, volume]);

  return (
    <div className="app-container">
      <div className="disco-light"></div>
  

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
      <div className="display">
        {power ? "Click Mode" : "Keyboard Mode"} — {display || "Ready"}
      </div>

      {/* Pad Grid */}
      <div className="pad-grid">
        {bank.map((pad) => (
          <button
            key={pad.key}
            id={pad.id}
            className={`drum-pad ${activePad === pad.key ? `active-${pad.key}` : ""}`}
            onClick={() => {
              if (power) playSound(pad); // 電源 ON のときだけクリックで鳴る
            }}
          >
            {pad.key}
            <audio className="clip" id={pad.key} src={pad.src}></audio>
          </button>
        ))}
      </div>

    </div>
  );
}
