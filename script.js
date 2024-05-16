const validateEmail = function (email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(String(email).toLowerCase());
};

const handleSubmit = function (e) {
  e.preventDefault();
  const emailInput = document.getElementById("emailInput");
  const errorMsg = document.querySelector(".error-msg");

  if (emailInput.value === "" || !validateEmail(emailInput.value)) {
    errorMsg.textContent = "Please provide a valid email address";
    errorMsg.classList.remove("hidden");
  } else {
    errorMsg.textContent = "";
    errorMsg.classList.add("hidden");
    alert("email is valid");
  }
};

const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
