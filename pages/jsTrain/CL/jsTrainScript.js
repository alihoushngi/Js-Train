//! Find the largest number and the smallest number
//? create array
const numberArray = [1, 7, 4, 2, 3, 0, 5, 9, 6];

//? sort array
const sortedArray = numberArray.sort();

//? log for first index of array and last index of array
console.log("1 : ", sortedArray[0], sortedArray[sortedArray.length - 1]);
//! end

//! Checking whether the image is vertical or horizontal
//? get image from document
const image = document.querySelector("#test_image");

//? image width and height
const imageWidth = image.clientWidth;
const imageHeight = image.clientHeight;

//? check width and height
if (imageWidth > imageHeight) {
  console.log("2 : ", "vertical");
} else {
  console.log("2 : ", "horizontal");
}

//! end

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

//! Checking whether the number is even or odd.
// get number , button and result section from document
const oddNumber = document.querySelector("#oddNum1");
const oddSubmitNumberButton = document.querySelector("#oddNumber-button");
const oddNumberResult = document.querySelector("#oddNumber-result");

// Checking whether the number is even or odd function
const oddNumbers = (e) => {
  e.preventDefault();
  const oddRes = parseInt(oddNumber.value) % 2;
  if (oddRes === 0) {
    oddNumberResult.innerHTML = `
    <pre>
    Your number is Even
    </pre>
    `;
    console.log("4 :", "Your number is Even");
  } else {
    oddNumberResult.innerHTML = `
    <pre>
    Your number is Odd
    </pre>
    `;
    console.log("4 :", "Your number is Odd");
  }
};

// add event for my button
oddSubmitNumberButton.addEventListener("click", oddNumbers);
//! end
