import { validateTextInputLength } from "./export-functions/validateForm.js";
import { validateAllInputs } from "./export-functions/validateForm.js";
import { submitForm } from "./export-functions/submitForm.js";

const allFormInputs = document.querySelector("fieldset").elements;
const formField = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const messageInput = document.querySelector("#message");
const submitMessageBtn = document.querySelector(".submit");
const message = `<p>Your message has been sent!</p>`;
const contactURL = `https://sellmo.no/Flower_Power/wp-json/contact-form-7/v1/contact-forms/305/feedback`;

messageInput.textContent = "";

nameInput.onkeyup = (e) => {validateTextInputLength(nameInput, 3, 15),  validateAllInputs(allFormInputs, submitMessageBtn)};
//email input needs regEx
emailInput.onkeyup = (e) => {validateTextInputLength(emailInput, 3, 50),  validateAllInputs(allFormInputs, submitMessageBtn)};
//email input needs regEx
subjectInput.onkeyup = (e) => {validateTextInputLength(subjectInput, 3, 25),  validateAllInputs(allFormInputs, submitMessageBtn)};
messageInput.onkeyup = (e) => {validateTextInputLength(messageInput, 15, 500),  validateAllInputs(allFormInputs, submitMessageBtn)};

submitMessageBtn.onclick = (e) => {
    submitForm(e, allFormInputs, contactURL, form, message);
  }