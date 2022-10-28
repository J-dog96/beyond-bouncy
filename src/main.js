import Canvas from "../helpers.js";
import { keysPressed, mouse } from "./controls";
import { player } from "./player";
import { enemy1 } from "./enemy1";
import { enemy2 } from "./enemy2";
import { enemy3 } from "./enemy3";

var canvas = new Canvas();

function frameLoop() {
  // clear last frame for the illusion of movement
  canvas.erase();
  canvas.drawAxes(15, 20, "#00ff88");
  // things that happen in the game every frame
  console.log(mouse.y);

  // canvas.fillCircle(mouse.x, mouse.y, 50, "green");

  player.draw(canvas);
  player.move();
  player.detectBounce(canvas);

  var enemies = [enemy2, enemy1, enemy3];
  // for (var currentEnemy of enemies) {
  //   currentEnemy.draw(canvas);
  //   currentEnemy.move();
  //   currentEnemy.detectBounce(canvas);
  //   if (currentEnemy.isToutchingPlayer()) {
  //     if (keysPressed.e == true) {
  //       currentEnemy.xDir = -currentEnemy.xDir;
  //       currentEnemy.yDir = -currentEnemy.yDir;
  //       currentEnemy.xSpeed += 1;
  //       currentEnemy.ySpeed += 1;
  //     } else {
  //       player.xSpeed = 0;
  //       player.ySpeed = 0;
  //     }
  //   }
  // }

  // move on to the next frame, repeat all above
  requestAnimationFrame(frameLoop);
}

frameLoop();
export { canvas };
