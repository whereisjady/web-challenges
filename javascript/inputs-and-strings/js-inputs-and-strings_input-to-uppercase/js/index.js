console.clear();
const firstInput = document.querySelector('[data-js="first-input"]');
const buttonElement = document.querySelector('[data-js="button-uppercase"]');

buttonElement.addEventListener("click", () => {
  console.log("button clicked", firstInput.value);
  firstInput.value = firstInput.value.toUpperCase();
});
