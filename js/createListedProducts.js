
let ten = 10;

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

export async function getArray(container, url) {
    let response = await fetch(url);
    let finishedResponse = await response.json();
    
    createHTML(container, finishedResponse);   
};

// getArray(domElement, apiUrl);