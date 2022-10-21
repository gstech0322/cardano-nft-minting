import Conquest from "resources/unique/conquest.png"
import Hunger from "resources/unique/hunger.png"
import Fury from "resources/unique/fury.png"
import Death from "resources/unique/death.png"
import "./style.scss"

const Horsemen = () => (
  <div className="horsemen flex flex-column">
    <div className="horsemen-title container">
      1/1 UNIQUE : THE FOUR HORSEMEN
    </div>
    <div className="horsemen-wrapper container">
      <div className="horsemen-item flex flex-column">
        <img src={Conquest} alt="conquest" loading="lazy" />
        <span>Conquest</span>
      </div>
      <div className="horsemen-item flex flex-column">
        <img src={Hunger} alt="hunger" loading="lazy" />
        <span>Hunger</span>
      </div>
      <div className="horsemen-item flex flex-column">
        <img src={Fury} alt="fury" loading="lazy" />
        <span>Fury</span>
      </div>
      <div className="horsemen-item flex flex-column">
        <img src={Death} alt="death" loading="lazy" />
        <span>Death</span>
      </div>
    </div>
  </div>
)

export default Horsemen
