import { createPost } from "../js/export-functions/createSinglePost.js";
import { imgSrc } from "./export-functions/imageModals.js";

const container = document.querySelector(".intro-info");
const apiUrl = `https://sellmo.no/Flower_Power/wp-json/wp/v2/posts/?_embedded&sticky=true`;


setTimeout(() => {
    createPost(container, apiUrl);
    
  }, 850);

  container.addEventListener("DOMSubtreeModified", (e) => {
    imgSrc();
  });