const domElement = document.querySelector(".newest-posts");
let apiUrl = "https://sellmo.no/Flower_Power/wp-json/wp/v2/posts?_embed&";
//I'll use the following to get a set amount of results via the URL;
//https://sellmo.no/Flower_Power/wp-json/wp/v2/posts?per_page=4&page=1
//This returns 4 posts per page and sets what page I want to see.
//I can then use buttons and a "count" variable to change what page I'm on
//Something like;
//let count = 1;
//button.onclick = count++
//otherButton.onclick = count--
//https://sellmo.no/Flower_Power/wp-json/wp/v2/posts?per_page=4&page=${count}

//However, I do want the function to be usable on both my index page 
//And the overview page. Should be doable if the "per page" is also a variable
//Maybe something I could fix via an if statment:
//if(container.classlist ==== "newest-posts"){per_page=4} or something

const backBtn = document.querySelector("#newer");
const forthBtn = document.querySelector("#older");

let count = 1;

function createURL(container, originalURL) {
    if (document.title === "Loppas Flea Circus - Home") {
        let newURL = `${originalURL}per_page=4&page=${count}`;
        getArray(container, newURL);
    } else {
        let newURL = `${originalURL}per_page=10&page=${count}`;
        getArray(container, newURL);
    }

};

createURL(domElement, apiUrl);

backBtn.addEventListener("click", () => {
    if (count === 1) {
        console.log("no change");
        return;
    } else {
        count--;
        createURL(domElement, apiUrl);
    }
});

forthBtn.addEventListener("click", () => {
    count++;
    createURL(domElement, apiUrl);
})

function createHTML(container, array) {
    container.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        const singlePost = array[i];
        if (array[i].featured_media) {
            container.innerHTML += `
            <div class="single-post-in-list">
            <a class="link-on-thumbnail" href="singleblogpost.html?id=${array[i].id}">
            <img class="featured_img_thumbnail" src="${array[i]._embedded['wp:featuredmedia']['0'].source_url}" alt="" srcset="">
            </a>
            <h3 class="preview-header"> ${array[i].title.rendered}</h3>
            ${array[i].excerpt.rendered}
            <a class="read-more" href="singleblogpost.html?id=${array[i].id}">Read more</a>
            </div>
            `;
        } else {
            container.innerHTML += `
            <div class="single-post-in-list">
            <h3 class="preview-header"> ${array[i].title.rendered}</h3>
            ${array[i].excerpt.rendered}
            <a class="read-more" href="singleblogpost.html?id=${array[i].id}">Read more</a>
            </div>
            `;
        }
    }
}

async function getArray(container, url) {
    let response = await fetch(url);
    let finishedResponse = await response.json();
    console.log(finishedResponse);
    createHTML(container, finishedResponse);
};

// getArray(domElement, apiUrl);