// ! get elements from dom
const $ = document;
const searchInput = $.querySelector("#searchInput");
const searchButton = $.querySelector("#searchButton");
const response = $.querySelector("response");

// * create array and html
let myHtml = "";

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

// ? search handler
searchButton.addEventListener("click", () => {
  if (searchInput.value !== "") {
    let searchValue = searchInput.value;
    fetch(`${url}${searchValue}`)
      .then((res) => res.json())
      .then((data) => {
        let items = data[0];

        console.log(items);
        response.innerHTML = `
        <div>
            <h4>white</h4>
            
        </div>
        `;
      });
  } else {
    window.alert("لطفا مقداری را وارد کنید");
  }
});
