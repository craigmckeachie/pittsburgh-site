"use strict";

const bryceImgs = ["Frankie.jpg", "Beethoven.jpg", "emmyBeethoven.jpg", "FrankieLeaf.jpg", "TimmyEmmy.jpg"];
let imgIndex = 0;

function init() {
  const nextImgButton = document.querySelector("#next-img-button");
  const bryceCurrentImg = document.querySelector("#bryce-current-img");

  function nextImg() {
    imgIndex++;

    while (imgIndex >= bryceImgs.length) {
      imgIndex -= bryceImgs.length;
    }

    bryceCurrentImg.src = `images/${bryceImgs[imgIndex]}`;
  }

  nextImgButton.addEventListener("click", nextImg);
}

window.onload = init;
