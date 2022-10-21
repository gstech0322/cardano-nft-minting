import "./style.scss"

const RoadmapFrame = ({ children }) => (
  <div className="roadmap-frame">
    <div className="roadmap-frame-deco-top"></div>
    <div className="roadmap-frame-deco-right"></div>
    <div className="roadmap-frame-deco-bottom"></div>
    <div className="roadmap-frame-deco-left"></div>
    <div className="roadmap-frame-deco-triangle-top"></div>
    <div className="roadmap-frame-deco-triangle-bottom"></div>
    <div className="roadmap-frame-contents flex flex-column">{children}</div>
  </div>
)

export default RoadmapFrame
