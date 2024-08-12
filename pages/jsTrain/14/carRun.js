// ? get elements from dom
const $ = document;
const road = $.querySelector(".carRun-Road");
const carWrapper = $.querySelector(".carRun-car-wrapper");
const car = $.querySelector(".carRun-car-image");

// ! flag for start and end moving
let move = false;

// todo flag for turn on and off lights
let light = false;

document.addEventListener("keypress", (e) => {
  // * control move
  if (e.key == "Enter" && !move) {
    move = true;
    road.style.animation = "road 4s linear infinite";
    carWrapper.style.animation = "car 1s linear infinite";
  } else if (e.key == "Enter" && move) {
    move = false;
    road.style.animation = "unset";
    carWrapper.style.animation = "unset";
  }
  // * control light
  if (e.key == "l" && !light) {
    light = true;
    car.src = "./assets/car.png";
    car.width = "155";
  } else if (e.key == "l" && light) {
    light = false;
    car.src = "./assets/car-light.png";
    car.width = "250";
  }
});
