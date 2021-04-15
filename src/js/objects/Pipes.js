import Configs from "../utils/Configs.js";

const Pipes = {
  __pipes: [],
  time: 250,
  width: 34,
  fix:null,
  height: 150,
  
  imgHeight: 32,
  topSrcY: 0,
  bottomSrcY: 34,
  image: new Image(),
  init() {
    Pipes.fix = 50/ Pipes.width
    Pipes.image.src = "./src/img/pipes-2.png";
  },
  draw() {
    Configs.ctx.fillStyle = "blue";
    Pipes.__pipes?.forEach((pipe) => {
       Configs.ctx.drawImage(
        Pipes.image,
        pipe.srcX,
        Pipes.bottomSrcY,
        Pipes.width,
        Pipes.imgHeight,
        pipe.pos_x,
        Configs.floor,
        pipe.width,
        -pipe.height
      );
      Configs.ctx.drawImage(
        Pipes.image,
        pipe.srcX,
        Pipes.topSrcY,
        Pipes.width,
        Pipes.imgHeight,
        pipe.pos_x,
        Configs.floor -pipe.height,
        pipe.width ,
        Pipes.imgHeight
      );
    });
    
  },
  generate() {
    Pipes.time = 50 + Math.random() * 100;
    Pipes.__pipes.push({
      pos_x: Configs.canvas.width,
      width: Pipes.width * Pipes.fix,
      height: Pipes.height * (1.1 - Math.random()),
      srcX: Pipes.width * Math.floor(Math.random() * 10)
    });
  },
  update() {
    Pipes.__pipes.map((pipe) => (pipe.pos_x -= Configs.velocity));
    if (-Pipes.width > Pipes.__pipes[0]?.pos_x) {
      Pipes.__pipes.shift();
    }
    if (Pipes.time-- < 0) {
      Pipes.generate();
    }
  },
};

export default Pipes;
