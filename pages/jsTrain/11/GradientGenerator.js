// ! get element from dom
// inputs
const firstInput = document.querySelector("#firstColor");
const secondInput = document.querySelector("#secondColor");
// labels
const firstColorLabel = document.querySelector("#firstColorLabel");
const secondColorLabel = document.querySelector("#secondColorLabel");
// directions
const directions = document.querySelectorAll(
  ".colorGenerator-directions-arrow"
);
// buttons
const generateButton = document.querySelector("#generateButton");
const copyButton = document.querySelector("#copyButton");
// style area
const styleArea = document.querySelector("#styleArea");

// ? functions
let firstColor = null;
let secondColor = null;
let rotation = "to top";

// * first input change handler
firstInput.addEventListener("change", (e) => {
  firstColor = e.target.value;
  firstColorLabel.textContent = e.target.value;
  firstColorLabel.style.color = `${e.target.value}`;
});

// * second input change handler
secondInput.addEventListener("change", (e) => {
  secondColor = e.target.value;
  secondColorLabel.textContent = e.target.value;
  secondColorLabel.style.color = `${e.target.value}`;
});

// * directions input change handler
directions.forEach((item) => {
  item.addEventListener("click", (direct) => {
    rotation = direct.target.dataset.rotate;
  });
});

// todo check the color and direction to style body

generateButton.addEventListener("click", () => {
  if (firstColor != null && secondColor != null) {
    document.body.style = `background-image: linear-gradient(${rotation}, ${firstColor} , ${secondColor});`;
    styleArea.textContent = `background-image: linear-gradient(${rotation}, ${firstColor} , ${secondColor});`;
    generateButton.textContent = "Color Generated";
    generateButton.style.backgroundColor = "green";
  } else {
    generateButton.textContent = "Select Colors";
    generateButton.style.backgroundColor = "red";
  }
});

// ? copy button click handler
copyButton.addEventListener("click", () => {
  if (styleArea.innerHTML != "") {
    navigator.clipboard.writeText(styleArea.innerHTML);
    copyButton.textContent = "Copied";
    copyButton.style.backgroundColor = "green";
  } else {
    copyButton.textContent = "Generate Gradient";
    copyButton.style.backgroundColor = "red";
  }
});
