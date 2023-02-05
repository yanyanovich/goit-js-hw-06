const validationInput = document.querySelector("#validation-input");
validationInput.addEventListener("blur", (e) => {
  if (validationInput.value.length === Number(validationInput.dataset.length)) {
    validationInput.classList.remove("invalid");
    return validationInput.classList.add("valid");
  }
  return validationInput.classList.add("invalid");
});
