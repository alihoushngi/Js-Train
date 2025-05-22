// ! select element from dom
let formSelect = document.querySelector("#countries");
let formTitle = document.querySelector(".countries-title");
let titleIcon = document.querySelector(".countries-title-icon");
let searchInput = document.querySelector("#countries-search");
let itemsWrapper = document.querySelector(".countries-wrapper");
let countriesList = [];

// ? fetch data from json file
fetch("../../../assets/data/countries.json")
  .then((item) => item.json())
  .then((res) => {
    countriesList.push(res);
    countriesList.forEach((element) => {
      let countHtml = "";
      element.forEach((item) => {
        countHtml += `
        <h5 onclick="updateName(this)" value="${item.name}" class="countries-wrapper-list-item" id="countries-item">${item.name}</h5>
        `;
      });
      formSelect.innerHTML = countHtml;
    });
  });

// ? open list when onclick
formTitle.addEventListener("click", () => {
  if (itemsWrapper.style.display != "block") {
    itemsWrapper.style.display = "block";
    titleIcon.classList.add("iconRotate");
  } else {
    itemsWrapper.style.display = "none";
    titleIcon.classList.remove("iconRotate");
  }
});

// todo update form title name
const updateName = (el) => {
  // ? close list
  itemsWrapper.style.display = "none";
  titleIcon.classList.remove("iconRotate");

  // * form title update
  formTitle.textContent = el.textContent;

  // ? add active class to item
  const options = document.querySelectorAll("#countries-item");
  for (let option of options) {
    if (option.innerHTML === el.innerHTML) {
      option.classList.add("selected-country");
    } else {
      option.classList.remove("selected-country");
    }
  }
};

// handel search input
searchInput.addEventListener("keyup", (e) => {
  const searchedValue = e.target.value.toUpperCase();

  let zoneName = [];
  let searchedHtml = "";
  countriesList.filter((country) => {
    return country.some((zone) => {
      if (zone.name.toUpperCase().startsWith(searchedValue)) {
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
});
