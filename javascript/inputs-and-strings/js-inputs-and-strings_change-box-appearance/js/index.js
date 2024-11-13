console.clear();
const box = document.querySelector("[data-js=box]");
const inputColor = document.querySelector("[data-js=input-color]");
const inputRadius = document.querySelector("[data-js=input-radius]");
const inputRotation = document.querySelector("[data-js=input-rotation]");

inputColor.addEventListener("input", () => {
  const hue = inputColor.value;
  box.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
});

inputRadius.addEventListener("input", () => {
  const radiusValue = inputRadius.value;
  box.style.borderRadius = `${radiusValue}%`;
});
