function nextPost(array, btn, id) {
    let idNumber = parseInt(id);
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === idNumber) {
            let newID = array[i + 1].id;
            location.href = `singleblogpost.html?id=${newID}`;
        }
    }
}

function prevPost(array, btn, id) {
    let idNumber = parseInt(id);
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === idNumber) {
            let newID = array[i - 1].id;
            location.href = `singleblogpost.html?id=${newID}`;
        }
    }
}

export async function makeArray(url, btn, idFromUrl) {
    const id = idFromUrl;
    let response = await fetch(url);
    let finishedResponse = await response.json();
    if (btn.id === "next") {
        nextPost(finishedResponse, btn, id);
    } else if (btn.id === "previous") {
        prevPost(finishedResponse, btn, id);
    }
}