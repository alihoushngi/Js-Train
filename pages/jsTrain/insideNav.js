// menu items
const navList = [
  { name: "صفحه اصلی", link: "/" },
  { name: "جاوا اسکریپت", link: "/pages/jsTrain/js.html" },
  // { name: "React", link: "#" },
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
    route.includes(item.link) && item.link === "js.html"
      ? "class=activeRoute"
      : null
  } >
      ${item.name}
    </a>
  </li>
  `;

  navbar.innerHTML = customHtml;
});
