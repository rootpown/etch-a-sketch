const GRIDBOX = document.getElementById("grid-box");
const BTNCLEAR = document.getElementById("btn-clear");
const BTNRANDOM = document.getElementById("btn-random");
const BTNCOLOR = document.getElementById("btn-color");
const elementBOX = document.getElementsByClassName("elementBOX");
let gridtemp = 600;
let gridSize = 16;
function randomColor() {
  let color = "#";
  for (let i = 0; i < 3; ++i) {
    let RGB = Math.floor(Math.random() * 256);
    let rgbHEX = RGB.toString(16);
    color += rgbHEX.length === 1 ? "0" + rgbHEX : rgbHEX;
  }
  return color;
}
function elementGrid() {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const div = document.createElement("div");
      div.classList.add("elementBOX");
      GRIDBOX.append(div);

      div.addEventListener(
        "mouseover",
        () => (div.style.backgroundColor = "#000")
      );
      BTNCLEAR.addEventListener("click", () => {
        div.style.backgroundColor = "#fff";
      });
      let RGB = randomColor();
      div.addEventListener("mouseover", () => {
        div.style.backgroundColor = RGB;
      });
    }
  }
  for (let i = elementBOX.length - 1; i >= 0; i--) {
    elementBOX[i].style.width = gridtemp / gridSize + "px";
    elementBOX[i].style.height = gridtemp / gridSize + "px";
  }
}

elementGrid();
