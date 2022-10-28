// import Canvas from "../helpers";
import { canvas } from "./main";

var keysPressed = {
  w: false,
  a: false,
  s: false,
  d: false
};

document.addEventListener("keydown", function (event) {
  keysPressed[event.key] = true;
});

document.addEventListener("keyup", function (event) {
  keysPressed[event.key] = false;
});

var mouse = {
  clicked: false,
  x: 0,
  y: 0
};

// document.addEventListener("mousemove", function (event) {
//   mouse.x = event.clientX - canvas.width / 2;
//   mouse.y = event.clientY + canvas.height / 2;
// });

// document.addEventListener("mouseup", function (event) {
//   mouse["clicked"] = false;
// });

export { keysPressed, mouse };
