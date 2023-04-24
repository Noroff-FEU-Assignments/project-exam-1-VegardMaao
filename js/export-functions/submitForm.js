export async function submitForm(e, inputs, url, container, message) {
    e.preventDefault();
    const dataInFormDataFormat = new FormData(inputs);
    try {
        container.innerHTML = `<div class="comment-posted">${message}</div>`;
        const fetchResponse = await fetch(url, {
            method: "post",
            body: dataInFormDataFormat
        })
        const finishedResponse = await fetchResponse.json();
        console.log(finishedResponse);
        return finishedResponse;
    } catch (error) {
        console.log(error);
    }
}