import Configs from "../utils/Configs.js";

const Background = {
  image: new Image(),

  srcX: 2,
  srcY: 436,
  height: 432,
  width: 512,
  color: "lightBlue",
  __box: [],

  init() {
    Background.image.src = "./src/img/backgrounds.png";

    let nBox = Math.ceil(Configs.canvas.width / Background.width ) + 1;
    Background.__box= []
    for (let i = Background.__box.length; i < nBox; i++) {
      Background.__box.push({
        posX: i * (Background.width - 1),
      });
    }
    console.table(Background.__box);
  },
  draw() {
    Configs.ctx.fillStyle = Background.color;
    Configs.ctx.fillRect(0, 0, Configs.canvas.width, Configs.canvas.height);
    Background.__box.forEach((box) => {
      Configs.ctx.drawImage(
        Background.image,
        Background.srcX,
        Background.srcY,
        Background.width,
        Background.height,
        box.posX,
        Configs.floor,
        Background.width,
        -Background.height
      );
    });
  },
  update() {
    Background.__box.map((box) => {
      box.posX -= Configs.velocity / 2;
    });

    if (Background.__box[0].posX <= -Background.width) {
      Background.__box.shift();
      let lastBox = Background.__box[Background.__box.length - 1];
      Background.__box.push({ posX: lastBox.posX - 1 + Background.width });
    }
  },
};

export default Background;
