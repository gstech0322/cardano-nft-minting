import { Link } from "react-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons"
import "./style.scss"

const Sidebar = ({ showSidebar, onHandleSidebar }) => (
  <div
    className={`sidebar flex flex-column${showSidebar ? " sidebar-show" : ""}`}
    onClick={onHandleSidebar}
  >
    <Link
      className="navbar-links-anchor"
      activeClass="active"
      to={"roadmap"}
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
      onClick={onHandleSidebar}
    >
      Road map
    </Link>
    <Link
      className="navbar-links-anchor"
      activeClass="active"
      to={"game"}
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
      onClick={onHandleSidebar}
    >
      The Game
    </Link>
    <Link
      className="navbar-links-anchor"
      activeClass="active"
      to={"team"}
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
      onClick={onHandleSidebar}
    >
      Our Team
    </Link>
    <Link
      className="navbar-links-anchor"
      activeClass="active"
      to={"faq"}
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
      onClick={onHandleSidebar}
    >
      FAQ
    </Link>
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
      className="navbar-links-discord"
      aria-label="discord"
      href="https://twitter.com/CoollamaGangNFT"
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={faTwitter} />
    </a>
  </div>
)

export default Sidebar
