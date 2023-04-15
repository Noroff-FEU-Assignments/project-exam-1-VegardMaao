export async function submitForm(e, inputs, url) {
    e.preventDefault();
    // let arrayOfInputValues = [];
    // let arrayOfKeys = [];
    let dataObject = {};
    for (let i = 0; i < inputs.length; i++) {
        const singleInput = inputs[i];
        // arrayOfKeys.push(singleInput.name);
        // arrayOfInputValues.push(singleInput.value);
        // dataObject[arrayOfKeys[i]] = arrayOfInputValues[i];
        dataObject[singleInput.name] = singleInput.value;
    }
    // console.log("array of keys", arrayOfKeys);
    // console.log("array of values ", arrayOfInputValues);
    console.log(dataObject);
}