function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const colorEl = document.querySelector(".color");

const changeColorButton = document.querySelector(".change-color");

changeColorButton.addEventListener("click", (e) => {
  console.log(getRandomHexColor());
  document.body.style.backgroundColor = getRandomHexColor();
  colorEl.textContent = document.body.style.backgroundColor;
});
