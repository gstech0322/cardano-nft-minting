import { useState, useEffect } from "react"
import { calculateTimeLeft } from "helpers/timer"
import HeroTitle from "resources/hero-title.png"
import "./style.scss"

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  }, [timeLeft])

  return (
    <div className="hero flex flex-column">
      <div className="hero-wrapper container flex flex-column">
        <div className="hero-title flex flex-column">
          <span>Welcome to the</span>
          <span>Coollama Gang!</span>
          <div className="hero-comment">
            Here on Planet PXON9
            <br /> is full of mysteries...
          </div>
        </div>
        <div className="hero-news">
          500 Presale Llamas - SOLD OUT <br />
          Public Launch : 8th November, 3PM UTC
        </div>
        {Object.keys(timeLeft).length === 0 ? (
          <div className="hero-mint flex">
            <button>
              <a href="https://mint.coollamagang.com/" rel="noreferrer">
                MINT
              </a>
            </button>
          </div>
        ) : (
          <div className="hero-timer flex">
            <div className="hero-timer-item flex flex-column">
              <span>{timeLeft.days}</span>
              <span>Days</span>
            </div>
            <div className="hero-timer-item flex flex-column">
              <span>{timeLeft.hours}</span>
              <span>Hours</span>
            </div>
            <div className="hero-timer-item flex flex-column">
              <span>{timeLeft.minutes}</span>
              <span>Minutes</span>
            </div>
            <div className="hero-timer-item flex flex-column">
              <span>{timeLeft.seconds}</span>
              <span>Seconds</span>
            </div>
          </div>
        )}
      </div>
      <div className="hero-background"></div>
    </div>
  )
}

export default Hero
