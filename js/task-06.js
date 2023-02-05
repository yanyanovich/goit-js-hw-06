const validationInput = document.querySelector("#validation-input");
validationInput.addEventListener("blur", (e) => {
  if (validationInput.value.length === Number(validationInput.dataset.length)) {
    if (validationInput.classList.contains("invalid")) {
      validationInput.classList.remove("invalid");
    }
    validationInput.classList.add("valid");
  } else {
    if (validationInput.classList.contains("valid")) {
      validationInput.classList.remove("valid");
    }
    validationInput.classList.add("invalid");
  }
  // return validationInput.classList.add("invalid");
});
