import { validateTextInputLength } from "./export-functions/validateForm.js";
import { validateAllInputs } from "./export-functions/validateForm.js";
import { submitForm } from "./export-functions/submitForm.js";

const allFormInputs = document.querySelector("fieldset").elements;
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const messageInput = document.querySelector("#message");
const submitMessageBtn = document.querySelector(".submit");

messageInput.textContent = "";

nameInput.onkeyup = (e) => {validateTextInputLength(nameInput, 3, 15),  validateAllInputs(allFormInputs, submitMessageBtn)};
//email input needs regEx
emailInput.onkeyup = (e) => {validateTextInputLength(emailInput, 3, 50),  validateAllInputs(allFormInputs, submitMessageBtn)};
//email input needs regEx
subjectInput.onkeyup = (e) => {validateTextInputLength(subjectInput, 3, 25),  validateAllInputs(allFormInputs, submitMessageBtn)};
messageInput.onkeyup = (e) => {validateTextInputLength(messageInput, 15, 500),  validateAllInputs(allFormInputs, submitMessageBtn)};

submitMessageBtn.onclick = (e) => {
    submitForm(e, allFormInputs, "");
  }