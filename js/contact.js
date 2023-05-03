import { validateTextInputLength } from "./export-functions/validateForm.js";
import { emailRegExTest } from "./export-functions/validateForm.js";
import { validateAllInputs } from "./export-functions/validateForm.js";
import { submitForm } from "./export-functions/submitForm.js";
import { wordCount } from "./export-functions/characterCounter.js";

const allFormInputs = document.querySelector("fieldset").elements;
const formField = document.querySelector("form");
const nameInput = document.querySelector("#your-name");
const emailInput = document.querySelector("#your-email");
const subjectInput = document.querySelector("#your-subject");
const messageInput = document.querySelector("#your-message");
const counter = document.querySelector(".counter");
const maxMsgLength = document.querySelector(".max-val");
const submitMessageBtn = document.querySelector(".submit");

const message = `<p>Your message has been sent!</p>`;
const contactURL = `https://sellmo.no/Flower_Power/wp-json/contact-form-7/v1/contact-forms/311/feedback`;

messageInput.textContent = "";
wordCount("", counter, maxMsgLength, 500)

nameInput.onkeyup = (e) => {validateTextInputLength(nameInput, 5, 15),  validateAllInputs(allFormInputs, submitMessageBtn)};
emailInput.onkeyup = (e) => {validateTextInputLength(emailInput, 3, 50), emailRegExTest(emailInput), validateAllInputs(allFormInputs, submitMessageBtn)};
subjectInput.onkeyup = (e) => {validateTextInputLength(subjectInput, 15, 25),  validateAllInputs(allFormInputs, submitMessageBtn)};
messageInput.onkeyup = (e) => {validateTextInputLength(messageInput, 25, 500),  validateAllInputs(allFormInputs, submitMessageBtn), wordCount(messageInput.value, counter, maxMsgLength, 500)};

submitMessageBtn.onclick = (e) => {
    submitForm(e, formField, contactURL, formField, message);
  }