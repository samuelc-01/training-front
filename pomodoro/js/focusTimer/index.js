import state from "./state.js";
import { minutesEl, secondsEl } from "./elements.js";

function updateDisplay() {
  minutesEl.textContent = String(state.minutes).padStart(2, '0');
  secondsEl.textContent = String(state.seconds).padStart(2, '0');
}

function tick() {
  if (!state.isRunning) return;
  if (state.minutes === 0 && state.seconds === 0) {
    stop();
    return;
  }
  if (state.seconds === 0) {
    state.minutes--;
    state.seconds = 59;
  } else {
    state.seconds--;
  }
  updateDisplay();
}

export function start(minutes = state.minutes, seconds = state.seconds) {
  if (state.isRunning) return;
  state.minutes = minutes;
  state.seconds = seconds;
  state.isRunning = true;
  updateDisplay();
  state.timerId = setInterval(tick, 1000);
}

export function pause() {
  state.isRunning = false;
  clearInterval(state.timerId);
}

export function stop() {
  state.isRunning = false;
  clearInterval(state.timerId);
  state.minutes = 25;
  state.seconds = 0;
  updateDisplay();
}

export function set(minutes) {
  state.minutes = minutes;
  state.seconds = 0;
  updateDisplay();
}

export function getState() {
  return state;
}

export function updateTimerDisplay() {
  updateDisplay();
}
