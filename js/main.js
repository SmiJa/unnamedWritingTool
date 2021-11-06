const pageWrap = document.querySelector('#page_wrap');
const page = document.querySelector('#page');

function caretParent() {
    let selection = window.getSelection();
    let container = selection.anchorNode;

    return container.parentNode;
}

document
    .addEventListener("keydown", function(event) {
        let row = caretParent();
        if (event.altKey && event.key === "a") {

            console.log("You pressed Alt + a");
            row.className = "line scene-header";
            // row.innerHTML += `
            // <span class="scene-header"></span>
            // `
            console.log(caretParent());
        }
    });

document
    .addEventListener("keydown", function(event) {
        let row = caretParent();
        if (event.altKey && event.key === "x") {

            console.log("You pressed Alt + a");
            row.className = "scene-action";
            // row.innerHTML += `
            // <span class="scene-header"></span>
            // `
            console.log(caretParent());
        }
    });

document
    .addEventListener("keydown", function(event) {
        let row = caretParent();
        if (event.altKey && event.key === "c") {

            console.log("You pressed Alt + a");
            row.className = "scene-character";
            // row.innerHTML += `
            // <span class="scene-header"></span>
            // `
            console.log(caretParent());
        }
    });

document
    .addEventListener("keydown", function(event) {
        let row = caretParent();
        if (event.altKey && event.key === "z") {

            console.log("You pressed Alt + a");
            row.className = "scene-character-dialogue";
            // row.innerHTML += `
            // <span class="scene-header"></span>
            // `
            console.log(caretParent());
        }
    });

document
    .addEventListener("keydown", function(event) {
        let row = caretParent();
        if (event.altKey && event.key === "q") {

            console.log("You pressed Alt + a");
            row.className = "scene-character-parentheticals";
            // row.innerHTML += `
            // <span class="scene-header"></span>
            // `
            console.log(caretParent());
        }
    });