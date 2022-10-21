import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons"
import "./style.scss"

const Footer = () => (
  <div className="footer flex">
    <a
      className="navbar-links-discord"
      aria-label="discord"
      href="https://discord.gg/Zymu7r2u7w"
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={faDiscord} />
    </a>
    <a
      className="navbar-links-twitter"
      aria-label="discord"
      href="https://twitter.com/CoollamaGangNFT"
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={faTwitter} />
    </a>
  </div>
)

export default Footer
