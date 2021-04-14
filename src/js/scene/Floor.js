import Configs from "../utils/Configs.js";

const Floor = {
  image: new Image(),
  
  height: 50,
  srcX: 214,
  topSrcY: 482,
  topHeight: 9,
  bottomSrcY: 492,
  bottomHeight: 15,
  color: "#c89858",
  __box: [],
  width: 68,
  init() {
    Floor.image.src = "../src/img/background-objects.gif";
    let nBox = 1 + Math.ceil(Configs.canvas.width / (Floor.width * 2));
    Configs.ctx.fillStyle = Floor.color;
    Configs.ctx.fillRect(0, Configs.floor, Configs.canvas.width, 50);
    for (let i = 0; i <= nBox; i++) {
      Floor.__box.push({
        posX: 2 * i * (Floor.width - 1),
      });
    }
  },
  draw() {
    Configs.ctx.fillStyle = Floor.color;
    Configs.ctx.fillRect(0, Configs.floor, Configs.canvas.width, Floor.height);
    Floor.__box.forEach((box) => {
      Configs.ctx.drawImage(
        Floor.image,
        Floor.srcX,
        Floor.topSrcY,
        Floor.width,
        Floor.topHeight,
        box.posX,
        Configs.floor,
        Floor.width * 2,
        Floor.topHeight * 2
      );
      Configs.ctx.drawImage(
        Floor.image,
        Floor.srcX,
        Floor.bottomSrcY,
        Floor.width,
        Floor.bottomHeight,
        box.posX,
        Configs.floor - 1 + Floor.topHeight * 2,
        Floor.width * 2,
        Floor.bottomHeight * 2
      );
    });
  },

  update() {
  
    Floor.__box.map((box) => {
      box.posX -= Configs.velocity;
    });
    if (Floor.__box[0].posX <= -Floor.width * 2) {
      Floor.__box.shift();
      let lastBox = Floor.__box[Floor.__box.length - 1];
      Floor.__box.push({
        posX: lastBox.posX - 1 + Floor.width * 2,
      });
    }
  },
};

export default Floor;
