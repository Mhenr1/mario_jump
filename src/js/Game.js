import Configs from "./utils/Configs.js";
import Player from "./objects/Player.js";
import Pipes from "./objects/Pipes.js";
import Floor from "./scene/Floor.js";
import Background from "./scene/Background.js";
const Game = {
  status: Configs.status.playing,
  init(canvasID) {
    Configs.canvas = document.getElementById(canvasID);
    Configs.ctx = Configs.canvas.getContext("2d");
    Configs.floor = Configs.canvas.height - Floor.height;

    Floor.init();
    Background.init();
    Pipes.init();
    document.addEventListener("keydown", Player.move);
    document.addEventListener("keyup", () => (Player.locked = false));
    document.addEventListener("click", Player.jump);

    Game.run();
  },

  run() {
    if (Game.status === Configs.status.playing) {
      Game.finish();
      Game.update();
      Game.draw();
    }

    Configs.frame = requestAnimationFrame(Game.run, Configs.canvas);
  },
  draw() {
    Configs.ctx.clearRect(0, 0, canvas.width, canvas.height);
    Background.draw();
    Pipes.draw();
    Floor.draw();
    Player.draw();

    // Configs.ctx.font = "20px serif";
    // Configs.ctx.fillText(`P:  ${Player.pos_x}`, 400, 50);
  },
  update() {
    Background.update();
    Player.update();
    Pipes.update();
    Floor.update();
  },
  finish() {
    if (
      Player.pos_y + Player.height * 2 >=
        Configs.floor - Pipes.__pipes[0]?.height &&
      Pipes.__pipes[0]?.pos_x <= Player.pos_x + Player.width * 2 &&
      Pipes.__pipes[0]?.pos_x + Pipes.width > Player.pos_x
    ) {
      Game.status = Configs.status.stopped;
    
    }
   
  },
};

export default Game;
