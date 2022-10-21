import "./style.scss"
import GameRoadmap from "resources/game_map.png"

const Game = () => (
  <div className="game flex flex-column">
    <div className="game-title container">GAME ROADMAP</div>
    <div className="game-wrapper container">
      <div className="game-decoration">
        <span>Game Roadmap</span>
      </div>
      <div className="game-roadmap">
        <div className="game-roadmap-wrapper">
          <img src={GameRoadmap} alt="game roadmap" />
        </div>
      </div>
    </div>
  </div>
)

export default Game
