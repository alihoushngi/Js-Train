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
