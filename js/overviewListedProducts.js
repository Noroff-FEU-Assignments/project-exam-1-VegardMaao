import { getArray } from "/js/export-functions/createListedProducts.js";    

let count = 10;
const domElement = document.querySelector(".newest-posts");
let apiUrl = `https://sellmo.no/Flower_Power/wp-json/wp/v2/posts?_embed&`;

let moreBtn = document.querySelector("#more");

moreBtn.addEventListener("click", () => {
        console.log(apiUrl, count);
        count = count + 10;
        console.log(count);
        let newUrl = `${apiUrl}per_page=${count}&page=1`;
        getArray(domElement, newUrl, moreBtn, count);    
})

getArray(domElement, apiUrl, moreBtn);