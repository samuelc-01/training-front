import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { notNumber, imc } from "./utils.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#inputWeight");
const inputHeight = document.querySelector("#inputHeight");

inputWeight.oninput = () => AlertError.close();
inputHeight.oninput = () => AlertError.close();

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const heightOrWeightIsNotANumber = notNumber(weight) || notNumber(height);

  if (heightOrWeightIsNotANumber) {
    AlertError.open();
    return;
  }
  AlertError.close();

  const result = imc(weight, height);
  showResultMessage(result);
};

function showResultMessage(result) {
  const message = `Seu IMC é de ${result}`;
  Modal.message.innerText = message;
  Modal.open();
}

Modal.buttonClose.onclick = () => Modal.close();

window.addEventListener("keydown", handleEscClick);

function handleEscClick(event) {
  if (event.key == "Escape") {
    Modal.close();
  }
}
