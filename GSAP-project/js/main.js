import "../js/array";

const DOMSelectors = {
  cards: document.querySelector(".cards"),
  search: document.getElementById("search"),
};

function defaultCardGenerate(filterAtractions) {
  filterAttractions.forEach((Attractions) => {
    DOMSelectors.cards.insertAdjacentHTML(
      "beforeend",
      `<div class="card" id="${Attractions.name}">
          <h2 class="characterName">${Attractions.name}</h2>
          <img class="img" src="${Attractions.image}"/>
          <div class="text">
          <h3>${Attractions.subtitle}</h3>
          <h3>${Attractions.text}</h3>
          </div>
      </div>`
    );
  });
}
