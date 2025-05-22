// menu items
const navList = [
  { name: "صفحه اصلی", link: "/" },
  { name: "جاوا اسکریپت", link: "./pages/jsTrain/js.html" },
  { name: "ریکت", link: "./pages/React/react.html" },
  // { name: "نکست", link: "#" },
];

const navbar = document.querySelector("#nav-list");
const route = window.location.pathname;

let customHtml = "";

navList.forEach((item, index) => {
  customHtml += `
    <li key="${index}" class="navbar-category-item" >
    <a href="${item.link}" ${
    route.includes(item.link) && item.link !== "js.html"
      ? "class=activeRoute"
      : null
  } >
        ${item.name}
        </a>
    </li>
    `;

  navbar.innerHTML = customHtml;
});
