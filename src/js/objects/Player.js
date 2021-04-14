import Configs from "../utils/Configs.js";

const Player = {
  width: 50,
  height: 50,
  jumpForce: 18,
  maxJumps: 0,
  velocity: 0,
  pos_x: 50,
  pos_y: 0,
  locked: false,

  draw() {
    Configs.ctx.fillStyle = "green";
    Configs.ctx.fillRect(
      Player.pos_x,
      Player.pos_y,
      Player.width,
      Player.height
    );
  },
  update() {
    Player.velocity += Configs.gravity;
    Player.pos_y += Player.velocity;
    if (Player.pos_y + Player.height > Configs.floor) {
      Player.pos_y = Configs.floor - Player.height;
      Player.velocity = 0;
      Player.maxJumps = 0;
    }
  },
  move(e) {
    if (
      e.keyCode === Configs.controls.up &&
      Player.maxJumps < 3 &&
      !Player.locked
    ) {
      Player.locked = true;
      Player.jump();
    }
  },
  jump() {
    Player.velocity = -Player.jumpForce;
    Player.jump++;
  },
};

export default Player;
