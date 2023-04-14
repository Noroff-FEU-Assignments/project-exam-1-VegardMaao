export function validateTextInputLength(input, minLength, maxLength) {
    let errorMessage = input.nextElementSibling;
    input.minLength = minLength;
    input.maxLength = maxLength;
    if (input.validity.valid) {
        input.classList.remove("invalid");
        input.classList.add("valid");
        errorMessage.style.cssText = "display: none;"

        if (input.value.length === maxLength) {
            errorMessage.style.cssText = "display: inline;"
            errorMessage.textContent = `Cannot be longer than ${maxLength} characters`;
        }
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
        errorMessage.style.cssText = "display: inline;"
        errorMessage.textContent = input.validationMessage;
    }
};

export function wordCounter(input, maxLength) {
    //I want to make a word counter for my textareas, kind of like what twitter does
    //I'll get back to it later 
}

export function validateAllInputs(inputs, btn) {
    let arrayOfBooleans = [];
    for (let i = 0; i < inputs.length; i++) {
        let singleInput = inputs[i];
        arrayOfBooleans.push(singleInput.validity.valid);
        let checker = arrayOfBooleans.every(Boolean);
        if (checker === true) {
            btn.disabled = false;
        } else {
            btn.disabled = true;
        }
    }
}