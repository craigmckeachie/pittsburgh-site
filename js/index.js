const generateButton = document.getElementById("generateButton");
const helloBlock = document.querySelector(".hello-block");

generateButton.onclick = function () {
  if (helloBlock.querySelectorAll("p").length <= 100) {
    function loop() {
      for (let i = 0; i <= 10; i++) {
        let hello = document.createElement("p");
        hello.innerText = "Hello!";

        hello.style = `font-size: 1.${i}rem`;
        helloBlock.appendChild(hello);
        if (i == 10) {
          setTimeout(() => {
            loop();
          }, 750);
        }
      }
    }
  }
};
