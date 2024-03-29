const GRIDBOX = document.getElementById("grid-box");
const BTNCLEAR = document.getElementById("btn-clear");
const BTNRANDOM = document.getElementById("btn-random");
const BTNCOLOR = document.getElementById("btn-color");
const elementBOX = document.getElementsByClassName("elementBOX");
const GRIDCONT = document.getElementById("grid-content");
const CLEARBUTTON = document.createElement("Button");

let gridtemp = 600;
let gridSize = 10;
let currentColor = "#000";

function elementGrid() {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const div = document.createElement("div");
      div.classList.add("elementBOX");
      GRIDBOX.append(div);
      div.addEventListener("mousedown", function (event) {
        drawWithHold(event);
      });
      div.addEventListener("mouseover", function (event) {
        if (event.buttons === 1) {
          drawWithHold(event);
        }
      });
    }
  }
  CLEARBUTTON.classList.add("button-clear");
  CLEARBUTTON.textContent = "CLEAR";
  GRIDCONT.append(CLEARBUTTON);
  CLEARBUTTON.addEventListener("click", () => {
    for (let i = 0; i < elementBOX.length; i++) {
      elementBOX[i].style.backgroundColor = "#fff";
    }
  });
  for (let i = elementBOX.length - 1; i >= 0; i--) {
    elementBOX[i].style.width = gridtemp / gridSize + "px";
    elementBOX[i].style.height = gridtemp / gridSize + "px";
  }
}
function preventDefaultMouseDown(event) {
  event.preventDefault();
}
document.addEventListener("mousedown", preventDefaultMouseDown);

function randomColor() {
  let color = "#";
  for (let i = 0; i < 3; ++i) {
    let RGB = Math.floor(Math.random() * 256);
    let rgbHEX = RGB.toString(16);
    color += rgbHEX.length === 1 ? "0" + rgbHEX : rgbHEX;
  }
  return color;
}

function drawWithHold(event) {
  event.target.style.backgroundColor = currentColor;
}

BTNRANDOM.addEventListener("click", function () {
  currentColor = randomColor();
});

BTNCOLOR.addEventListener("click", function () {
  currentColor = "#000";
});

BTNCLEAR.addEventListener("click", function () {
  currentColor = "#fff";
});

elementGrid();
