// menu items
const navList = [
  { name: "JavaScript", link: "js.html" },
  { name: "React", link: "#" },
  { name: "Next", link: "#" },
];

const navbar = document.querySelector("#nav-list");

let customHtml = "";
// get route
const route = window.location.pathname;

navList.forEach((item, index) => {
  customHtml += `
  <li key="${index}" class="navbar-category-item" >
    <a href="${item.link}" ${route.includes(item.link) && "class=activeRoute"} >
      ${item.name}
    </a>
  </li>
  `;

  navbar.innerHTML = customHtml;
});

// ! get data for project list from cards.json
const pages = async () => {
  try {
    let response = await fetch("../../assets/data/jsTrains.json");
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
      <div class="project-card">
            <div class="project-card-image-wrapper">
                <img src=${element.imageUrl} width="200" alt="${element.title}" class="project-card-image">
            </div>
            <div class="project-card-content">
                <span class="project-card-category">${element.category}</span>
                <h3 class="project-card-title">${element.title}</h3>
                <div class="project-card-button-wrapper">
                    <a href="${element.link}" class="project-card-button-link">
                        <button class="project-card-button">see project</button>
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
