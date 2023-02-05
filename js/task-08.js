const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;
  if (email.value === "" || password.value === "")
    alert("Всі поля повинні бути заповнені");
  console.log(`Login: ${email.value}, Password: ${password.value}`);
  e.currentTarget.reset();
});
