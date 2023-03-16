import { navItems } from "./export-objects/export-navigation.js";

const navDOM = document.querySelector(".nav_ul");

function createNavigation(container, items) {
  for (let i = 0; i < items.length; i++) {
    container.innerHTML += `
          <li class="nav_li">
          <a href="${items[i].url}">${items[i].title}</a>
          </li>
    `;
  }
};

createNavigation(navDOM, navItems);
