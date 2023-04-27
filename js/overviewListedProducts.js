import { getArray} from "/js/export-functions/createListedProducts.js";

let count = 10;
const domElement = document.querySelector(".newest-posts");
const apiUrl = `https://sellmo.no/Flower_Power/wp-json/wp/v2/posts?_embed&per_page=100`;

const moreBtn = document.querySelector("#more");
const selectInp = document.querySelector("#sort-by");

selectInp.addEventListener("change", (e) => {
        count = 10;
        domElement.innerHTML = "";
        domElement.classList.add("loader");
        setTimeout(() => {
                getArray(domElement, apiUrl, moreBtn, count, selectInp.value);
        }, 500);
})

moreBtn.addEventListener("click", () => {
        count = count + 10;
        getArray(domElement, apiUrl, moreBtn, count, selectInp.value);
});



setTimeout(() => {
        getArray(domElement, apiUrl, moreBtn, count);
}, 850);