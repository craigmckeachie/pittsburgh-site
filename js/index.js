const generateButton = document.getElementById("generateButton");
const helloBlock = document.querySelector(".hello-block");
let allPLength = helloBlock.querySelectorAll("p").length;

generateButton.onclick = function () {
  function loop() {
    if (allPLength <= 100) {
      for (let i = 0; i <= 10; i++) {
        console.log(allPLength);

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
    if (allPLength >= 100 && allPLength <= 200) {
      for (let i = 0; i <= 10; i++) {
        let hello = document.createElement("p");
        hello.innerText = "Meow!";

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
  loop();
};
