export default function App() {
  const playSound = () => {
    const audio = document.getElementById("Q");
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <div id="drum-machine">
      <div id="pad-bank">
        <button className="drum-pad" id="Heater-1" onClick={playSound}>
          Q
          <audio
            className="clip"
            id="Q"
            src="https://cdn.freecodecamp.org/curriculum/drum/Heater-1.mp3"
          ></audio>
        </button>
      </div>
      <p id="display">Heater-1</p>
    </div>
  );
}
