export function createHTML(container, array) {
    container.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i].featured_media) {
            container.innerHTML += `
            <div class="single-post-in-list">
            <a class="link-on-thumbnail" href="singleblogpost.html?id=${array[i].id}">
            <img class="featured_img_thumbnail" loading="lazy" src="${array[i]._embedded['wp:featuredmedia']['0'].source_url}" alt="${array[i]._embedded['wp:featuredmedia']['0'].alt_text}" title="${array[i]._embedded['wp:featuredmedia']['0'].alt_text}">
            </a>
            <a class="link-on-thumbnail" href="singleblogpost.html?id=${array[i].id}">
            <h3 class="preview-header"> ${array[i].title.rendered}</h3>
            </a>
            ${array[i].excerpt.rendered}
            <a class="read-more secondary-cta-btn" href="singleblogpost.html?id=${array[i].id}">Read post</a>
            </div>
            `;
        } else {
            container.innerHTML += `
            <div class="single-post-in-list">
            <span class="link-on-thumbnail"></span>
            <a class="link-on-thumbnail" href="singleblogpost.html?id=${array[i].id}">
            <h3 class="preview-header"> ${array[i].title.rendered}</h3>
            </a>
            ${array[i].excerpt.rendered}
            <a class="read-more secondary-cta-btn" href="singleblogpost.html?id=${array[i].id}">Read post</a>
            </div>
            `;
        }
    }
}

export async function getArray(container, url, btn, count, state) {

    let response = await fetch(url);
    let finishedResponse = await response.json();

    if (state === "oldest-posts") {
        const sortedByOldest = finishedResponse.reverse();
        const slicedOldest = sortedByOldest.slice(0, count);
        manageArray(container, slicedOldest, finishedResponse, btn, count);
    } else {
        let standardSort = finishedResponse.slice(0, count);
        manageArray(container, standardSort, finishedResponse, btn, count);
    }
};


function manageArray(container, array, maxLength, btn, count) {

    if (array.data && document.title === "Home - Loppas Big Blog") {
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
    } else if (count >= maxLength.length && document.title === "Overview - Loppas Big Blog") {
        container.classList.remove("loader");
        createHTML(container, array);
        btn.disabled = true;
        container.innerHTML += `
                <div class="no-more-posts">
                <h3 class="preview-header">No more posts</h3>
                <p class="regular-text">You've reached bedrock buddy. Let's get back up.</p>
                <a href="blogposts.html#beginning" class="secondary-cta-btn">Take me up top</a>
                </div>
              `;
    } else {
        container.classList.remove("loader");
        btn.disabled = false;
        createHTML(container, array);
    }
}