import { useState, useEffect } from "react"
import DashboardComponent from "components/Dashboard"

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  useEffect(() => {
    window.addEventListener("resize", getWindowWidth)

    return () => window.removeEventListener("resize", getWindowWidth)
  }, [])

  const getWindowWidth = () => {
    const { innerWidth: width } = window

    if (width > 768) {
      setShowSidebar(false)
    }
  }

  const onHandleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <DashboardComponent
      showSidebar={showSidebar}
      onHandleSidebar={onHandleSidebar}
    />
  )
}

export default Dashboard
