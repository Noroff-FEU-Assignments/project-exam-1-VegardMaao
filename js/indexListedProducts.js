import { getArray } from "/js/export-functions/createListedProducts.js";

let count = 1;
const domElement = document.querySelector(".newest-posts");
const apiUrl = `https://sellmo.no/Flower_Power/wp-json/wp/v2/posts?_embed&per_page=4&`;
const loaderDiv = `<div class="loader"></div>`;

const backBtn = document.querySelector("#newer");
const forthBtn = document.querySelector("#older");

function disableBtn(btn) {
    btn.disabled = true;
};

function enableBtn(btn) {
    btn.disabled = false;
};

backBtn.addEventListener("click", () => {
    domElement.innerHTML = loaderDiv;
    count--;
    if (count === 1) {
        disableBtn(backBtn);
        let newUrl = `${apiUrl}page=${count}`;
        setTimeout(() => {
            getArray(domElement, newUrl, forthBtn);
        }, 500);
    } else {
        let newUrl = `${apiUrl}page=${count}`;
        setTimeout(() => {
            getArray(domElement, newUrl, forthBtn);
        }, 500);
    }
});

forthBtn.addEventListener("click", () => {
    domElement.innerHTML = loaderDiv;
    enableBtn(backBtn);
    count++;
    let newUrl = `${apiUrl}page=${count}`;
    setTimeout(() => {
        getArray(domElement, newUrl, forthBtn);
    }, 500);
});

setTimeout(() => {
    getArray(domElement, apiUrl, forthBtn);
}, 850);