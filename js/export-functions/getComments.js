export async function getComments(container, url) {
    const commentsResponse = await fetch(url);
    const commentsFinishedResponse = await commentsResponse.json();
    createCommentsHTML(container, commentsFinishedResponse);
};

function createCommentsHTML(container, array) {
    container.classList.remove("loader");
    for (let i = 0; i < array.length; i++) {

        let postedDate = array[i].date;
        let slicedPostDate = postedDate.slice(0, postedDate.length - 9);

        container.innerHTML += `
        <div class="single-comment">

        ${array[i].content.rendered}
        <p class="date">By ${array[i].author_name} the ${slicedPostDate}</p>
        </div>
        `;
    }
}