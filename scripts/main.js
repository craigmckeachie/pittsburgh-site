const textDisplay = document.querySelector("#text-display");
const displayButton = document.querySelector("#display-button");
const memePicture = document.querySelector("#meme");

const jingleBells = [
  "Dashing through the snow",
  "In a one-horse open sleigh",
  "O'er the fields we go",
  "Laughing all the way",
  "Bells on bobtail ring",
  "Making spirits bright",
  "What fun it is to ride and sing",
  "A sleighing song tonight!",
  "",
  "Jingle bells, jingle bells",
  "Jingle all the way",
  "Oh, what fun it is to ride",
  "In a one-horse open sleigh, hey",
  "Jingle bells, jingle bells",
  "Jingle all the way",
  "Oh, what fun it is to ride",
  "In a one-horse open sleigh",
];

function marquee() {
  const m = document.createElement("marquee");
  m.innerText = jingleBells;
  m.setAttribute('scrollamount', 10, 0);
  textDisplay.appendChild(m);

  document.body.style.backgroundColor = "red";
  memePicture.innerHTML = "";
  let img = document.createElement("img");
  img.src = ("../images/santa.webp")
  memePicture.appendChild(img);
}

displayButton.onclick = marquee;
