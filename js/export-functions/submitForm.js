export async function submitForm(e, inputs, url) {
    e.preventDefault();
    let dataObject = {};
    for (let i = 0; i < inputs.length; i++) {
        const singleInput = inputs[i];
        dataObject[singleInput.name] = singleInput.value;
    }
    console.log(dataObject);
}