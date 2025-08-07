let randomNumber = Math.floor(Math.random() * 11);
let xAttempts = 1;

const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const screen2h2 = document.querySelector(".screen2 h2");
const inputNumber = document.querySelector("#inputNumber");

function handleTryClick(event) {
  event.preventDefault();
  const value = Number(inputNumber.value);
  if (isNaN(value) || value < 0 || value > 10) {
    alert("Por favor, digite um número entre 0 e 10.");
    inputNumber.value = '';
    inputNumber.focus();
    return;
  }
  if (value === randomNumber) {
    toggleScreen();
    screen2h2.innerText = `Acertou em ${xAttempts} tentativa${xAttempts > 1 ? 's' : ''}!`;
  } else {
    xAttempts++;
    inputNumber.value = '';
    inputNumber.focus();
  }
}

function handleResetClick() {
  toggleScreen();
  xAttempts = 1;
  randomNumber = Math.floor(Math.random() * 11);
  inputNumber.value = '';
  inputNumber.focus();
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  }
});
