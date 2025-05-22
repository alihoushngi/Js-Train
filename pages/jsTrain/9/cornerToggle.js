// ? get element from dom
const toggleButton = document.querySelector("#toggleButton");
const menuItems = document.querySelectorAll(".corner-menu a");

// ! create state
let isOpen = false;

// todo toggle control
toggleButton.addEventListener("click", () => {
  isOpen = !isOpen;
  if (isOpen) {
    toggleButton.classList.add("toggleActive");
    menuItems[0].style.transform = "translate(12px , -50px)";
    menuItems[1].style.transform = "translate(48px , -35px)";
    menuItems[2].style.transform = "translate(62px , 2px)";
    menuItems[3].style.transform = "translate(46px , 38px)";
    menuItems[4].style.transform = "translate(9px , 50px)";
    menuItems[5].style.transform = "translate(-27px , 33px)";
  } else {
    toggleButton.classList.remove("toggleActive");
    menuItems.forEach((item) => (item.style.transform = "translate(0 , 0)"));
  }
});
