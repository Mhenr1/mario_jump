import Configs from "./Configs.js";

const Scoreboard = {
  score: 0,
  record: 0,

  draw({ x, y, size }) {
    Configs.ctx.font = `${size}px 'Press Start 2P'`;

    Configs.ctx.textAlign = "center";
    Configs.ctx.textBaseline = "middle";
    Configs.ctx.fillStyle = "#fff";
    Configs.ctx.fillText(`P: ${Scoreboard.score}`, x, y);
    Configs.ctx.fillStyle = "#000";
    Configs.ctx.strokeText(`P: ${Scoreboard.score}`, x, y);
  },
  save() {
    Scoreboard.record = Math.max(Scoreboard.record, Scoreboard.score);
    localStorage.setItem("record", Scoreboard.record);
  },
};
Scoreboard.record = localStorage.getItem("record") || 0;
export default Scoreboard;
