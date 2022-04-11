import "../js/array.js";

const DOMSelectors = {
  Attractions: document.querySelector(".Attractions"),
  search: document.getElementById("search"),
  foods: document.querySelector("foods"),
  souvenirs: document.querySelector("souvenirs"),
};
console.log(DOMSelectors);

function displayAttractions(Attractions) {
  Attractions.forEach((Attractions, index) => {
    document.querySelector("#container").insertAdjacentHTML(
      "afterbegin",
      `
      id=${index}>
      src="${Attractions.image}"/>
      <h2>${Attractions.subtitle}</h2>
    <h3>$${Attractions.text}</h3>
    </div>`
    );
  });
}
displayAttractions(Attractions, "Attractions");

function displayfoods(food) {
  food.forEach((foods, index) => {
    document.querySelector("#container").insertAdjacentHTML(
      "afterbegin",
      `
      id=${index}>
      src="${foods.image}"/>
      <h2>${foods.subtitle}</h2>
    <h3>$${foods.text}</h3>
    </div>`
    );
  });
}
displayfoods(foods, "foods");
