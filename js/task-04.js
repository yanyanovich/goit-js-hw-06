let counterValue = 0;
const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementtButton = document.querySelector(
  'button[data-action="increment"]'
);
const valueEl = document.querySelector("#value");
valueEl.innerHTML = counterValue;
decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  valueEl.innerHTML = counterValue;
});
incrementtButton.addEventListener("click", () => {
  counterValue += 1;
  valueEl.innerHTML = counterValue;
});
