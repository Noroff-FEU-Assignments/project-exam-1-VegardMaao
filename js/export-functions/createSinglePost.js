async function findPlaceInArray(item, btn1, btn2) {
    const response = await fetch(`https://sellmo.no/Flower_Power/wp-json/wp/v2/posts/?_embedded&per_page=100`);
    const finishedResponse = await response.json();
    for (let i = 0; i < finishedResponse.length; i++) {
        if (finishedResponse[i].id === item.id) {
            if(i === 0){
                btn1.disabled = true;
            } else if (i === finishedResponse.length -1) {
                btn2.disabled = true;
            }
        }
    }
}

export async function createPost(container, url, btn1, btn2) {
    const productResponse = await fetch(url);
    const postInfo = await productResponse.json();
    
    if (document.title !== "Home - Loppas Big Blog") {
        findPlaceInArray(postInfo, btn1, btn2);
        document.title = postInfo.title.rendered + " - Loppas Big Blog";
        document.querySelector('meta[name="description"]').setAttribute("content", postInfo.excerpt.rendered);
    }

    if (postInfo._embedded) {
        

        if (postInfo._embedded['wp:featuredmedia']) {
            let postedDate = postInfo.date;
            let slicedPostDate = postedDate.slice(0, postedDate.length - 9);
            let editDate = postInfo.modified;
            let slicedEditDate = editDate.slice(0, editDate.length - 9);

            container.innerHTML = `
            <img class="featured-picture" src="${postInfo._embedded['wp:featuredmedia']['0'].source_url}" alt="${postInfo._embedded['wp:featuredmedia']['0'].title.rendered}" title="${postInfo._embedded['wp:featuredmedia']['0'].title.rendered}">
            <h1>${postInfo.title.rendered}</h1>
            ${postInfo.content.rendered}

            <p class="date">Posted the ${slicedPostDate}, edited ${slicedEditDate}</p>
            `;
        } else {
            container.innerHTML = `
            <h1>${postInfo.title.rendered}</h1>
            ${postInfo.content.rendered}
            <p class="date">Posted the ${slicedDate}, edited the </p>
            `;
        }
    } else {
        let id = postInfo[0].id;
        let newUrl = `https://sellmo.no/Flower_Power/wp-json/wp/v2/posts/${id}?_embed`;
        createPost(container, newUrl);
    }
}