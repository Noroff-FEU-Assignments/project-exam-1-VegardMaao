export function createHTML(container, array, btn) {
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
            <a class="read-more" href="singleblogpost.html?id=${array[i].id}">Read more</a>
            </div>
            `;
        } else {
            container.innerHTML += `
            <div class="single-post-in-list">
            <span class="link-on-thumbnail"></span>
            <h3 class="preview-header"> ${array[i].title.rendered}</h3>
            ${array[i].excerpt.rendered}
            <a class="read-more" href="singleblogpost.html?id=${array[i].id}">Read more</a>
            </div>
            `;
        }
    }
}

export async function getArray(container, url, btn, count) {
    let response = await fetch(url);
    let finishedResponse = await response.json();
    if (finishedResponse.data && document.title === "Home - Loppas Flea Circus") {
        btn.disabled = true;
        container.innerHTML = `
                <div class="no-more-posts">
                <h3 class="preview-header">No more posts, go back</h3>
                <p>By the way, have you considered checking out the overview page?</p>
                <p>It can be hard to find what you are looking for in a format like this, 
                so check out the overview page for a birds eye view!</p>
                <a href="blogposts.html" class="main-cta-btn">Overview page</a>
                </div>
              `;
    } else if (count >= finishedResponse.length && document.title === "Overview - Loppas Flea Circus")  {
        btn.disabled = true;
        container.innerHTML += `
                <div class="no-more-posts">
                <h3 class="preview-header">No more posts</h3>
                <p>You've reached bedrock buddy. Let's get back up</p>
                <a href="blogposts.html#beginning" class="main-cta-btn">Take me up top</a>
                </div>
              `;
    } else {
        btn.disabled = false;
        createHTML(container, finishedResponse, btn);   
    }
};

// getArray(domElement, apiUrl);