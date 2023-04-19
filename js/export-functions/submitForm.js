export async function submitForm(e, inputs, url, container) {
    e.preventDefault();
    let dataObject = {};
    for (let i = 0; i < inputs.length; i++) {
        const singleInput = inputs[i];
        dataObject[singleInput.name] = singleInput.value;
    }    
    const dataJSON = JSON.stringify(dataObject);
    try {
        container.innerHTML = `<div class="comment-posted"><p>Your comment is posted!</p></div>`;
        await fetch(url, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: dataJSON,
        })
        return;
    } catch (error) {
        console.log(error);
    }
}