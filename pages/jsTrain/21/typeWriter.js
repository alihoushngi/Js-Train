// ? get elements from dom
const $ = document;
const text = $.querySelector("#text");

// * functions for type writer
const myText = "Im Ali Houshangi , Frontend Developer ";
let index = 0;

const typeWriter = () => {
  if (index < myText.length) {
    text.innerHTML += myText[index];
    index++;
  }

  setTimeout(() => {
    typeWriter();
  }, 200);
};

typeWriter();
