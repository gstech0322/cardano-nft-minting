import Navbar from "components/Navbar"
import Hero from "components/Hero"
import Gallery from "components/Gallery"
import SneakPeek from "components/SneakPeek"
import Horsemen from "components/Horsemen"
import Roadmap from "components/Roadmap"
import Game from "components/Game"
import Team from "components/Team"
import FAQ from "components/FAQ"
import Footer from "components/Footer"

import "./style.scss"
import Sidebar from "components/Sidebar"

const Dashboard = ({ showSidebar, onHandleSidebar }) => (
  <div className="dashboard">
    <Sidebar showSidebar={showSidebar} onHandleSidebar={onHandleSidebar} />
    <Navbar onHandleSidebar={onHandleSidebar} />
    <Hero />
    <Gallery />
    <SneakPeek />
    <Horsemen />
    <Roadmap />
    <Game />
    <Team />
    <FAQ />
    <Footer />
  </div>
)

export default Dashboard
