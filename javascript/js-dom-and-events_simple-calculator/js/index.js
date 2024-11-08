console.clear();

const operand1 = 20;
const operand2 = 4;

/*
Mathematical operations
*/
const addButton = document.querySelector('[data-js="add"]');
const subtractButton = document.querySelector('[data-js="subtract"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const divideButton = document.querySelector('[data-js="divide"]');
const exponentButton = document.querySelector('[data-js="exponent"]');
const moduloButton = document.querySelector('[data-js="modulo"]');

addButton.addEventListener("click", () => {
  const sum = operand1 + operand2; // 1. Add the two operands and store the result in a variable. Log the variable's value to the console.
  console.log(sum);
});

subtractButton.addEventListener("click", () => {
  const subtract = operand1 - operand2; // 2. Subtract the two operands and store the result in a variable. Log the variable's value to the console.
  console.log(subtract);
});

multiplyButton.addEventListener("click", () => {
  const multiply = operand1 * operand2;
  console.log(multiply); // 3. Multiply the two operands and store the result in a variable. Log the variable's value to the console.
});

divideButton.addEventListener("click", () => {
  const divide = operand1 / operand2;
  console.log(divide); // 4. Divide the two operands and store the result in a variable. Log the variable's value to the console.
});

exponentButton.addEventListener("click", () => {
  const raise = operand1 ** operand2;
  console.log(raise); // 5. Raise "operand1" to the value of "operand2" and store the result in a variable. Log the variable's value to the console.
});

moduloButton.addEventListener("click", () => {
  const remainder = operand1 % operand2;
  console.log(remainder);
  // 6. Calculate the remainder when dividing "operand1" by "operand2" and store the result in a variable. Log the variable's value to the console.
});

/*
Update the first operand

Please don't forget to think about the declaration of the variable "operand1".
*/
const increaseByOneButton = document.querySelector(
  '[data-js="increase-by-one"]'
);
const increaseByFiveButton = document.querySelector(
  '[data-js="increase-by-five"]'
);
const decreaseByOneButton = document.querySelector(
  '[data-js="decrease-by-one"]'
);
const decreaseByFiveButton = document.querySelector(
  '[data-js="decrease-by-five"]'
);
const multiplyByTwoButton = document.querySelector(
  '[data-js="multiply-by-two"]'
);
const divideByTwoButton = document.querySelector('[data-js="divide-by-two"]');

increaseByOneButton.addEventListener("click", () => {
  const operand1Plus1 = operand1 + 1;
  console.log(operand1Plus1);
  // 7. Increase the value of "operand1" by 1. Log the new value to the console.
});

increaseByFiveButton.addEventListener("click", () => {
  const operand1Multiplied5 = operand1 * 5;
  console.log(operand1Multiplied5);
  // 8. Increase the value of "operand1" by 5. Log the new value to the console.
});

decreaseByOneButton.addEventListener("click", () => {
  const operand1DecreaseOne = operand1 - 1;
  console.log(operand1DecreaseOne);
  // 7. Decrease the value of "operand1" by 1. Log the new value to the console.
});

decreaseByFiveButton.addEventListener("click", () => {
  const operand1DecreaseFive = operand1 - 5;
  console.log(operand1DecreaseFive);
  // 8. Decrease the value of "operand1" by 5. Log the new value to the console.
});

multiplyByTwoButton.addEventListener("click", () => {
  const operand1Multiplied2 = operand1 * 2;
  console.log(operand1Multiplied2);
  // 11. Multiply the value of "operand1" by 2. Log the new value to the console.
});

divideByTwoButton.addEventListener("click", () => {
  const operand1Divided2 = operand1 / 2;
  console.log(operand1Divided2);
  // 12. Divide the value of "operand1" by 2. Log the new value to the console.
});
