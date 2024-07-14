// ! get eyes from dom
const firstEye = document.querySelector("#eye1");
const secondEye = document.querySelector("#eye2");

// ? get inputs from form
const userName = document.querySelector("#userName");
const password = document.querySelector("#password");

// * username focus and blur
userName.addEventListener("focus", () => {
  firstEye.style.paddingTop = "1rem";
  secondEye.style.paddingTop = "1rem";
  firstEye.style.left = "50px";
  secondEye.style.left = "150px";
});

userName.addEventListener("blur", () => {
  firstEye.style.paddingTop = "0";
  secondEye.style.paddingTop = "0";
  firstEye.style.left = "75px";
  secondEye.style.left = "170px";
});

// * password focus and blur
password.addEventListener("focus", () => {
  firstEye.style.top = "75px";
  secondEye.style.top = "75px";
});

password.addEventListener("blur", () => {
  firstEye.style.top = "95px";
  secondEye.style.top = "95px";
});

// event listener for when input have value
userName.addEventListener("input", (e) => {
  const inputBox = e.target.value;
  let firstEyePosition = 50;
  let secondEyePosition = 150;
  for (let i = 0; i < inputBox.length; i++) {
    firstEyePosition += 1;
    secondEyePosition += 1;
    firstEye.style.left = `${firstEyePosition}px`;
    secondEye.style.left = `${secondEyePosition}px`;
  }
});
