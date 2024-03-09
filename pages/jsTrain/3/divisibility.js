//! Printing words relative to the divisibility of numbers.
// get numbers , button and result section from document
const number1 = document.querySelector("#num1");
const number2 = document.querySelector("#num2");
const submitNumberButton = document.querySelector("#number-button");
const numberResult = document.querySelector("#number-result");

// Playability of numbers function
const playabilityNumbers = (e) => {
  e.preventDefault();
  const res = parseInt(number1.value) % parseInt(number2.value);
  if (res === 0) {
    numberResult.innerHTML = `
    <pre>
    Your number is Divisible
    </pre>
    `;
    console.log("3 :", "Your number is Divisible");
  } else {
    numberResult.innerHTML = `
    <pre>
    Your number is Indivisible
    </pre>
    `;
    console.log("3 :", "Your number is Indivisible");
  }
};

// add event for my button
submitNumberButton.addEventListener("click", playabilityNumbers);
//! end
