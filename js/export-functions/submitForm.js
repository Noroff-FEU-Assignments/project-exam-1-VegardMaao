export async function submitForm(e, inputs, url) {
    e.preventDefault();
    console.log("button press");
    let arrayOfInputValues = [];
    let arrayOfKeys = [];
    let dataObject = {};
    for (let i = 0; i < inputs.length; i++) {
        const singleInput = inputs[i];
        arrayOfKeys.push(singleInput.name);
        arrayOfInputValues.push(singleInput.value);
    }

    for (let x = 0; x < arrayOfKeys.length; x++) {
        dataObject[arrayOfKeys[x]] = arrayOfInputValues[x];
    }
    
    console.log("array of keys", arrayOfKeys);
    console.log("array of values ", arrayOfInputValues);   
    console.log(dataObject);

}
