/* Build a Drum Machine / 26.02.2026 */

console.log("js loaded");

const pads = document.querySelectorAll(".drum-pad");

pads.forEach(pad => {
    pad.addEventListener("click", () => {
        const audio = pad.querySelector("audio");
        audio.currentTime = 0;
        audio.play();
    });
});