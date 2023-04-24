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
        return finishedResponse;
    } catch (error) {
        container.innerHTML = `<div class="comment-posted">Hmm, something went wrong. It's ${error}</div>`;
    }
}