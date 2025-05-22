// ! get data from dom
const $ = document;
const menuItems = $.querySelectorAll(".menu-item");
const light = $.querySelector("#light");

// ? find items width and move light
menuItems.forEach((item) => {
  item.addEventListener("mousemove", (e) => {
    let margin = e.target.offsetLeft;
    let width = e.target.offsetWidth;
    light.style.width = `${width}px`;
    light.style.left = `${margin}px`;
  });
});
