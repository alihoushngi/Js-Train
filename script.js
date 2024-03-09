// ! get data for project list from cards.json
const pages = async () => {
  try {
    let response = await fetch("./assets/data/cards.json");
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
                <img src="./assets/images/tumbnail.jpg" width="200" alt="${element.title}" class="project-card-image">
            </div>
            <div class="project-card-content">
                <span>${element.category}</span>
                <h3 class="project-card-title">${element.title}</h3>
                <p class="project-card-desc">${element.description}</p>
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
