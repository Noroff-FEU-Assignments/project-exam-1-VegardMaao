export async function createPost(container, url) {
    const productResponse = await fetch(url);
    const postInfo = await productResponse.json();

    if (postInfo._embedded) {
        document.title = postInfo.title.rendered + "- Loppas Big Blog";
        
        if (postInfo._embedded['wp:featuredmedia']) {
            let date = postInfo.date;
            let slicedDate = date.slice(0, date.length -9);

            container.innerHTML = `
            <img class="featured-picture" src="${postInfo._embedded['wp:featuredmedia']['0'].source_url}" alt="${postInfo._embedded['wp:featuredmedia']['0'].title.rendered}" title="${postInfo._embedded['wp:featuredmedia']['0'].title.rendered}">
            <h1>${postInfo.title.rendered}</h1>
            ${postInfo.content.rendered}

            <p class="date">Posted the ${slicedDate}</p>
            `;
        } else {
            container.innerHTML = `
            <h1>${postInfo.title.rendered}</h1>
            ${postInfo.content.rendered}
            <p class="date">Posted the ${slicedDate}</p>
            `;
        }
    }  else {
            let id = postInfo[0].id;
            let newUrl = `https://sellmo.no/Flower_Power/wp-json/wp/v2/posts/${id}?_embed`;
            createPost(container, newUrl);
    }
}