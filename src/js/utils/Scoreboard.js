import Configs from "./Configs.js";

const Scoreboard = {
  score: 0,
  record: 0,
  init() {

    Scoreboard.record = localStorage.getItem('record')||0
  },
  draw() {
    Configs.ctx.font = "20px serif ";
    Configs.ctx.fillText(`P: ${Scoreboard.score}`, 400, 50);

  }
};

export default Scoreboard;
