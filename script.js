// menu items
const navList = [
  { name: "JavaScript", link: "./pages/jsTrain/js.html" },
  { name: "React", link: "#" },
  { name: "Next", link: "#" },
];

const navbar = document.querySelector("#nav-list");

let customHtml = "";

navList.forEach((item, index) => {
  customHtml += `
    <li key="${index}" class="navbar-category-item">
        <a href="${item.link}">
        ${item.name}
        </a>
    </li>
    `;

  navbar.innerHTML = customHtml;
});
