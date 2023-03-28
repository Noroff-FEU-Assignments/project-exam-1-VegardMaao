function nextPost(array, btn, id) {
    let idNumber = parseInt(id);
    for (let i = 0; i < array.length; i++) {
        if (i === array.length - 1) {
            btn.disabled = true;
        } else if (array[i].id === idNumber) {
            let newID = array[i + 1].id;
            location.href = `singleblogpost.html?id=${newID}`;
        }
    }
}

function prevPost(array, btn, id) {
    let idNumber = parseInt(id);
    for (let i = 0; i < array.length; i++) {
        if (i === 0) {
            btn.disabled = true;
        } else if (array[i].id === idNumber) {
            let newID = array[i - 1].id;
            location.href = `singleblogpost.html?id=${newID}`;
        }
    }
}

export async function makeArray(url, btn, idFromUrl) {
    const id = idFromUrl;
    let response = await fetch(url);
    let finishedResponse = await response.json();
    console.log(finishedResponse);
    if (btn.id === "next") {
        nextPost(finishedResponse, btn, id);
    } else if (btn.id === "previous") {
        prevPost(finishedResponse, btn, id);
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