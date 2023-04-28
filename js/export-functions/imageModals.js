const body = document.querySelector("body");

export function closeModal(modal) {
    window.onclick = (e) => {
        if (e.target.contains(modal)) {
            body.style.cssText = "cursor: auto;";
            modal.remove();
        }
    }
}

function imgModal(imgSrc) {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    document.querySelector("main").append(modal);
    const bigImage = document.createElement("img");
    bigImage.setAttribute("src", imgSrc);
    modal.append(bigImage);
    body.style.cssText = "cursor: pointer;";
    closeModal(modal);
};

export function imgSrc() {
    const images = document.querySelectorAll("img");
    for (let i = 0; i < images.length; i++) {
        let img =  images[i];
        if (i === 0 || img.classList.contains("featured_img_thumbnail")) {
            continue;
        }
        let imgSrc = images[i].src;
        img.addEventListener("click", (e) => {
            imgModal(imgSrc);
        })
    }
}