import { createPost } from "../js/export-functions/createSinglePost.js";

const container = document.querySelector(".single-post");
const queryString = document.location.search;
const parameter = new URLSearchParams(queryString);
const id = parameter.get("id");
const apiUrl = `https://sellmo.no/Flower_Power/wp-json/wp/v2/posts/${id}?_embed`;


setTimeout(() => {
    createPost(container, apiUrl);
  }, 850);