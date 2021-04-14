import Configs from "./utils/Configs.js";
import Player from "./objects/Player.js";
import Pipes from "./objects/Pipes.js";
import Floor from "./scene/Floor.js";
import Background from "./scene/Background.js";
const Game = {
  status: Configs.status.playing,
  init(canvasID) {
    document.addEventListener("keydown", Player.move);
    document.addEventListener("keyup", () => (Player.locked = false));
    Configs.canvas = document.getElementById(canvasID);
    Configs.ctx = Configs.canvas.getContext("2d");
    Configs.floor = Configs.canvas.height - 50;
    Floor.init();
    Background.init();

    Game.run();
  },

  run() {
    if (Game.status === Configs.status.playing) {
      Game.finish();
      Game.update();
      Game.draw();
    }

    requestAnimationFrame(Game.run, Configs.canvas);
  },
  draw() {
    Configs.ctx.clearRect(0, 0, canvas.width, canvas.height);
    Background.draw();
    Floor.draw();
    Pipes.draw();
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
      Player.pos_y + Player.height >=
        Configs.floor - Pipes.__pipes[0]?.height &&
      Pipes.__pipes[0]?.pos_x <= Player.pos_x + Pipes.width &&
      Pipes.__pipes[0]?.pos_x + Pipes.width > Player.pos_x
    ) {
      Game.status = Configs.status.stopped;
      console.table({
P:0

      });
    }
  },
};

export default Game;
