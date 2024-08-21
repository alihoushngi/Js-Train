// ! get element from dom
const $ = document;
const imageWrapper = $.querySelector("#zoomWrapper");
const image = $.querySelector(".zoom-image");

// ? function for hover image
imageWrapper.addEventListener("mousemove", (e) => {
  let xPos = e.clientX - e.target.offsetLeft;
  let yPos = e.clientY - e.target.offsetTop;
  image.style.transformOrigin = `${xPos}px ${yPos}px`;
  image.style.transform = "scale(2)";
  image.style.cursor = "zoom-in";
});

imageWrapper.addEventListener("mouseleave", () => {
  image.style.transformOrigin = "center";
  image.style.transform = "scale(1)";
});
