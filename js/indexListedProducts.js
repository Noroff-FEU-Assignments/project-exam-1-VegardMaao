import { getArray } from "/js/export-functions/createListedProducts.js";

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
        getArray(domElement, newUrl, forthBtn);
    }
});

forthBtn.addEventListener("click", () => {
        console.log(apiUrl, count);
        count++;
        let newUrl = `${apiUrl}page=${count}`;
        getArray(domElement, newUrl, forthBtn);
});

getArray(domElement, apiUrl, forthBtn);