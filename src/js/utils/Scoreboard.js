import Configs from "./Configs.js";

const Scoreboard = {
  score: 0,
  record: 0,

  draw({ x, y, size }) {
    Configs.ctx.font = `${size}px serif`;
    Configs.ctx.textAlign = "center";
    Configs.ctx.textBaseline = "middle";
    Configs.ctx.fillText(`P: ${Scoreboard.score}`, x, y);
  },
  save() {
    Scoreboard.record = Math.max(Scoreboard.record, Scoreboard.score);
    localStorage.setItem("record", Scoreboard.record);
  },
};
Scoreboard.record = localStorage.getItem("record") || 0;
export default Scoreboard;