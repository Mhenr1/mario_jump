import Configs from "../utils/Configs.js";

const Pipes = {
  __pipes: [],
  time: 250,
  width: 50,
  height: 150,

  draw() {
    Configs.ctx.fillStyle = "blue";
    Pipes.__pipes?.forEach((pipe) => {
      Configs.ctx.fillRect(
        pipe.pos_x,
        Configs.floor - pipe.height,
        Pipes.width,
        pipe.height
      );
    });
  },
  generate() {
    Pipes.time = 50 + Math.random() * 100;
    Pipes.__pipes.push({
      pos_x: Configs.canvas.width,
      width: 50,
      height: Pipes.height * (1.1 - Math.random()),
    });
  },
  update() {
    Pipes.__pipes.map((pipe) => (pipe.pos_x -= Configs.velocity));
    if (-50 > Pipes.__pipes[0]?.pos_x) {
      Pipes.__pipes.shift();
    }
    if (Pipes.time-- < 0 && Configs.velocity !== 0) {
      Pipes.generate();
    }
  },
};

export default Pipes;
