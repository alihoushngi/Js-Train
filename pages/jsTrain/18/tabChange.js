// ! get elements from dom
const $ = document;
let statusText = $.querySelector("#status");

// ? detect visibility
$.addEventListener("visibilitychange", () => {
  if ($.visibilityState === "visible") {
    document.title = "تعویض تب با جاوااسکریپت ( در دسترس )";
  } else {
    document.title = "تعویض تب با جاوااسکریپت ( خارج از دسترس )";
    statusText.textContent = "Failed";
    statusText.classList.add("TabChange-text-failed");
  }
});
