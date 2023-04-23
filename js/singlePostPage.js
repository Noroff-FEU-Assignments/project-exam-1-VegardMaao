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

// Image modal functions here

import { imgSrc } from "./export-functions/imageModals.js";

postContainer.addEventListener("DOMSubtreeModified", (e) => {
  imgSrc();
});

// Comments section functions below:
import { validateTextInputLength } from "./export-functions/validateForm.js";
import { validateAllInputs } from "./export-functions/validateForm.js";
import { getComments } from "./export-functions/getComments.js";
import { submitForm } from "./export-functions/submitForm.js";

const commentsContainer = document.querySelector(".all-comments-on-post");
const idInput = document.querySelector("#post-ID");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const commentInput = document.querySelector("#custom-comment");
const fieldsetField = document.querySelector("form");
const allFormInputs = document.querySelector("fieldset").elements;
const submitCommentBtn = document.querySelector(".submit");
const message = `<p>Your comment is posted!</p>`;
let count = 1;
const commentsUrl = `https://sellmo.no/Flower_Power/wp-json/wp/v2/comments`;
const apiCommentUrl = `https://sellmo.no/Flower_Power/wp-json/wp/v2/comments?post=${id}&per_page=20&page=${count}`;
const contentType = `application/json`;

idInput.value = `${id}`;
commentInput.textContent = "";

nameInput.onkeyup = (e) => {
  validateTextInputLength(nameInput, 3, 15), validateAllInputs(allFormInputs, submitCommentBtn)
};
//Email input needs regex
emailInput.onkeyup = (e) => {
  validateTextInputLength(emailInput, 3, 50), validateAllInputs(allFormInputs, submitCommentBtn)
};
//Email input needs regex
commentInput.onkeyup = (e) => {
  validateTextInputLength(commentInput, 15, 250), validateAllInputs(allFormInputs, submitCommentBtn)
};

function refreshComments(container) {
  container.innerHTML ="";
  container.classList.add("loader");
  setTimeout(() => {
    getComments(container, apiCommentUrl)
  }, 5000);
}

submitCommentBtn.onclick = (e) => {
  submitForm(e, allFormInputs, commentsUrl, fieldsetField, message, contentType), refreshComments(commentsContainer)
};

getComments(commentsContainer, apiCommentUrl);