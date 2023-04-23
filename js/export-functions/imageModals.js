function imgModal(imgSrc) {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    document.querySelector("main").append(modal);
    const bigImage = document.createElement("img");
    bigImage.setAttribute("src", imgSrc);
    modal.append(bigImage);
};

export function imgSrc() {
    const images = document.querySelectorAll("img");
    for (let i = 0; i < images.length; i++) {
        if (i === 0) {
            continue;
        }
        let img = images[i];
        let imgSrc = images[i].src;
        img.addEventListener("click", (e) => {
            console.log(imgSrc);
            imgModal(imgSrc);
        })
    }
}