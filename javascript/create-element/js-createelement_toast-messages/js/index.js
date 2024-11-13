console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  const newToastMessage = document.createElement("li");
  toastContainer.appendChild(newToastMessage);
  newToastMessage.textContent = "This is a new toast message";
  // Exercise: Append a new entry to the toast messages container
});

clearButton.addEventListener("click", (event) => {
  event.preventDefault();
  toastContainer.innerHTML = " ";
  // Exercise: Clear the stack of toast messages
});
