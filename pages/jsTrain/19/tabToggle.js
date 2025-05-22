// ! get elements from dom
const $ = document;
const tabs = $.querySelectorAll(".TabToggle-tabs-item");
const tabsContent = $.querySelectorAll(".TabToggle-contents-item");

// ? find active tab
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => {
      item.classList.remove("active");
    });
    tabsContent.forEach((content) => {
      content.classList.remove("active");
      if (content.id === tab.dataset.id) {
        tab.classList.add("active");
        content.classList.add("active");
      }
    });
  });
});
