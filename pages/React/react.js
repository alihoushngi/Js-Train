// menu items
const navList = [
  { name: "صفحه اصلی", link: "/" },
  { name: "جاوا اسکریپت", link: "../jsTrain/js.html" },
  { name: "ریکت", link: "react.html" },
  // { name: "Next", link: "#" },
];

const navbar = document.querySelector("#nav-list");

let customHtml = "";
// get route
const route = window.location.pathname;

navList.forEach((item, index) => {
  customHtml += `
  <li key="${index}" class="navbar-category-item" >
    <a href="${item.link}" ${
    route.includes(item.link) && item.link === "react.html"
      ? "class=activeRoute"
      : null
  } >
      ${item.name}
    </a>
  </li>
  `;

  navbar.innerHTML = customHtml;
});

// ! get data for project list from cards.json
const pages = async () => {
  try {
    let response = await fetch("../../assets/data/reactTrain.json");
    let data = response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

// ? Render page element with response fetch from json file
pages()
  .then((data) => {
    let html = "";

    data.forEach((element) => {
      html += `
      <div class="project-card" id="reactCard">
            <div class="project-card-image-wrapper">
                <img src=${element.imageUrl} width="200" alt="${element.englandTitle}" class="project-card-image">
            </div>
            <div class="project-card-content">
                <span class="project-card-category">${element.category}</span>
                
                <h3 class="project-card-title">${element.persianTitle}</h3>
                <div class="project-card-button-wrapper">
                    <a href="${element.link}" class="project-card-button-link">
                        <button class="project-card-button">مشاهده پروژه</button>
                    </a>
                </div>
            </div>
        </div>
        `;
    });

    document.querySelector("#project-list").innerHTML = html;
  })
  .catch((error) => {
    console.log(error);
  });
