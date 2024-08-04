// ! select element from dom
let formSelect = document.querySelector("#countries");
let formTitle = document.querySelector(".countries-title");
let titleIcon = document.querySelector(".countries-title-icon");
let searchInput = document.querySelector("#countries-search");
let itemsWrapper = document.querySelector(".countries-wrapper");
let listVisibility = false;
let countriesList = [];

// ? fetch data from json file
const countriesName = async () => {
  try {
    let response = await fetch("../../../assets/data/countries.json");
    let countData = response.json();
    return countData;
  } catch (error) {
    throw new Error(error);
  }
};

// * create remove icon
const removeItem = `<img src="./assets/remove.png" alt="selection arrow icon" class="countries-title-icon" id="removeButton">`;
// * create opener icon
const listOpener = `<img src="./assets/arrow-down.png" alt="selection arrow icon" class="countries-title-icon">`;

// todo create items
countriesName()
  .then((items) => {
    countriesList.push(items);
    let countHtml = "";
    items.forEach((item) => {
      countHtml += `
        <h5 value="${item.name}" class="countries-wrapper-list-item" id="countries-item">${item.name}</h5>
        `;
    });
    formSelect.innerHTML = countHtml;
    // * items onclick handler
    const countryItem = document.querySelectorAll("#countries-item");
    countryItem.forEach((selection) => {
      selection.addEventListener("click", (e) => {
        console.log(e.target.textContent);
        formTitle.textContent = e.target.textContent;
      });
    });
  })
  .catch((error) => {
    console.log(error);
  });

// ? show items when click on select country
formTitle.addEventListener("click", () => {
  listVisibility = !listVisibility;
  if (!listVisibility) {
    itemsWrapper.style.display = "none";
    titleIcon.classList.remove("iconRotate");
  } else {
    itemsWrapper.style.display = "block";
    titleIcon.classList.add("iconRotate");
  }
});

searchInput.addEventListener("keyup", (e) => {
  const query = e.target.value.toUpperCase();

  if (query.length > 2) {
    let zoneName = [];
    let searchedHtml = "";
    countriesList.filter((country) => {
      return country.some((zone) => {
        if (zone.name.toUpperCase().includes(query)) {
          zoneName.push(zone.name);
        }
      });
    });
    zoneName.forEach((item) => {
      searchedHtml += `
          <h5 value="${item}" class="countries-wrapper-list-item" id="countries-item">${item}</h5>
          `;
    });
    formSelect.innerHTML = searchedHtml;
  }
});
