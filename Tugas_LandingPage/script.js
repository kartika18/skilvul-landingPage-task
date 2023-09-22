function handleGetFormData() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let city = document.getElementById("city").value;
  let zipCode = document.getElementById("zip-code").value;
  let status = document.getElementById("status").checked;

  return { name, email, city, zipCode, status };
}

function isNumber(str) {
  return !isNaN(str);
}

function checkboxIsChecked() {
  let checkBoxStatus = document.getElementById("status");

  if (checkBoxStatus.checked) {
    return true;
  } else {
    return false;
  }
}

function validateFormData(formData) {
  if (
    formData.name !== null &&
    formData.email !== null &&
    formData.city !== null &&
    isNumber(formData.zipCode) &&
    checkboxIsChecked()
  ) {
    return true;
  } else {
    return false;
  }
}

function submit() {
  const formData = handleGetFormData();
  if (validateFormData(formData)) {
    document.getElementById("warning").textContent = "";
  } else {
    document.getElementById("warning").textContent =
      "Periksa form anda sekali lagi";
  }
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  submit();
});
