// ! get element from dom
const $ = document;
const input = $.querySelector(".textMark-Search-Input");
const button = $.querySelector(".textMark-Search-Button");
const text = $.querySelector(".textMark-text");

// ? Search Handel
button.addEventListener("click", () => {
  const value = input.value;
  // * Create Regex
  const nameRegex = new RegExp(`${value}`, "g");
  text.innerHTML = text.textContent.replace(
    nameRegex,
    (item) => `<mark>${item}</mark>`
  );
});
