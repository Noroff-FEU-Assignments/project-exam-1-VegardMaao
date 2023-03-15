import { getArray } from "/js/createListedProducts.js";

let count = 1;
const domElement = document.querySelector(".newest-posts");
let apiUrl = `https://sellmo.no/Flower_Power/wp-json/wp/v2/posts?_embed&per_page=4&`;

const backBtn = document.querySelector("#newer");
const forthBtn = document.querySelector("#older");


backBtn.addEventListener("click", () => {
    if (count === 1) {
        console.log("no change");
        return;
    } else {
        count--;
        let newUrl = `${apiUrl}page=${count}`;
        getArray(domElement, newUrl);
    }
});

forthBtn.addEventListener("click", () => {
        console.log(apiUrl, count);
        count++;
        let newUrl = `${apiUrl}page=${count}`;
        try {
            getArray(domElement, newUrl);
        } catch (error) {
            container.innerHTML = `
                <div class="no-more-posts">
                <h3 class="preview-header">No more posts</h3>
                <p>By the way, have you considered checking out the overview page?</p>
                <p>It can be hard to find what you are looking for in a format like this, 
                so check out the overview page for a birds eye view!</p>
                <a href="blogposts.html" class="main-cta-btn">Overview page</a>
                </div>
              `;
        }
        
})

getArray(domElement, apiUrl);