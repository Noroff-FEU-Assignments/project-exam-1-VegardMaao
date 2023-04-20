export async function submitForm(e, inputs, url, container, message, contentType) {
    e.preventDefault();
    let dataObject = {};
    for (let i = 0; i < inputs.length; i++) {
        const singleInput = inputs[i];
        dataObject[singleInput.name] = singleInput.value;
    }    
    console.log(dataObject);
    const dataJSON = JSON.stringify(dataObject);
    console.log(dataJSON);
    try {
        container.innerHTML = `<div class="comment-posted">${message}</div>`;
        await fetch(url, {
            method: "post",
            headers: {
                "Content-Type": `${contentType}`,
                "Content-Length": "<calculated when request is sent>",
                "Host": "<calculated when request is sent>",
                "Accept": "*/*",
                "Accept-Encoding": "gzip, deflate, br",
                "Connection": "keep-alive"
            },
            body: dataJSON
        })
        return;
    } catch (error) {
        console.log(error);
    }
}