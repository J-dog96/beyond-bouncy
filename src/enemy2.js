import { player } from "./player";

var enemy2 = {
  x: 53,
  y: 10,
  w: 50,
  h: 50,
  color: "orange",
  xSpeed: 4,
  ySpeed: 5.5,
  xDir: 1,
  yDir: -1,

  draw: function (canvas) {
    canvas.fillRectangle(this.x, this.y, this.w, this.h, this.color);
  },

  move: function () {
    this.x += this.xSpeed * this.xDir;
    this.y += this.ySpeed * this.yDir;
  },
  detectBounce: function (canvas) {
    if (this.x > canvas.width / 2) {
      this.xDir = -this.xDir;
    }
    if (this.x < -canvas.width / 2) {
      this.xDir = -this.xDir;
    }
    if (this.y > canvas.width / 2) {
      this.yDir = -this.yDir;
    }
    if (this.y < -canvas.width / 2) {
      this.yDir = -this.yDir;
    }
  },

  isToutchingPlayer() {
    var thisLeft = this.x;
    var thisRight = this.x + this.w;
    var playLeft = player.x;
    var playRight = player.x + player.w;
    var thisTop = this.y;
    var thisBot = this.y + -this.h;
    var playTop = player.y;
    var playBot = player.y + -player.h;

    if (
      playRight >= thisLeft &&
      playLeft <= thisRight &&
      playTop >= thisBot &&
      playBot <= thisTop
    ) {
      return true;
    } else {
      return false;
    }
  }
};
export { enemy2 };
