const inputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");
nameOutputEl.innerHTML = "Anonymous";
inputEl.addEventListener("input", (e) => {
  nameOutputEl.innerHTML = e.currentTarget.value;
  if (inputEl.value === "") nameOutputEl.innerHTML = "Anonymous";
});
