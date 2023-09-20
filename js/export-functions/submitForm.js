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
 * const inputs = {
 * <form action="submit">
                <fieldset>
                    <div class="formshape">
                        <label for="your-name">Name</label>
                        <input type="text" name="your-name" id="your-name" required="" placeholder="Full Name" minlength="5" maxlength="15" class="valid">
                        <p class="error-message" style="display: none;"></p>
                        <label for="your-email">Email</label>
                        <input type="email" name="your-email" id="your-email" required="" placeholder="your@email.com" minlength="3" maxlength="50" class="valid">
                        <p class="error-message" style="display: none;"></p>
                        <label for="your-subject">Subject</label>
                        <input type="text" name="your-subject" id="your-subject" required="" placeholder="Subject" minlength="15" maxlength="25" class="valid">
                        <p class="error-message" style="display: none;">Du må forlenge denne teksten til 15 tegn eller mer (for øyeblikket bruker du 12 tegn).</p>
                        <label for="your-message">What to you want to say to Loppa?</label>
                        <textarea name="your-message" id="your-message" cols="30" rows="10" required="" placeholder="Your message here, max 500 characters" minlength="25" maxlength="500" class="valid"></textarea>
                        <p class="error-message" style="display: none;">Du må forlenge denne teksten til 25 tegn eller mer (for øyeblikket bruker du 19 tegn).</p>
                        <p class="word-count"><span class="counter">38</span> / <span class="max-val">500</span></p>
                </div></fieldset>
                
                <button class="submit" type="submit">Send message</button>
            </form>
 * }
 * const url = "https://sellmo.no/Flower_Power/wp-json/contact-form-7/v1/contact-forms/311/feedback";
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
