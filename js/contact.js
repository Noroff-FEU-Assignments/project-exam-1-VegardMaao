import { validateTextInputLength } from "./export-functions/validateForm.js";
import { validateAllInputs } from "./export-functions/validateForm.js";

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
messageInput.onkeyup = (e) => {validateTextInputLength(messageInput, 15, 250),  validateAllInputs(allFormInputs, submitMessageBtn)};
