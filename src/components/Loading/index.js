import LoadingFrame from "resources/roadmap-title.png"
import "./style.scss"

const Loading = () => (
  <div className="loading flex">
    <div className="loading-wrapper flex">
      <img src={LoadingFrame} alt="loading" />
      <span>Loading</span>
    </div>
  </div>
)

export default Loading
