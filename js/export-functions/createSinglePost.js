export async function createPost(container, url) {
    const productResponse = await fetch(url);
    const postInfo = await productResponse.json();

    if (postInfo._embedded) {
        document.title = postInfo.title.rendered + "- Loppas Big Blog";

        if (postInfo._embedded['wp:featuredmedia']) {
            container.innerHTML = `
            <img class="featured-picture" src="${postInfo._embedded['wp:featuredmedia']['0'].source_url}" alt="${postInfo._embedded['wp:featuredmedia']['0'].title.rendered}" title="${postInfo._embedded['wp:featuredmedia']['0'].title.rendered}">
            <h1>${postInfo.title.rendered}</h1>
            ${postInfo.content.rendered}
            `;
        } else {
            container.innerHTML = `
            <h1>${postInfo.title.rendered}</h1>
            ${postInfo.content.rendered}
            `;
        }
    }  else {
        for (let i = 0; i < postInfo.length; i++) {
            console.log(postInfo[i]);
            let id = postInfo[i].id;
            let newUrl = `https://sellmo.no/Flower_Power/wp-json/wp/v2/posts/${id}?_embed`;
            createPost(container, newUrl);
        }
    }
}