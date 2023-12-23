const inputs = document.querySelectorAll("input");

const errorDiv = document.querySelector("#error");

const errorMessages = document.querySelectorAll(".error-text");

const btn = document.querySelector("button");

let currentYear = new Date().getFullYear();

const evaluate = () => {
  let allValues = [];
  inputs.forEach((input) => allValues.push(input.value));
  let isEmpty = allValues.some((value) => value === "");
  if (isEmpty) {
    errorDiv.classList.add("error-div");
    errorMessages.forEach((messg) => (messg.textContent = "This field is required"));
  }

  if (Number(inputs[0].value) > 31) {
    errorDiv.classList.add("error-div");
    errorMessages[0].textContent = "Must be a valid day";
  } else if (Number(inputs[0].value) === 31) {
    errorDiv.classList.remove("error-div");
    errorMessages.forEach((messg) => (messg.textContent = ""));

    switch (Number(inputs[1].value)) {
      case 4:
        errorDiv.classList.add("error-div");
        errorMessages[0].textContent = "Must be a valid date";
        break;

      case 6:
        errorDiv.classList.add("error-div");
        errorMessages[0].textContent = "Must be a valid date";
        break;

      case 9:
        errorDiv.classList.add("error-div");
        errorMessages[0].textContent = "Must be a valid date";
        break;

      case 11:
        errorDiv.classList.add("error-div");
        errorMessages[0].textContent = "Must be a valid date";
        break;
    }
  }

  if (Number(inputs[1].value) > 12) {
    errorDiv.classList.add("error-div");
    errorMessages[1].textContent = "Must be a valid month";
  }

  if (Number(inputs[2].value) > currentYear) {
    errorDiv.classList.add("error-div");
    errorMessages[2].textContent = "Must be in the past";
  }
};

btn.addEventListener("click", evaluate);
