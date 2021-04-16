import Configs from "./utils/Configs.js";
import Player from "./objects/Player.js";
import Pipes from "./objects/Pipes.js";
import Floor from "./scene/Floor.js";
import Background from "./scene/Background.js";
import Scoreboard from "./utils/Scoreboard.js";
const Game = {
  status: Configs.status.playing,
  init(canvasID) {
    Configs.canvas = document.getElementById(canvasID);
    Configs.ctx = Configs.canvas.getContext("2d");
    Game.resize()

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
      Game.playScreen();
    }
    if (Game.status === Configs.status.stopped) {
      Game.endScreen();
    }
    Configs.frame = requestAnimationFrame(Game.run, Configs.canvas);
  },
  draw() {
    Configs.ctx.clearRect(0, 0, Configs.canvas.width, Configs.canvas.height);
    Background.draw();
    Pipes.draw();
    Floor.draw();
    Player.draw();
    let x = 50,
      y = 50;
    Scoreboard.draw({ x, y, size: 20 });
  },
  update() {
    Background.update();
    Player.update();
    Pipes.update();
    Floor.update();
    Game.draw();
  },

  playScreen() {
    if (
      Player.pos_y + Player.height * 2 >=
        Configs.floor - Pipes.__pipes[0]?.height &&
      Pipes.__pipes[0]?.pos_x <= Player.pos_x + Player.width * 2 &&
      Pipes.__pipes[0]?.pos_x + Pipes.width > Player.pos_x
    ) {
      Game.status = Configs.status.stopped;
      Pipes.clear();
      Scoreboard.save();
    }
    Game.update();
  },
  endScreen() {
    Configs.ctx.clearRect(0, 0, canvas.width, canvas.height);
    Background.draw();
    Floor.draw();

    Player.draw();

    let x = Configs.canvas.width / 2,
      y = Configs.canvas.height / 2;
    Scoreboard.draw({ x, y, size: 50 });
  },
  resize() {
    Configs.canvas.height = Math.min(400, window.innerHeight);
    Configs.canvas.width = Math.min(720, window.innerWidth);
    Configs.floor = Configs.canvas.height - Floor.height;
    Floor.init();
  },
};
window.onresize = Game.resize;
export default Game;
