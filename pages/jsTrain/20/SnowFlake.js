// ! get document for assign snow flake
document.addEventListener("click", (e) => {
  let snowFlake = document.createElement("span");
  snowFlake.className = "snow";
  snowFlake.style.left = `${e.offsetX}px`;
  snowFlake.style.top = `${e.offsetY}px`;
  let randomNumberForSnow = Math.random() * (200 - 50) + 50;
  snowFlake.style.width = `${randomNumberForSnow}px`;
  snowFlake.style.height = `${randomNumberForSnow}px`;
  document.body.appendChild(snowFlake);
});
