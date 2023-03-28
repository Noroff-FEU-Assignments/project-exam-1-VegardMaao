export function createHTML(container, array) {
    container.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        const singlePost = array[i];
        if (array[i].featured_media) {
            container.innerHTML += `
            <div class="single-post-in-list">
            <a class="link-on-thumbnail" href="singleblogpost.html?id=${array[i].id}">
            <img class="featured_img_thumbnail" src="${array[i]._embedded['wp:featuredmedia']['0'].source_url}" alt="${array[i]._embedded['wp:featuredmedia']['0'].alt_text}" title="${array[i]._embedded['wp:featuredmedia']['0'].alt_text}">
            </a>
            <h3 class="preview-header"> ${array[i].title.rendered}</h3>
            ${array[i].excerpt.rendered}
            <a class="read-more secondary-cta-btn" href="singleblogpost.html?id=${array[i].id}">Read more</a>
            </div>
            `;
        } else {
            container.innerHTML += `
            <div class="single-post-in-list">
            <span class="link-on-thumbnail"></span>
            <h3 class="preview-header"> ${array[i].title.rendered}</h3>
            ${array[i].excerpt.rendered}
            <a class="read-more secondary-cta-btn" href="singleblogpost.html?id=${array[i].id}">Read more</a>
            </div>
            `;
        }
    }
}

export async function getArray(container, url, btn, count) {
    let response = await fetch(url);
    let finishedResponse = await response.json();
    if (finishedResponse.data) {
        container.classList.remove("loader");
        btn.disabled = true;
        container.innerHTML = `
                <div class="no-more-posts">
                <h3 class="preview-header">No more posts, sorry</h3>
                <p class="regular-text">By the way, have you considered checking out the overview page?</p>
                <p class="regular-text">It can be hard to find what you are looking for in a format like this, 
                so check out the overview page for a birds eye view!</p>
                <a href="blogposts.html" class="secondary-cta-btn">Overview page</a>
                </div>
              `;
    } else if (count >= finishedResponse.length && document.title === "Overview - Loppas Flea Circus") {
        container.classList.remove("loader");
        createHTML(container, finishedResponse);
        btn.disabled = true;
        container.innerHTML += `
                <div class="no-more-posts">
                <h3 class="preview-header">No more posts</h3>
                <p class="regular-text">You've reached bedrock buddy. Let's get back up. You can use the filters to find what you are looking for by the way!</p>
                <a href="blogposts.html#beginning" class="secondary-cta-btn">Take me up top</a>
                </div>
              `;
    } else {
        container.classList.remove("loader");
        btn.disabled = false;
        createHTML(container, finishedResponse);
    }
};
