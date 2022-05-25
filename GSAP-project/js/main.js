import { attractions, foods, souvenirs } from "./array.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

for (let a in attractions) {
  let heading = document.createElement("h2");
  let img = document.createElement("img");
  let text = document.createElement("div");

  heading.className = "attractions, heading";
  img.className = "attractions, parent-1, img";
  text.className = "attractions, parent-1, text";

  heading.innerHTML = `${attractions[a].id}. ${attractions[a].name}`;
  img.src = attractions[a].image;
  text.innerHTML = attractions[a].text;

  document.body.appendChild(heading);
  document.body.appendChild(img);
  document.body.appendChild(text);
}

for (let f in foods) {
  let heading = document.createElement("h1");
  let img = document.createElement("img");
  let text = document.createElement("div");

  heading.className = "foods, heading";
  img.className = "foods, parent-2, img";
  text.className = "parent-2, foods, text";

  heading.innerHTML = `${foods[f].id}. ${foods[f].name}`;
  img.src = foods[f].image;
  text.innerHTML = foods[f].text;

  document.body.appendChild(heading);
  document.body.appendChild(img);
  document.body.appendChild(text);
}

for (let s in souvenirs) {
  let heading = document.createElement("h1");
  let img = document.createElement("img");
  let text = document.createElement("div");
  let footer = document.createElement("footer");

  heading.className = "souvenirs, heading";
  img.className = "souvenirs, parent-3, img";
  text.className = "souvenirs, parent-3, text";
  footer.className = "footer";

  heading.innerHTML = `${souvenirs[s].id}. ${souvenirs[s].name}`;
  img.src = souvenirs[s].image;
  text.innerHTML = souvenirs[s].text;

  document.body.appendChild(heading);
  document.body.appendChild(img);
  document.body.appendChild(text);
}

document.body.insertAdjacentHTML(
  "beforeend",
  " <footer> <p>Author: Henry Lai and Kevin Zheng <br> <a href=henryl4@nycstudents.net>henryl4@nycstudents.net</a> </p> </footer>"
);

gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({ scrollTrigger: ".heading", delay: 1.0 });

tl.from(".heading", { opacity: 0, duration: 0.3 });
tl.from(".header", { opacity: 0, duration: 0.2 });
tl.from(".img", { opacity: 0, duration: 0.3 });
tl.from(".text", { opacity: 0, duration: 0.5 });
