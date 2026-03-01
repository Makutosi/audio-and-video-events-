export default function App() {
  const bank = [ 
    { 
      key: "Q", 
      id: "Heater-1", 
      src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-1.mp3" 
    }, 
    { 
      key: "W", 
      id: "Heater-2", 
      src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-2.mp3" 
    }, 
    { 
      key: "E", 
      id: "Heater-3", 
      src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-3.mp3" 
    },
    {
      key: "A", 
      id: "Heater-4", 
      src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-4_1.mp3"      
    },
        {
      key: "S", 
      id: "Clap", 
      src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-6.mp3"      
    },
        {
      key: "D", 
      id: "Open-HH", 
      src: "https://cdn.freecodecamp.org/curriculum/drum/Dsc_Oh.mp3"      
    },
        {
      key: "Z", 
      id: "Kick_n_Hat", 
      src: "https://cdn.freecodecamp.org/curriculum/drum/Kick_n_Hat.mp3"      
    },
        {
      key: "X", 
      id: "Kick", 
      src: "https://cdn.freecodecamp.org/curriculum/drum/RP4_KICK_1.mp3"      
    },
        {
      key: "C", 
      id: "Closed-HH", 
      src: "https://cdn.freecodecamp.org/curriculum/drum/Cev_H2.mp3"      
    }
  ];

  const playSound = (key) => {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <div id="drum-machine"> 
      <div id="pad-bank"> 
        {bank.map((pad) => ( 
          <button 
            key={pad.key} 
            className="drum-pad" 
            id={pad.id} 
            onClick={() => playSound(pad.key)} 
          > 
            {pad.key} 
            <audio className="clip" id={pad.key} src={pad.src}></audio> 
          </button> 
        ))} 
      </div> 
      <p id="display">Drum Machine</p> 
    </div>
  );
}
