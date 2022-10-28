import { keysPressed } from "./controls";

var player = {
  x: -200,
  y: 200,
  w: 50,
  h: 50,
  color: "blue",
  xSpeed: 5,
  ySpeed: 5,
  //xDir: 1,
  //yDir: 1,

  move: function () {
    if (keysPressed.w == true) {
      this.y += this.ySpeed;
    }

    if (keysPressed.s == true) {
      this.y += -this.ySpeed;
    }
    if (keysPressed.a == true) {
      this.x += -this.xSpeed;
    }
    if (keysPressed.d == true) {
      this.x += this.xSpeed;
    }
    // player.x += this.xSpeed;
    // player.y += this.ySpeed;
  },
  draw: function (canvas) {
    canvas.ctx.beginPath();
    //   canvas.fillRectangle(this.x, this.y, this.w, this.h, this.color);
    canvas.ctx.moveTo(this.x - this.w / 2, this.y - this.h / 2);
    canvas.ctx.lineTo(this.x + this.w / 2, this.y - this.h / 2);
    canvas.ctx.lineTo(this.x, this.y + 20);
    canvas.ctx.fillStyle = this.color;
    canvas.ctx.fill();
    canvas.ctx.closePath();
  },
  detectBounce: function (canvas) {
    if (this.x > canvas.width / 2) {
      this.xSpeed = -this.xSpeed;
    }
    if (this.x < -canvas.width / 2) {
      this.xSpeed = -this.xSpeed;
    }
    if (this.y > canvas.height / 2) {
      this.ySpeed = -this.ySpeed;
    }
    if (this.y < -canvas.height / 2) {
      this.ySpeed = -this.ySpeed;
    }
  }
};

export { player };
