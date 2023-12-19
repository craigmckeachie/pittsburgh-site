"use strict";



function init() {
    const nextImgButton = document.querySelector("#next-img-button");
    let imgNum = 1;


    nextImgButton.addEventListener("click", changeImg);
}

window.onload = init;