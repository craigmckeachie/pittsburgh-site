"use strict";

const bryceImgs = ["Frankie.jpg", "Beethoven.jpg", "emmyBeethoven.jpg", "FrankieLeaf.jpg", "TimmyEmmy.jpg"];
let imgIndex = 0;

function init() {
  const nextImgButton = document.querySelector("#next-img-button");
  const previousImgButton = document.querySelector("#previous-img-button");
  const bryceCurrentImg = document.querySelector("#bryce-current-img");

  function nextImg() {
    imgIndex++;

    while (imgIndex >= bryceImgs.length) {
      imgIndex -= bryceImgs.length;
    }

    bryceCurrentImg.src = `images/${bryceImgs[imgIndex]}`;
  }

  function previousImg() {
    imgIndex--;

    while (imgIndex < 0) {
      imgIndex += bryceImgs.length;
    }

    bryceCurrentImg.src = `images/${bryceImgs[imgIndex]}`;
  }

  nextImgButton.addEventListener("click", nextImg);
  previousImgButton.addEventListener("click", previousImg);
}

window.onload = init;
