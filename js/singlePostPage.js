
// Post creation functions

import { createPost } from "../js/export-functions/createSinglePost.js";
import { makeArray } from "../js/export-functions/nextAndPreviousPost.js";

const postContainer = document.querySelector(".single-post");
const queryString = document.location.search;
const parameter = new URLSearchParams(queryString);
let id = parameter.get("id");
const apiPostUrl = `https://sellmo.no/Flower_Power/wp-json/wp/v2/posts/${id}?_embed`;

const prevBtn = document.querySelector("#previous");
const nextBtn = document.querySelector("#next");
const apiAllPostsUrl = `https://sellmo.no/Flower_Power/wp-json/wp/v2/posts/?_embedded&per_page=100`;

setTimeout(() => {
  createPost(postContainer, apiPostUrl, prevBtn, nextBtn);
}, 850);



prevBtn.addEventListener("click", () => {
  makeArray(apiAllPostsUrl, prevBtn, id);
});

nextBtn.addEventListener("click", () => {
  makeArray(apiAllPostsUrl, nextBtn, id);
});

// Comments section functions below:
import { validateTextInput } from "./export-functions/validateForm.js";
import { validateAllInputs } from "./export-functions/validateForm.js";

const nameInput = document.querySelector("#name");
const commentInput = document.querySelector("#custom-comment");
const allFormInputs = document.querySelector("fieldset").elements;
const submitCommentBtn = document.querySelector(".submit-comment");

nameInput.onkeyup = (e) => {validateTextInput(nameInput, 3),  validateAllInputs(allFormInputs, submitCommentBtn)};
commentInput.onkeyup = (e) => {validateTextInput(commentInput, 15), validateAllInputs(allFormInputs, submitCommentBtn)};

submitCommentBtn.onclick = (e) => {
  e.preventDefault();
  console.log("button press");
}

import { getComments } from "./export-functions/getComments.js";

const commentsContainer = document.querySelector(".all-comments-on-post");
const apiCommentUrl = `https://sellmo.no/Flower_Power/wp-json/wp/v2/comments?post=${id}`;

getComments(commentsContainer,apiCommentUrl);

