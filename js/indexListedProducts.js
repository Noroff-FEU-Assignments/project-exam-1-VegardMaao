import {
    getArray
} from "/js/export-functions/createListedProducts.js";

let count = 1;
const domElement = document.querySelector(".newest-posts");
let apiUrl = `https://sellmo.no/Flower_Power/wp-json/wp/v2/posts?_embed&per_page=4&`;

const backBtn = document.querySelector("#newer");
const forthBtn = document.querySelector("#older");

function disableBtn(btn) {
    btn.disabled = true;
};

function enableBtn(btn) {
    btn.disabled = false;
};

backBtn.addEventListener("click", () => {
    count--;
    if (count === 1) {
        disableBtn(backBtn);
        let newUrl = `${apiUrl}page=${count}`;
        getArray(domElement, newUrl, forthBtn);
    } else {
        let newUrl = `${apiUrl}page=${count}`;
        getArray(domElement, newUrl, forthBtn);
    }
});

forthBtn.addEventListener("click", () => {
    enableBtn(backBtn);
    count++;
    let newUrl = `${apiUrl}page=${count}`;
    getArray(domElement, newUrl, forthBtn);
});

setTimeout(() => {
    getArray(domElement, apiUrl, forthBtn);
  }, 850);