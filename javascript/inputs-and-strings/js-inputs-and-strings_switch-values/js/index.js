console.clear();

const firstInput = document.querySelector('[data-js="first-input"]');
const secondInput = document.querySelector('[data-js="second-input"]');

const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const lowercaseButton = document.querySelector('[data-js="button-lowercase"]');

const swapButton = document.querySelector('[data-js="swap-button"]');

// first button
uppercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toUpperCase();
});

lowercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toLowerCase();
});

// second button
uppercaseButton.addEventListener("click", () => {
  secondInput.value = secondInput.value.toUpperCase();
});

lowercaseButton.addEventListener("click", () => {
  secondInput.value = secondInput.value.toLowerCase();
});

// swap button

swapButton.addEventListener("click", () => {
  const tempValue = firstInput.value;
  firstInput.value = secondInput.value;
  secondInput.value = tempValue;
});
