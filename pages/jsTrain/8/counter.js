// ? get data from dom
const counterSection = document.querySelector("#counterSection");
const counterPosition = counterSection.scrollHeight;
const $ = document;
let startCounter = false;

// * get items number section from dom
const itemsNumber = $.querySelectorAll(".counter-item-number");

// ! find current scroll
window.addEventListener("scroll", () => {
  if (window.scrollY >= counterPosition) {
    if (!startCounter) {
      itemsNumber.forEach((counter) => setCounter(counter));
    }
    startCounter = true;
  }
});

// todo counter function
function setCounter(element) {
  let elementNumberCount = element.dataset.count;

  let counterInterval = setInterval(() => {
    if (element.textContent == elementNumberCount) {
      clearInterval(counterInterval);
    }

    element.textContent++;
  }, 20);
}
