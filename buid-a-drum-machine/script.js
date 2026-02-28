/* Build a Drum Machine / 26.02.2026 */

// console.log("js loaded");

const pads = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");

// クリックで音を鳴らす
pads.forEach(pad => {
    pad.addEventListener("click", () => {
        playSound(pad.querySelector("audio"));
        display.innerText = pad.id;
    });
});

// キーボードで音を鳴らす
document.addEventListener("keydown", (e) => {
    const key = e.key.toUpperCase();
    const audio = document.getElementById(key);

    if (audio) {
        const pad = audio.parentElement;
        playSound(audio);
        display.innerText = pad.id;
    }
});

// 音を鳴らす共通関数
function playSound(audio) {
    audio.currentTime = 0;
    audio.play();
}