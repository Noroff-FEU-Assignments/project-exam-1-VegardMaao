export function validateTextInput(input, lenghtRequired) {
    if (input.value.length >= lenghtRequired) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
};

export function validateAllInputs(inputs, btn) {
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].classList.contains("valid")){
            btn.disabled = false;
        } else {
            btn.disabled =  true;
        }
    }
}