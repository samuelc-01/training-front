import { controls, playBtn, pauseBtn, timerBtn, stopBtn } from "./elements.js";
import * as FocusTimer from "./index.js";

export function registerControls() {
  controls.addEventListener("click", (event) => {
    const target = event.target.closest("button");
    if (!target) return;
    if (target.classList.contains("ph-play-circle")) {
      FocusTimer.start();
    } else if (target.classList.contains("ph-pause-circle")) {
      FocusTimer.pause();
    } else if (target.classList.contains("ph-stop-circle")) {
      FocusTimer.stop();
    } else if (target.classList.contains("ph-timer")) {
      const min = prompt("Defina os minutos para o timer:", "25");
      if (min !== null && !isNaN(min) && min > 0) {
        FocusTimer.set(Number(min));
      }
    }
  });
}

registerControls();
