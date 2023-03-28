import { createPost } from "../js/export-functions/createSinglePost.js";

import { makeArray } from "../js/export-functions/nextAndPreviousPost.js";

const container = document.querySelector(".single-post");
const queryString = document.location.search;
const parameter = new URLSearchParams(queryString);
let id = parameter.get("id");
const apiPostUrl = `https://sellmo.no/Flower_Power/wp-json/wp/v2/posts/${id}?_embed`;

const prevBtn = document.querySelector("#previous");
const nextBtn = document.querySelector("#next");
const apiAllPostsUrl = `https://sellmo.no/Flower_Power/wp-json/wp/v2/posts/?_embedded&per_page=100`;

setTimeout(() => {
  createPost(container, apiPostUrl, prevBtn, nextBtn);
}, 850);



prevBtn.addEventListener("click", () => {
  makeArray(apiAllPostsUrl, prevBtn, id);
});

nextBtn.addEventListener("click", () => {
  makeArray(apiAllPostsUrl, nextBtn, id);
});