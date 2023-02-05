let fontSizeControl = document.querySelector("#font-size-control");
let textEl = document.querySelector("#text");
fontSizeControl.addEventListener("input", (e) => {
  textEl.style.fontSize = `${e.currentTarget.value}px`;
});
