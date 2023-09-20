/**
 * @description This function sends data to the WP Rest API. It can be any data, 
 * be it a comment for the blog or a message which is sent to me via contact form 7 
 * @param {object} event - event from the form  
 * @param {Array} inputs - data from the fieldset
 * @param {string} url - where data is sent
 * @param {object} container - container for success or error message 
 * @param {string} message - message on success
 * @returns {array} a JSON file which is sent to the WP backend
 * @example
 * ```js
 *  //Sends form data to WP Rest API 
 * const e = SubmitEvent;
 * const inputs = {document.querySelector("form")};
 * const url = "https://sellmo.no/Flower_Power/wp-json/contact-form-7/v1/contact-forms/311/feedback";
 * const container = {document.querySelector("form")};
 * const message = `<p>Your message has been sent!</p>`;
 * ```
 */
export async function submitForm(e, inputs, url, container, message) {
    console.log(inputs);
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
