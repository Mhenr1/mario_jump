import Configs from "../utils/Configs.js";

const Player = {
  width: 18,
  height: 31,
  srcX: 0,
  srcY: 0,
  jumpForce: 18,
  maxJumps: 0,
  velocity: 0,
  pos_x: 50,
  pos_y: 0,
  locked: false,
  image: new Image(),

  init() {
    Player.image.src = "./src/img/M&L.png";
  },
  draw() {
   
    Configs.ctx.drawImage(
      Player.image,
      Player.srcX,
      Player.srcY,
      Player.width,
      Player.height,
      Player.pos_x,
      Player.pos_y,
      Player.width * 2,
      Player.height * 2
    );
  },
  update() {
    Player.velocity += Configs.gravity;
    Player.pos_y += Player.velocity;
    if (Player.pos_y + Player.height * 2 > Configs.floor) {
      Player.pos_y = Configs.floor - Player.height * 2;
      Player.velocity = 0;
      Player.maxJumps = 0;
      Player.srcX =
        (Math.ceil(Configs.frame / Configs.velocity / 2) % 4) * Player.width;
    }
    if (Player.velocity > 0) {
      Player.srcX = 5 * Player.width;
    }
    if (Player.velocity < 0) {
      Player.srcX = 4 * Player.width;
    }
  },
  move(e) {
    if (
      e.keyCode === Configs.controls.up &&
      Player.maxJumps < 3 &&
      !Player.locked
    ) {
      Player.jump();
    }
    Player.locked = true;
  },
  jump() {
    Player.velocity = -Player.jumpForce;
    Player.maxJumps++;
  },
};
Player.init();
export default Player;
