// ? get elements from dom
const input = document.querySelector("#password");
const error = document.querySelector("#error");

// ! detect caps lock
input.addEventListener("keyup", (e) => {
  let capsLock = e.getModifierState("CapsLock");
  if (capsLock) {
    error.style.display = "inline";
  } else {
    error.style.display = "none";
  }
});
