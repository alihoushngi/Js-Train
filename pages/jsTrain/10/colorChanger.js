// ? get items from dom
const buttons = document.querySelectorAll("button");
const image = document.querySelector(".theme-card-header-image");
const title = document.querySelector(".theme-card-header-title");
const social = document.querySelectorAll(".theme-card-header-social-item");

// ! find color changer button
buttons.forEach((item) => {
  // * when client click on color button
  item.addEventListener("click", () => {
    // get colors from button dataset
    const color = item.dataset.color;
    // todo change colors item
    image.style.borderColor = `${color}`;
    title.style.color = `${color}`;
    social.forEach((items) => {
      items.style.backgroundColor = `${color}`;
    });
  });
});
