function nextPost(array, id) {
    let idNumber = parseInt(id);
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === idNumber) {
            let newID = array[i + 1].id;
            location.href = `http://127.0.0.1:5500/singleblogpost.html?id=${newID}`;
        }
    }
}

function prevPost(array, id) {
    let idNumber = parseInt(id);
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === idNumber) {
            let newID = array[i - 1].id;
            location.href = `http://127.0.0.1:5500/singleblogpost.html?id=${newID}`;
        }
    }
}

export async function makeArray(url, btn, idFromUrl) {
    const id = idFromUrl;
    let response = await fetch(url);
    let finishedResponse = await response.json();
    if (btn.id === "next") {
        nextPost(finishedResponse, id);
    } else if (btn.id === "previous") {
        prevPost(finishedResponse, id);
    }
}

/*
export function disableBtn(array, btn) {
    for (let x = 0; x < array.length; x++) {
        if (array[x] === 0 || array[x] === array.length) {
            btn.disabled === true;
        }
    }
}
*/