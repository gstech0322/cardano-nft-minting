import { Link } from "react-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import LOGO from "resources/logo.png"
import "./style.scss"

const Navbar = ({ onHandleSidebar }) => (
  <div className="navbar flex">
    <div className="navbar-wrapper container flex">
      <div className="navbar-logo">
        <img src={LOGO} alt="logo" />
        CLG
      </div>
      <div className="navbar-wrapper flex">
        <div className="navbar-links flex">
          <Link
            className="navbar-links-anchor"
            activeClass="active"
            to={"roadmap"}
            spy={true}
            smooth={true}
            offset={-55}
            duration={500}
          >
            Roadmap
          </Link>
          <Link
            className="navbar-links-anchor"
            activeClass="active"
            to={"game"}
            spy={true}
            smooth={true}
            offset={-55}
            duration={500}
          >
            The Game
          </Link>
          <Link
            className="navbar-links-anchor"
            activeClass="active"
            to={"team"}
            spy={true}
            smooth={true}
            offset={-55}
            duration={500}
          >
            Our Team
          </Link>
          <Link
            className="navbar-links-anchor"
            activeClass="active"
            to={"faq"}
            spy={true}
            smooth={true}
            offset={-55}
            duration={500}
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
            className="navbar-links-twitter"
            aria-label="discord"
            href="https://twitter.com/CoollamaGangNFT"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
        <div className="navbar-social">
          <FontAwesomeIcon icon={faBars} onClick={onHandleSidebar} />
        </div>
      </div>
    </div>
  </div>
)

export default Navbar
