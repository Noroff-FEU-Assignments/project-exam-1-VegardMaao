import { navItems } from "./export-objects/export-navigation.js";

import { footerItems } from "./export-objects/export-footer.js";

const navDOM = document.querySelector(".nav_ul");

const footerDOM = document.querySelector(".cs_ul");

function createNavigation(container, items) {
  for (let i = 0; i < items.length; i++) {
    container.innerHTML += `
          <li>
          <a href="${items[i].url}">${items[i].title}</a>
          </li>
    `;
  }
};

createNavigation(navDOM, navItems);

createNavigation(footerDOM, footerItems);